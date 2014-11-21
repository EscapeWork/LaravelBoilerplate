<!doctype html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @section('seo')
        <title>Laravel Bootstrap</title>
        <meta name="description" content="">
        <link rel="canonical" href="{{ route('home') }}">

        {{-- Open Graph --}}
        <meta property="og:title" content="Laravel Bootstrap">
        <meta property="og:description" content="">
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ route('home') }}">
        <meta property="og:image" content="{{ asset('assets/images/social/logo.png') }}">
    @show

    <!-- favicon -->
    <link rel="shotcurt icon" href="{{ asset('assets/images/favicon.ico') }}" text="image/x-icon">

    @section('styles')
        <link rel="stylesheet" type="text/css" href="{{ Asset::v('assets/stylesheets/css/main.css') }}">
    @show

    <script type="text/javascript" src="{{ asset('assets/components/modernizr/modernizr.js') }}"></script>
</head>
<body>
    <header class="header">
        <div class="container">

        </div>
    </header><!-- .header -->

    <main class="content">
        @yield('content')
    </main><!-- .content -->

    <footer class="footer">
        <div class="container">

        </div>
    </footer><!-- .footer -->

    @section('scripts')
        <script type="text/javascript" src="{{ asset('assets/javascripts/min/vendor.min.js') }}"></script>
        <script type="text/javascript" src="{{ Asset::v('assets/javascripts/min/main.min.js') }}"></script>
    @show
</body>
</html>
