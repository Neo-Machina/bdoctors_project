@extends('layouts.dashboard')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">

            {{-- BRAINTREE FORM --}}
            <div id="dropin-container"></div>
            <button id="submit-button" class="button button--small button--green">Purchase</button>

        </div>
    </div>
 </div>

{{-- Client-Token passed from sponsors view --}}
<div id="client-token" class="invisible">{{ $client_token }}</div>

 {{-- BRAINTREE SCRIPT --}}
    <script type="text/javascript">
        let client_token = document.getElementById("client-token").innerHTML;
        var button = document.querySelector('#submit-button');

            braintree.dropin.create({
                // authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
                authorization: client_token,
                selector: '#dropin-container'
                }, function (err, instance) {
                    button.addEventListener('click', function () {
                        instance.requestPaymentMethod(function (err, payload) {
                        // Submit payload.nonce to your server
                        });
                    });
                    // braintree.dataCollector.create({
                    //     client: clientInstance
                    // }, function (err, dataCollectorInstance) {
                    //     if (err) {
                    //     // Handle error in creation of data collector
                    //     return;
                    //     }
                    //     // At this point, you should access the dataCollectorInstance.deviceData value and provide it
                    //     // to your server, e.g. by injecting it into your form as a hidden input.
                    //     var deviceData = dataCollectorInstance.deviceData;
                    // });
            });
    </script>

@endsection