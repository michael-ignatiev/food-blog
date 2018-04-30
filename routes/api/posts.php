<?php

use Illuminate\Support\Facades\Route;

Route::get('published', 'PostController@publishedPosts');
Route::get('published/{id}', 'PostController@publishedPost');

Route::group(['middleware' => 'auth:api'], function() {
    Route::post('/', 'PostController@store');
    Route::get('/', 'PostController@index');
    Route::get('/{id}', 'PostController@show');
    Route::match(['put', 'patch'], '/{id}', 'PostController@update');
    Route::delete('/{id}', 'PostController@delete');
});