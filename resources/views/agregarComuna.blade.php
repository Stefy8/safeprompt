@extends('plantilla')

<header>
    @include('headeradmin')
</header>
@section('content')


    <div class="row form_dpto">
      <div class="col-md-2">

      </div>
      <div class="col-md-8">
        <form class="form-horizontal" action="{{ route('agregar_dpto') }}" method="post" role="form">
          {!! csrf_field() !!}
          <div class="form-group">
            <label for="identificacion" class="col-lg-2 control-label">Comuna</label>
            <div class="col-md-10">
              <input type="text" class="form-control" id="nom_dpto" name="nom_dpto" placeholder="Nombre del departamento">
            </div>
          </div>

          <div class="form-group">
            <label for="nombre" class="col-lg-2 control-label">Ubicacion</label>
            <div class="col-lg-8">
              <input type="text" class="form-control" id="ubicacion_dpto" name="ubicacion_dpto"  placeholder="Copie y pegue la ubicacion">
            </div>
            <div class="col-lg-2">
                <a class="btn btn-default" title="Ir a google Maps"href="https://www.google.es/maps/place/Colombia/@4.0865665,-81.9879215,5z/data=!3m1!4b1!4m5!3m4!1s0x8e15a43aae1594a3:0x9a0d9a04eff2a340!8m2!3d4.570868!4d-74.297333">Seleccionar</a>
            </div>
          </div>

          <div class="form-group">
              <label for="" class="col-lg-2 control-label">Municipio</label>
              <div class="col-lg-10">
                  <select class="form-control" name="">
                      @foreach($mcpio as $mun)
                          <option value="{{ $mun->id_mcpio }}">{{ $mun->nom_mcpio }}</option>
                      @endforeach
                  </select>
              </div>
          </div>



          <div class="form-group">
            <div class="col-lg-offset-2 col-lg-10">
              <button type="submit" class="btn btn-default">Entrar</button>
            </div>
          </div>
        </form>
      </div>

      <div class="col-md-2">

      </div>

    </div>
@endsection
