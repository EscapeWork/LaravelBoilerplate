@servers(['locaweb' => 'ssh@host', 'localhost' => '127.0.0.1'])

<?php
/* configure aqui as variáveis */
$project = 'your-project-name';
$ftpuser = 'your-ftp-user';
?>

@task('configure-php', ['on' => 'locaweb'])
    {{-- http://wiki.locaweb.com.br/pt-br/Como_alterar_a_vers%C3%A3o_do_PHP --}}
    cd ~/
    sed -i -- 's/\/usr\/lib\/php\/modules/\/usr\/lib64\/php56\/modules/g' php.ini
    sed -i -- 's/register_globals = On/register_globals = Off/g' php.ini
    sed -i -- 's/register_long_arrays = On/register_long_arrays = Off/g' php.ini
@endtask

@task('generate-ssh-key', ['on' => 'locaweb'])
    ssh-keygen -t rsa
@endtask

@task('configure-app-directory', ['on' => 'locaweb'])
    cd ~/

    @if (! is_dir('apps'))
        mkdir apps
    @endif

    @if (isset($project))
        @if (! is_dir('apps/'.$project))
            mkdir apps/{{ $project }}
        @endif
    @endif
@endtask

@task('configure-composer', ['on' => 'locaweb'])
    {{-- http://ajuda.locaweb.com.br/pt-br/Composer --}}
    cd ~/
    sed -i -- 's/allow_url_fopen = Off/allow_url_fopen = On/g' php.ini
    echo 'suhosin.executor.include.whitelist = phar' >> php.ini
    @if (isset($project))
        cd ~/apps/{{ $project }}
        curl -sS https://getcomposer.org/installer | php56 -c ~/php.ini
    @endif
@endtask

@task('configure-git-repo', ['on' => 'locaweb'])
    cd ~/

    @if (! is_dir('repos'))
        mkdir repos
    @endif

    cd repos

    @if (isset($project))
        @if (! is_dir($project . '.git'))
            mkdir {{ $project }}.git
        @endif

        cd {{ $project }}.git
        git init --bare
        cd hooks
        curl https://gist.githubusercontent.com/luisdalmolin/66cae887fe655491c5cad413d544f434/raw/994a021503dd8c626c4792f51f6609803ae26355/post-receive.sh -o post-receive
        chmod +x post-receive
    @endif
@endtask

@story('remove-htaccess')
    remove-htaccess-locally
    configure-htaccess-remotly
@endstory

@task('remove-htaccess-locally', ['on' => 'localhost'])
    echo 'public/.htaccess' >> .gitignore
    cp public/.htaccess public/htaccess
    git rm --cached public/.htaccess
    echo 'Agora commite suas alterações e envie para produção'
@endtask

@task('configure-htaccess-remotly', ['on' => 'locaweb'])
    cd ~/

    cd apps/{{ $project }}/public
    cp htaccess .htaccess
    echo '' > .htaccess
    echo '# Locaweb PHP configuration' >> .htaccess
    echo 'AddHandler php56-script .php' >> .htaccess
    echo 'suPHP_ConfigPath /home/{{ $ftpuser }}/' >> .htaccess
@endtask
