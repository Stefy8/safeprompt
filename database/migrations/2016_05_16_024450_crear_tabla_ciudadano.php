<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CrearTablaCiudadano extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ciudadano', function (Blueprint $table) {
            $table->bigInteger('dni');
            $table->primary('dni');
            $table->string('nom_ciudadano', 100);
            $table->string('apell_ciudadano', 100);
            $table->string('fk_user')->unsigned();
            $table->integer('fk_bvu')->unsigned();
            $table->foreign('fk_user')
                ->references('email')->on('usuario')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('fk_bvu')
                ->references('id_bv')->on('bv')
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
        Schema::drop('ciudadano');
    }
}
