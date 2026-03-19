<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CrearTablaBv extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bv', function (Blueprint $table) {
            $table->increments('id_bv');
            $table->string('nom_bv', 100);
            $table->string('ubicacion_bv', 300);
            $table->string('tipo_bv', 100);
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
        Schema::drop('bv');
    }
}
