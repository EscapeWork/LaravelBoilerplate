<!doctype html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta property="fb:app_id" content="{{ config('services.facebook.app_id') }}">

    {{-- favicons --}}
    @include('app.inc.favicons')

    @section('seo')
        @include('app.inc.seo', [
            'title' => 'Laravel Boilerplate',
            'route' => route('home'),
            'image' => asset('assets/images/social/open-graph.png')
        ])
    @show

    @section('styles')
        <link rel="stylesheet" type="text/css" href="{{ Asset::v('assets/css/main.css') }}">
    @show
</head>

<body class="cbp-spmenu-push">
    <nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left" id="menu-sidebar">
        <a class="btn-menu js-btn-menu-responsive" href="javascript:void(0);">
            <span class="btn-bar"></span>
            <span class="btn-bar"></span>
            <span class="btn-bar"></span>
        </a>

        <ul class="main-menu">
            <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link">Menu 1</a>
            </li>

            <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link">Menu 2</a>
            </li>

            <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link">Menu 3</a>
            </li>
        </ul>
        {{-- /main-menu --}}
    </nav>
    {{-- /menu-sidebar --}}

    <div class="main">
        <header class="header">
            <div class="container">
                header
            </div>
            {{-- /container --}}
        </header>
        {{-- /header --}}

        <main class="content">
            @yield('content')
        </main>
        {{-- /content --}}

        <footer class="footer">
            <div class="container">
                footer
            </div>
            {{-- /container --}}
        </footer>
        {{-- /footer --}}

        {{-- message modal --}}
        @include('app.inc.loader')
    </div>
    {{-- /main --}}

    @section('scripts')
        <script type="text/javascript" src="{{ Asset::v('assets/js/app/main.js') }}"></script>
    @show

    @if (config('app.env') == 'local')
        <script src="http://localhost:35729/livereload.js"></script>
    @endif
</body>
</html>
