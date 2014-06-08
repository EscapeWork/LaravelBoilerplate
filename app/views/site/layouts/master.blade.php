<!doctype html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8" />

    @section('seo')
        <title>Laravel Bootstrap</title>
        <link rel="canonical" href="{{ route('home') }}" />
    @show

    @section('styles')
        <link rel="stylesheet" type="text/css" href="{{ Asset::v('assets/stylesheets/css/main.css') }}" />
    @show

    <script type="text/javascript" src="{{ asset('assets/components/modernizr/modernizr.js') }}"></script>
</head>
<body>
    <header class="header">

    </header><!-- .header -->

    <main class="content">
        @yield('content')
    </main><!-- .content -->

    <footer class="footer">

    </footer><!-- .footer -->

    @section('scripts')
        <script type="text/javascript" src="{{ asset('assets/javascripts/min/vendor.min.js') }}"></script>
        <script type="text/javascript" src="{{ Asset::v('assets/javascripts/min/main.min.js') }}"></script>
    @show
</body>
</html>
