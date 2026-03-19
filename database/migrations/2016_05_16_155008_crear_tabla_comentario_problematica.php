<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CrearTablaComentarioProblematica extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comentario_problematica', function (Blueprint $table) {
            $table->increments('id_comentarioproble');
            $table->string('descri_comproble', 4000);
            $table->bigInteger('fk_dni_comentarioproble')->unique();
            $table->integer('fk_proy_comproble')->unsigned();
            $table->foreign('fk_dni_comentarioproble')
                ->references('dni')->on('ciudadano')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('fk_proy_comproble')
                ->references('id_proy')->on('proyecto')
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
        Schema::drop('comentario_problematica');
    }
}
