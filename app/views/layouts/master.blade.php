<!doctype html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        
        @section('title')
        <title>Laravel Bootstrap</title>
        @show

        <link rel="stylesheet" href="/assets/style/css/main.css" type="text/css">

        @section('styles')

        @show

    </head>
    <body>
        <header class="container container-header">
                        
        </header>

        <section class="container">
            @yield('content')
        </section>

        <footer class="container container-footer">
            

        </footer>
        
        @section('javascripts')

        @show
    </body>
</html>