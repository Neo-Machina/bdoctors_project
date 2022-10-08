<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Review;
use Carbon\Carbon;
use Faker\Generator as Faker;

class ReviewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        $users = User::all();

        foreach($users as $user) {
            for ($i=0; $i < rand(200, 300); $i++) {
                $new_reviews = new Review();

                $new_reviews->author = $faker->name($gender = 'male'|'female');
                $new_reviews->content = $faker->text(300);
                $new_reviews->vote = $faker->numberBetween(1, 5);
                $new_reviews->user_id = $user->id;
                $new_reviews->created_at = new Carbon($faker->dateTimeBetween('-3 years', '-1 day'));
                $new_reviews->updated_at = new Carbon($faker->dateTimeBetween('-3 years', '-1 day'));
                $new_reviews->save();
            }
        }
    }
}
