## Cliente - Site

Site do [Cliente](http://www.dominio.com.br).

Este projeto utiliza o framework [Laravel](http://laravel.com), na versão **5.1**.

### Dependências globais

É necessário ter o seu **PHP** na versão 5.5+, **Ruby** e **NodeJS** instalados.

Depois de confirmar que você tem todos estes itens instalados, execute no terminal (caso você ainda não tenha instalado):

* `[sudo] npm install -g grunt bower
* `[sudo] gem install sass compass susy

### Configurando para desenvolvimento

* Configure o domínio `seudominio.dev` para apontar para a pasta `public` deste projeto.

Execute os seguintes comandos: 

```
$ composer install
$ npm install
$ bower install
$ chmod -R 777 storage
```

* Crie um arquivo chamado `.env`, e coloque o conteúdo do arquivo `.env.example` nele;
* Altere as configurações do arquivo `.env` para as configurações que serão utilizadas no seu projeto;

Execute os seguintes comandos: 

```
$ php artisan manager:configure
$ php artisan migrate
$ php artisan db:seed
```

Pronto, tudo já deve estar funcionando agora acessando o `seudominio.dev`.

### Desenvolvendo

Enquanto estiver desenvolvendo, abra o seu terminal e digite o seguinte comando:

```
$ grunt
```

Com este comando, o `SASS` vai ser compilado a cada alteração, assim como os `javascripts` serão minificados.

### Deploy

Para fazer deploy, adicione o remote `deploy` no GIT:

```
$ git remote add deploy ssh://user@server.com.br/~/repos/repo.git
```

Depois, é só dar um push para o branch `master`:

```
$ git push deploy master
```

#### Deploy script

Depois de fazer o deploy, o seu servidor de produção deve estar configurado para executar os seguintes comandos: 

```
$ composer install --no-dev
$ php artisan migrate --force
$ php artisan db:seed --force
$ php artisan asset:dist
$ php artisan route:cache
$ php artisan config:cache
```