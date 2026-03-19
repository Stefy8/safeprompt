<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>@yield('title', 'Bienvenidos a MonteriaOpina')</title>
  <link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}" media="screen" title="no title" charset="utf-8">
  <link rel="stylesheet" href="{{asset('css/estilo.css')}}" media="screen" title="no title" charset="utf-8">
  <link rel="stylesheet" href="{{ asset('css/bootstrap-toggle.min.css') }}">
  <link rel="stylesheet" href="{{ asset('css/bootstrap-theme.min.css') }}">
  <link rel="stylesheet" href="{{ asset('css/bootstrap-submenu.min.css') }}">
  <script src="{{asset('js/jquery.min.js')}}" type="text/javascript"></script>
  <script src="{{ asset('js/jquery-latest.js') }}"></script>
  <script src="{{asset('js/bootstrap.min.js')}}" type="text/javascript"></script>
  <script src="{{ asset('js/bootstrap-toggle.min.js')}}"></script>
  <script src="{{asset('js/bootstrap-submenu.min.js')}}" type="text/javascript"></script>
  <script src="{{asset('js/submenu.js')}}" type="text/javascript"></script>

</head>
<body>

  <div id="contenido">
      @yield('content')
  </div>


  <footer><p>Derechos Reservados &copy Monteria Opina 2016</p></footer>
</body>
</html>
