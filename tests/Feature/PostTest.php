<?php

namespace Tests\Feature;

use App\Post;
use App\User;
use Carbon\Carbon;
use Symfony\Component\HttpKernel\Tests\Exception\NotFoundHttpExceptionTest;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class PostTest extends TestCase
{
    use DatabaseMigrations, DatabaseTransactions;

    public $user;

    public function setUp()
    {
        parent::setUp();

        $this->user = $this->createAdminUser();
    }

    /** @test */
    public function that_only_loading_posts_for_provided_user_id()
    {
        $this->seedUnpublishedPosts();

        $posts = Post::loadAllMine($this->user->id);

        $this->assertCount(15, $posts);

    }

    /** @test */
    public function that_load_all_posts()
    {
        $this->seedUnpublishedPosts();

        $posts = Post::loadAll();

        $this->assertCount(15, $posts);
    }

    /** @test */
    public function that_loaded_only_published_posts()
    {
        $this->seedPublishedPosts();

        $posts = Post::published()->get();

        $this->assertCount(5, $posts);
    }

    /** @test */
    public function that_load_only_published_post()
    {
        $this->seedUnpublishedPosts();

        factory(Post::class, 1)->create([
            'user_id' => $this->user->id,
            'published' => true,
        ]);

        $post = Post::loadPublished(16);

        $this->assertInstanceOf(Post::class, $post);
    }

    /** @test */
    public function that_post_get_published_and_total_number_of_published_get_changed()
    {
        $this->seedPublishedPosts(2);
        $this->seedUnpublishedPosts(5);

        $date = Carbon::now()->format('Y-m-d');

        $post = Post::where('published', false)->first();
        $post->published = true;
        $post->published_at = $date;

        $post->save();

        $this->assertEquals($post->published, true);
        $this->assertEquals($post->published_at->format('Y-m-d'), $date);

        $posts = Post::where('published', true)->get();

        $this->assertEquals($posts->count(), 3);
    }

    /** @test */
    public function that_post_get_unpublished_and_total_number_of_unpublished_get_changed()
    {
        $this->seedPublishedPosts(2);
        $this->seedUnpublishedPosts(5);

        $post = Post::where('published', true)->first();
        $post->published = false;
        $post->published_at = null;

        $post->save();

        $this->assertEquals($post->published, false);
        $this->assertEquals($post->published_at, null);

        $posts = Post::where('published', false)->get();

        $this->assertEquals($posts->count(), 6);
    }

    private function seedUnpublishedPosts($num = 15)
    {
        factory(Post::class, $num)->create([
            'user_id' => $this->user->id,
            'published' => false,
        ]);
    }

    private function seedPublishedPosts($num = 5)
    {
        factory(Post::class, $num)->create([
            'user_id' => $this->user->id,
            'published' => true,
        ]);
    }

    private function createAdminUser()
    {
        return User::create([
            'name' => 'Michael Ignatiev',
            'email' => 'michael.ignatiev.1989@gmail.com',
            'password' => bcrypt('secret'),
            'is_admin' => true,
            'remember_token' => str_random(10),
        ]);
    }
}
