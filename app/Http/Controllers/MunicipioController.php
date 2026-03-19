<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Departamento;
use App\Municipio;
use App\Http\Requests;
use App\Http\Requests\AgregarMunicipioRequest;
use App\Http\Controllers\Controller;

class MunicipioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dpto = Departamento::all();
        return view('agregarMcpio', compact('dpto'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AgregarMunicipioRequest $request)
    {
      //dd($request->all());
      $mcpio = new Municipio($request->all());
      $mcpio->save();
      return redirect()->route('mcpio');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
      $mcpio = Departamento::join('municipio', 'municipio.fk_id_dpto', '=', 'departamento.id_dpto')->paginate(1);
      return view('verMcpio', compact('mcpio'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id'
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
