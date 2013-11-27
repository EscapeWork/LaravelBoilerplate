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

This bootstrap utilizes [SASS](http://sass-lang.com/), [Compass](http://compass-style.org/) and [CoffeeScript](http://coffeescript.org/). So you will need:

* [NodeJS](http://nodejs.org/)
  * [Grunt](http://gruntjs.com/) `$ npm install -g grunt-cli`
* [Ruby](https://www.ruby-lang.org/)
  * [SASS](http://sass-lang.com/) `$ gem install sass`
  * [Compass](http://compass-style.org/) `$ gem install compass`

To compile and watch for changes in your assets, run:

```sh
$ grunt
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

All this files compile to the `public/stylesheets/css` folder.

##### CoffeeScript

public/javascripts/coffee
```
├── main.coffee
```

All this files compile to the `public/javascripts/js` folder.

If you add mode `.coffee` files, you will need to go to the `Gruntfile.js` and add this file.

***

### Components

* [Laravel 4](http://laravel.com/)
* [LaravelHelpers](https://github.com/EscapeWork/LaravelHelpers)
* [SASS](http://sass-lang.com/) with [Compass](http://compass-style.org/);
* [Coffeescript](http://coffeescript.org/);
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
