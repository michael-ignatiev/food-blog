<?php

use Faker\Generator as Faker;

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Post::class, function (Faker $faker) {

    $title = $faker->sentence;
    $users = \App\User::all();
    
    return [
        // link posts to random users
        'user_id' => function () use ($users) {
            return rand($users->min('id'), $users->max('id'));
        },
        'title' => $title,
        'slug' => str_slug($title),
        'description' => $faker->sentence(15),
        'content' => implode(' ', $faker->paragraphs(2)),
        'published' => true,
        'published_at' => \Carbon\Carbon::now(),
    ];
});

