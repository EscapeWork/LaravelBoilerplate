@servers(['locaweb' => 'user@server.com.br'])

@task('configure-git-repo')
    cd ~/

    @if (! is_dir('repos'))
        mkdir repos
    @endif

    cd repos

    @if (isset($project))
        @if (! is_dir($project . '.git'))
            mkdir {{ $project }}.git
        @endif
    @endif

    cd {{ $project }}.git
    git init --bare
    cd hooks
    curl https://gist.githubusercontent.com/luisdalmolin/66cae887fe655491c5cad413d544f434/raw/994a021503dd8c626c4792f51f6609803ae26355/post-receive.sh -o post-receive
    chmod +x post-receive
@endtask
