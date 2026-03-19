<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CrearTablaProyectoComunidad extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proyecto_comunidad', function (Blueprint $table) {
            $table->increments('id_proycom');
            $table->integer('fk_id_proyecto')->unsigned();
            $table->integer('fk_id_comunidadp')->unsigned();
            $table->foreign('fk_id_proyecto')
                ->references('id_proy')->on('proyecto')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('fk_id_comunidadp')
                ->references('id_comunidad')->on('comunidad')
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
        Schema::drop('proyecto_comunidad');
    }
}
