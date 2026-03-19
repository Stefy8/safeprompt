<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CrearTablaMunicipio extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('municipio', function (Blueprint $table) {
            $table->increments('id_mcpio');
            $table->string('nom_mcpio', 100);
            $table->string('ubicacion_mcpio', 300);
            $table->integer('fk_id_dpto')->unsigned();
            $table->foreign('fk_id_dpto')
                ->references('id_dpto')->on('departamento')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->timestamps();
            $table->rememberToken();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('municipio');
    }
}
