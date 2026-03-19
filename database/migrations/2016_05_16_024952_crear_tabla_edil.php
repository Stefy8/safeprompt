<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CrearTablaEdil extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('edil', function (Blueprint $table) {
            $table->increments('id_edil');
            $table->bigInteger('fk_dni_ciudadano')->unique();
            $table->integer('fk_id_comunidade')->unsigned();
            $table->foreign('fk_dni_ciudadano')
                ->references('dni')->on('ciudadano')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('fk_id_comunidade')
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
        Schema::drop('edil');
    }
}
