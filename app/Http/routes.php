<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/',['as'=>'index', 'uses'=>function () {
    return view('index');
}]);
Route::get('/admin',['as'=>'admin', 'uses'=>function () {
    return view('vistaadmin');
}]);
Route::get('/agregarciudadano', ['as'=>'ciudadano','uses'=>'CiudadanoController@index']);
//Route::post('/inicio', ['as'=>'login.ciudadano','uses'=>'UsuarioController@store']);
Route::get('/agregarDpto', ['as'=>'dpto','uses'=>'DepartamentoController@index']);
Route::post('/agregarDpto', ['as'=>'agregar_dpto','uses'=>'DepartamentoController@store']);
Route::get('/verDpto', ['as'=>'ver_dpto','uses'=>'DepartamentoController@show']);

Route::get('/agregarMcpio', ['as'=>'mcpio','uses'=>'MunicipioController@index']);
Route::post('/agregarMcpio', ['as'=>'agregar_mcpio','uses'=>'MunicipioController@store']);
Route::get('/verMcpio', ['as'=>'ver_mcpio','uses'=>'MunicipioController@show']);

Route::get('/agregarComuna', ['as'=>'comuna','uses'=>'Controller@index']);
Route::get('/agregarComuna', ['as'=>'agregar_comuna','uses'=>'Controller@index']);

Route::post('/login', ['as'=>'login', 'uses'=>'LoginController@store']);

Route::get('/insertar', ['as'=>'ciudadano.lol','uses'=>'LoginController@create']);
