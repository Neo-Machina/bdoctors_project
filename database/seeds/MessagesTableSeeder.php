<?php

use Illuminate\Database\Seeder;
use App\Message;
use App\User;
//aggiunta Carbon
use Carbon\Carbon;
use Faker\Generator as Faker;

class MessagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker  $faker)
    {
        for($i=0; $i<9; $i++){
            $new_message= new Message();
            $new_message->name = $faker->firstNameMale(); 
            $new_message->email = $faker->email();
            $new_message->content=$faker->paragraphs(rand(6,12),true);
            $new_message->created_at=$faker->dateTime();
            $new_message->user_id = ;
            $new_message->save();
        }
    }
}
