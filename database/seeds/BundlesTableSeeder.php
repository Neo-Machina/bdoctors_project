<?php

use Illuminate\Database\Seeder;
use App\Bundle;
use Faker\Generator as Faker;

class BundlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        $bundles = [
            'bronze' => 2.99,
            'silver' => 5.99,
            'gold' => 9.99,
        ];

        foreach ($bundles as $key => $price) {
            $new_bundle = new Bundle();

            $new_bundle->price = $price;
            $new_bundle->name = $key;
            $new_bundle->code = $faker->ean13();
            $x = $faker->date();
            // $new_bundle->duration =
            $new_bundle->save();
        }
    }
}
