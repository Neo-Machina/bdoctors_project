<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Braintree\Gateway;
use App\Bundle;

class PaymentsController extends Controller
{
    public function process(Request $request)
{
    $user = $request->user();

    $form_data = $request->all();
    
    $bundle = Bundle::findOrFail($request->bundle);

    dump($request->all());
    dump($request->device_data);
    dump($bundle->price);

    // $nonceFromTheClient = $_POST["payment_method_nonce"];
    $gateway = new Gateway([
        'environment' => 'sandbox',
        'merchantId' => 'jn3yqkw6f2xzfsbm',
        'publicKey' => 'wggkn9jxrnqgv3pn',
        'privateKey' => '4df29101f7ae6162150c8658bd345f5e'
    ]);

    $result = $gateway->transaction()->sale([
        'amount' => $bundle->price,
        'paymentMethodNonce' => 'fake-valid-nonce',
        'deviceData' => $request->device_data,
        'options' => [
          'submitForSettlement' => True
        ]
      ]);

dump($result);

    $data = [
        'user' => $user,
        'client_token' => $form_data['client_token'],
        'bundle' => $bundle
    ];

dump($data);

    return view('admin.payment.process', $data);
}
}
