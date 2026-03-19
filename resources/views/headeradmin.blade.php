<div class="row">
    <div class="col-md-2">
        <img class="img-responsive" src="{{asset('images/logo1.png')}}" alt="" />
        <h5>Monteria Opina</h5>
    </div>
    <div class="col-md-10">
        <nav class="nav nav-tabs nav">
            <ul class="nav navbar-nav" >
                <li role="presentation" class="dropdown">
                    <a class="dropdown-toggle a" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Ubicaciones
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu drop">
                      <li class="dropdown dropdown-submenu"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Departamentos</a>
                          <ul class="dropdown-menu">
                              <li><a href="{{ route('ver_dpto') }}">Ver</a></li>
                              <li><a href="{{ route('dpto') }}">Agregar</a></li>
                          </ul>
                      </li>
                      <li class="dropdown dropdown-submenu"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Municipios</a>
                          <ul class="dropdown-menu">
                              <li><a href="{{ route('ver_mcpio') }}">Ver</a></li>
                              <li><a href="{{route('mcpio')}}">Agregar</a></li>
                          </ul>
                      </li>
                    </ul>
                </li>
                <li role="presentation" class="dropdown">
                    <a class="dropdown-toggle a" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Comunas
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li class="dropdown dropdown-submenu"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Opciones</a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Ver</a></li>
                                <li><a href="#">Agregar</a></li>
                            </ul>
                        </li>
                        <li class="divider"></li>
                        <li class="dropdown dropdown-submenu"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Barrios</a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Ver </a></li>
                                <li><a href="#">Agregar</a></li>
                            </ul>
                        </li>
                      </ul>
                </li>
                <li role="presentation" class="dropdown">
                    <a class="dropdown-toggle a" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Corregimientos
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li class="dropdown dropdown-submenu"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Opciones</a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Ver</a></li>
                                <li><a href="#">Agregar</a></li>
                            </ul>
                        </li>
                        <li class="divider"></li>
                        <li class="dropdown dropdown-submenu"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Veredas</a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Ver </a></li>
                                <li><a href="#">Agregar</a></li>
                            </ul>
                        </li>
                      </ul>
                </li>
                <li class="dropdown"><a href="#" class="dropdown-toggle a" data-toggle="dropdown">Lideres <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li class="dropdown dropdown-submenu"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Ediles</a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Ver</a></li>
                                <li><a href="#">Agregar</a></li>
                            </ul>
                        </li>

                        <li class="dropdown dropdown-submenu"><a href="#" class="dropdown-toggle" data-toggle="dropdown">JAC</a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Ver </a></li>
                                <li><a href="#">Agregar</a></li>
                            </ul>
                        </li>
                      </ul>
                </li>
                <li><a class="a" href="#">Usuarios</a></li>

               <li><a class="a" href="#" data-toggle="" data-target="">Logout</a></li>
            </ul>

    </nav>

  </div>
</div>
