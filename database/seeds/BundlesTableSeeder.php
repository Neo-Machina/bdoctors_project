<?php

use Illuminate\Database\Seeder;
use App\Bundle;
use Faker\Generator as Faker;
use Carbon\Carbon;

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
            [
                'name' => 'bronze',
                'price' => 2.99,
                'duration' => 1 
            ],
            [
                'name' => 'silver',
                'price' => 5.99,
                'duration' => 3
            ],
            [
                'name' => 'gold',
                'price' => 9.99,
                'duration' => 6
            ]
        ];

        foreach ($bundles as $bundle) {
            $new_bundle = new Bundle();

            $new_bundle->price = $bundle['price'];
            $new_bundle->name = $bundle['name'];
            $new_bundle->code = $faker->ean13();
            $new_bundle->duration = $bundle['duration'];
            $new_bundle->save();
        }

            // ***********************************************************
            // USER_BUNDLE SEEDER
            // ***********************************************************
            // $bundle_ids = [];
            // $bundle_expired_dates = [];
            
            // for($z = 1; $z <= rand(1, 10); $z++) {
            //     $now = Carbon::now();
            //     $id_bundle_random = rand(1, 3);
            //     $id_expired_date = $now->addDays($bundles[rand(0,2)]['duration']); 
            //     // $id_expired_date = Carbon::parse($new_bundle->pivot->created_date->addDays($bundles[rand(0,2)]['duration']))->toDateTimeString();

            //     $bundle_ids[] = $id_bundle_random;
                
            //     array_push($bundle_expired_dates, ['expired_date' => $id_expired_date]);
            // }

            // $bundle_expire_array = array_combine($bundle_ids, $bundle_expired_dates);

            // $new_bundle->users()->sync($bundle_expire_array);
    }
}
