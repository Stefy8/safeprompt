<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CrearTablaBvComunidad extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bv_comunidad', function (Blueprint $table) {
            $table->increments('id_bv_comunidad');
            $table->integer('fk_id_comunidad')->unsigned();
            $table->integer('fk_id_bv')->unsigned();
            $table->foreign('fk_id_comunidad')
                ->references('id_comunidad')->on('comunidad')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('fk_id_bv')
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
        Schema::drop('bv_comunidad');
    }
}
