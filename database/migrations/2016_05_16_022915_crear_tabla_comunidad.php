<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CrearTablaComunidad extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comunidad', function (Blueprint $table) {
            $table->increments('id_comunidad');
            $table->string('nom_comunidad', 100);
            $table->string('ubicacion_comunidad', 300);
            $table->string('tipo_comunidad', 100);
            $table->integer('fk_id_mcpio')->unsigned();
            $table->foreign('fk_id_mcpio')
                ->references('id_mcpio')->on('municipio')
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
        Schema::drop('comunidad');
    }
}
