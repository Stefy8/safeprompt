@extends('plantilla')

<header>
    @include('headeradmin')
</header>
@section('content')
      <div class="form_dpto">
        <table class="table table-striped table-responsive table-bordered">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Municipio</th>
                  <th>Departamento</th>
                  <th>Detalles</th>
                  <th>Actualizar</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                @foreach($mcpio as $mun)
                <tr>
                  <td>{{ $mun->id_mcpio }}</td>
                  <td>{{ $mun->nom_mcpio }}</td>
                  <td>{{ $mun->nom_dpto }}</td>
                  <td><a class="btn btn-success" href="{{ $mun->ubicacion_mcpio }}"><div class="glyphicon glyphicon-menu-hamburger"></div></a></td>
                  <td><a class="btn btn-success" href=""><div class="glyphicon glyphicon-edit"></div></a></td></td>
                  <td><a class="btn btn-danger" href=""><div class="glyphicon glyphicon-trash"></div></a></td>
                </tr>
            @endforeach
            </tbody>
        </table>
      </div>
      <nav class="pagination">
        {!! $mcpio->render() !!}
      </nav>
@endsection
