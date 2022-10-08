<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Bundle;
use Braintree\Gateway;

class SponsorController extends Controller
{
    public function getSponsorPackages(Request $request) {
        $user = $request->user();
        $bundles = Bundle::all();

        // BRAINTREE
        $aCustomerId = null;

        $gateway = new Gateway([
            'environment' => 'sandbox',
            'merchantId' => 'jn3yqkw6f2xzfsbm',
            'publicKey' => 'wggkn9jxrnqgv3pn',
            'privateKey' => '4df29101f7ae6162150c8658bd345f5e'
        ]);
        // Creo il client token
        $client_token = $gateway->clientToken()->generate([
            "customerId" => $aCustomerId
        ]);

        

        $data = [
            'user' => $user,
            'bundles' => $bundles,
            'client_token' => $client_token
        ];
dump($client_token);
        return view ('admin.sponsors', $data);
    }
}
