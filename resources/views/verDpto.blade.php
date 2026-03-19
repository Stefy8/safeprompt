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
                  <th>Departamento</th>
                  <th>Detalles</th>
                  <th>Actualizar</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                @foreach($dpto as $dep)
                <tr>
                  <td>{{ $dep->id_dpto }}</td>
                  <td>{{ $dep->nom_dpto }}</td>
                  <td><a class="btn btn-success" href="{{ $dep->ubicacion_dpto }}"><div class="glyphicon glyphicon-menu-hamburger"></div></a></td>
                  <td><a class="btn btn-success" href=""><div class="glyphicon glyphicon-edit"></div></a></td></td>
                  <td><a class="btn btn-danger" href=""><div class="glyphicon glyphicon-trash"></div></a></td>
                </tr>
            @endforeach
            </tbody>
        </table>
      </div>
@endsection
