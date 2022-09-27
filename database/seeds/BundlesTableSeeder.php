<?php

use Illuminate\Database\Seeder;
use App\Bundle;

class BundlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $bundles = [
            'bronze' => 2.99,
            'silver' => 5.99,
            'gold' => 9.99,
        ];

        foreach ($bundles as $key => $price) {
            $new_bundle = new Bundle();

            $new_bundle->price = $price;
            $new_bundle->key = $name;
            $new_bundle->save();
        }
    }
}
