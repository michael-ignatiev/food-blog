<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function(Blueprint $table){
           $table->engine = 'InnoDB';
           $table->increments('id');
           $table->unsignedInteger('user_id');
           $table->string('title');
           $table->string('slug');
           $table->text('description');
           $table->text('content');
           $table->boolean('published')->default(false);
           $table->timestamp('published_at')->nullable();
           $table->foreign('user_id')->references('id')->on('users');
           $table->softDeletes();
           $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
