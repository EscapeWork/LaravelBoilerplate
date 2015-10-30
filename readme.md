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
=======
# Laravel Boilerplate

This is a personal Laravel Boilerplate, by [Agência Escape](http://www.escape.ppg.br).

### Installation

```sh
$ git clone git@github.com:EscapeWork/LaravelBoilerplate.git [your-project-name] && cd $_ && rm -rf .git
$ composer install
$ php artisan key:generate
$ npm install
```

This command will:

* Clone this repository;
* Install composer dependencies;
* Install npm dependencies;
* Generate Laravel key;

***

### License

#### The MIT License (MIT)

Copyright (c) 2013 Escape Criativação LTDA

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
