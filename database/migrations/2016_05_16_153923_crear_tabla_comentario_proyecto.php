<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CrearTablaComentarioProyecto extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comentario_proyecto', function (Blueprint $table) {
            $table->increments('id_comentarioproy');
            $table->string('descri_comproy', 4000);
            $table->bigInteger('fk_dni_comentarioproy')->unique();
            $table->integer('fk_proy_comproy')->unsigned();
            $table->foreign('fk_dni_comentarioproy')
                ->references('dni')->on('ciudadano')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('fk_proy_comproy')
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
        Schema::drop('comentario_proyecto');
    }
}
