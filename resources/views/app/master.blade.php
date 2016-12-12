<!doctype html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta property="fb:app_id" content="326686580683711">

    {{-- favicons --}}
    @include('app.inc.favicons')

    @section('seo')
        @include('app.inc.seo', [
            'title' => 'Laravel Boilerplate',
            'route' => route('home'),
        ])
    @show

    @section('styles')
        <link rel="stylesheet" type="text/css" href="{{ Asset::v('assets/css/main.css') }}">
    @show
</head>
<body>
    <header class="header">
        <div class="container">

        </div><!-- .container -->
    </header><!-- .header -->

    <main class="content">
        @yield('content')
    </main><!-- .content -->

    <footer class="footer">
        <div class="container">

        </div><!-- .container -->
    </footer><!-- .footer -->

    {{-- message modal --}}
    <div class="modal fade" id="modal-message">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body js-modal-body">

                </div><!-- /.modal-body -->

                <div class="modal-footer">
                    <button type="button" class="btn btn-sm" data-dismiss="modal">Fechar</button>
                </div><!-- /.modal-footer -->
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    @section('scripts')
        <script type="text/javascript" src="{{ Asset::v('assets/js/app/main.min.js') }}"></script>
    @show
</body>
</html>
