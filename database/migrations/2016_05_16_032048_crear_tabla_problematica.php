<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CrearTablaProblematica extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('problematica', function (Blueprint $table) {
            $table->increments('id_problema');
            $table->string('titulo', 500);
            $table->string('descripcion', 4000);
            $table->bigInteger('fk_dni_problema')->unique();
            $table->foreign('fk_dni_problema')
                ->references('dni')->on('ciudadano')
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
        Schema::drop('problematica');
    }
}
