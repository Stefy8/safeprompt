<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CrearTablaLidercomunal extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lidercomunal', function (Blueprint $table) {
            $table->increments('id_lider');
            $table->bigInteger('fk_ciudadano')->unique();
            $table->integer('fk_id_bvc')->unsigned();
            $table->foreign('fk_ciudadano')
                ->references('dni')->on('ciudadano')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('fk_id_bvc')
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
        Schema::drop('lidercomunal');
    }
}
