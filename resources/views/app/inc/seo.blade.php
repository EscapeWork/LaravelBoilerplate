<title>{{ $title }}</title>
@if (isset($description))
    <meta name="description" content="{{ $description }}">
@endif
<link rel="canonical" href="{{ $route }}">

{{-- Open Graph --}}
<meta property="og:title" content="{{ $title }}">
@if (isset($description))
    <meta property="og:description" content="{{ $description }}">
@endif
<meta property="og:type" content="website">
<meta property="og:url" content="{{ $route }}">
@if (isset($image))
    <meta property="og:image" content="{{ $image }}">
@else
    <meta property="og:image" content="{{ asset('assets/images/social/logo.png') }}">
@endif

{{-- twitter --}}
<meta name="twitter:card" content="summary_large_image">
{{-- <meta name="twitter:site" content=""> --}}
{{-- <meta name="twitter:creator" content=""> --}}
<meta name="twitter:title" content="{{ $title }}">
@if (isset($description))
    <meta name="twitter:description" content="{{ $description }}">
@endif
@if (isset($image))
    <meta name="twitter:image" content="{{ $image }}">
@endif
