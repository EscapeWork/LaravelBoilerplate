@extends('app.master')

@section('content')
    <section class="section">
        <div class="container">
            <div class="swiper-container swiper-slider">
                <div class="swiper-wrapper">
                    <a href="javascript:void(0);" class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/1)"></a>
                    <a href="javascript:void(0);" class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/2)"></a>
                    <a href="javascript:void(0);" class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/3)"></a>
                </div>
                {{-- /swiper-wrapper --}}

                <div class="swiper-pagination slider-pagination"></div>
                {{-- /slider pagination --}}

                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                {{-- /slider navigation  --}}
            </div>
            {{-- /slider --}}

            <div class="swiper-container swiper-gallery">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                    <div class="swiper-slide">Slide 4</div>
                </div>

                <div class="swiper-pagination gallery-pagination"></div>
                {{-- /gallery pagination --}}
            </div>
            {{-- /gallery --}}

            <form action="{{ route('contact.send') }}" method="post">
                {{ csrf_field() }}
                {!! Honeypot::generate('honeyform', 'honeyform_time') !!}

                <input type="text" name="name" class="form-control" placeholder="Nome">
                <input type="email" name="email" class="form-control" placeholder="E-mail">
                <input type="tel" name="phone" class="form-control" placeholder="Telefone">
                <textarea name="msg" id="msg" rows="10" class="form-control" placeholder="Mensagem"></textarea>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </div>
        {{-- /container --}}
    </section>
    {{-- /section --}}
@stop
