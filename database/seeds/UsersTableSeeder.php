<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use App\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use App\Specialization;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {

        for($i = 0; $i < 150; $i++) {
            $new_user = new User();

            $new_user->name = $faker->firstNameMale(); 
            $new_user->address = $faker->streetAddress(); 
            $new_user->phone_number = $faker->e164PhoneNumber();
            $new_user->email = $faker->email();
            $new_user->curriculum = $faker->paragraphs(4, true);
            $new_user->photo = 'https://s3-eu-west-1.amazonaws.com/miodottore.it/doctor/b26aee/b26aee7167aa5d475a7761d55f2e6bbd_large.jpg';
            $new_user->slug = $this->getFreeSlugFromTitle($new_user->name);
            $new_user->password = 'password123';
            $new_user->service = $faker->words(rand(5, 15), true);
            $new_user->save();

            // $specialization_ids = []; 
            // $specializations_array = Specialization::all();

            // for($i=1; $i < rand(1, 3); $i++) { 
            //     $id_random = rand(1, count($specializations_array));

            //     if(!in_array( $id_random, $specialization_ids)) {
            //         $specialization_ids[] = $id_random;
            //     } 
            // }

            $specialization_ids = []; 

            for($i=1; $i <= rand(1, 3); $i++) { 
                $id_random = rand(1, 8);

                if(!in_array( $id_random, $specialization_ids)) {
                    $specialization_ids[] = $id_random;
                } 

            }

            $new_user->specializations()->sync($specialization_ids);
        }
    }

    protected function getFreeSlugFromTitle($name) {
        // Assegnare lo slag
        $slug_to_save = Str::slug($name, '-');
        $slug_base = $slug_to_save;
        // Verificare se lo slag esiste nel database
        $existing_slug_post = User::where('slug', '=', $slug_to_save)->first();

        // Finchè non si trova uno slag libero, si appende un numero allo slag base -1, -2, ecc...
        $counter = 1;
        while($existing_slug_post) {
            // Si crea un nuovo slag con $counter
            $slug_to_save = $slug_base . '-' . $counter;

            // Verificare se lo slag esiste nel database
            $existing_slug_post = User::where('slug', '=', $slug_to_save)->first();

            $counter++;
        }

        return $slug_to_save;
    }

