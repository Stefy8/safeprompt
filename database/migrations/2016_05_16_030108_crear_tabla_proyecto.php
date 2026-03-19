<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CrearTablaProyecto extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proyecto', function (Blueprint $table) {
            $table->increments('id_proy');
            $table->string('nom_proy', 100);
            $table->string('url', 1000);
            $table->integer('fk_id_edil')->unsigned();
            $table->foreign('fk_id_edil')
                ->references('id_edil')->on('edil')
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
        Schema::drop('proyecto');
    }
}
