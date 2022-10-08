<?php

use Illuminate\Database\Seeder;
use App\Message;
use App\User;
use Carbon\Carbon;
use Faker\Generator as Faker;

class MessagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {   
        $users = User::all();

        foreach ($users as $user) {
            for($i = 0; $i < rand(4, 30); $i++){
                $new_message = new Message();
                $new_message->author = $faker->name($gender = 'male'|'female');
                $new_message->email = $faker->email();
                $new_message->content = $faker->text(300);
                // $new_message->created_at = '2022-10-08 10:07:18';
                $new_message->created_at = $faker->dateTimeBetween('-3 years', '-1 day')->format('Y-m-d H:i:s');
                $new_message->user_id = $user->id;
                $new_message->save();
            }
        }
    }
}
