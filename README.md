# Laravel Bootstrap

This is a personal Laravel Bootstrap, by [Escape Criativação](http://www.escape.ppg.br).

### Installation

```sh
$ composer create-project escape/laravel-bootstrap your-project-name
```

This command will:

* Clone this repository;
* Install composer dependencies;
* Install npm dependencies;
* Generate Laravel key;

***

### Assets

This bootstrap utilizes [SASS](http://sass-lang.com/), [Compass](http://compass-style.org/) and [Grunt](http://gruntjs.com/). So you will need:

* [NodeJS](http://nodejs.org/)
  * [Grunt](http://gruntjs.com/) `$ npm install -g grunt-cli`
* [Ruby](https://www.ruby-lang.org/)
  * [SASS](http://sass-lang.com/) `$ gem install sass`
  * [Compass](http://compass-style.org/) `$ gem install compass`

To compile and watch for changes in your assets, run:

```sh
$ grunt
```

If you get an error message like `Error: invalid option: --sourcemap`, please remove your existing compass version and install with the option `--pre`.

```
$ [sudo] gem install compass --pre
```

#### Assets structure

##### SCSS

public/stylesheets/scss
```
├── main.scss (import all the files in the tree)
├── components
│   ├── _normalize.scss
│   └── _helpers.scss
├── core
│   ├── _general.scss
│   ├── _header.scss
│   └── _footer.scss
├── global
│   ├── _variables.scss
│   └── _functions.scss
```

The main.css file includes [sourcemaps](https://developer.chrome.com/devtools/docs/css-preprocessors), which makes easier to identify CSS rules in the developer tools.

All this files compile to the `public/stylesheets/css` folder.

### After Install

When you finish installing the `laravel-bootstrap`, you may want to change the base namespace, which are `MyApp`. For that, you will need to change:

* The folder name in `app/src/MyApp`;
* The `namespace` declaration in every file inside the `app/src/MyApp` folder;
* The `autoload` declaration in the `composer.json` file;

***

### Things you may want to change

* The default environment detection is mapped to `*.local`. You may want to change this in the `bootstrap/start.php` file.
* This bootstrap uses [laravel-asset-versioning](https://github.com/EscapeWork/laravel-asset-versioning) version the assets in production. If you don't want to use this package, just remove in the `composer.json` file and the `app/config/app.php` providers array.

### Components

* [Laravel 4](http://laravel.com/)
* [LaravelHelpers](https://github.com/EscapeWork/LaravelHelpers)
* [SASS](http://sass-lang.com/) with [Compass](http://compass-style.org/);
* [Normalize CSS](http://necolas.github.io/normalize.css/);
* [jQuery](http://jquery.com/);
* [Modernizr](http://modernizr.com/);
* [HTML5 Boilerplate](http://html5boilerplate.com/).

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
