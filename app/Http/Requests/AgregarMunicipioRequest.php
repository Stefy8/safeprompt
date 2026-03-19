<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class AgregarMunicipioRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
      return [
          'nom_mcpio'=>'required|unique:municipio,nom_mcpio',
          'ubicacion_mcpio'=>'required|unique:municipio,ubicacion_mcpio',
          'fk_id_dpto'=>'required|exists:departamento,id_dpto'
      ];
    }
}
