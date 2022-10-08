@extends('layouts.dashboard')

@section('content')

    {{-- BRAINTREE --}}
    {{-- <script src="https://js.braintreegateway.com/web/dropin/1.33.4/js/dropin.js"></script>

    <div id="dropin-container"></div>
    <button id="submit-button" class="button button--small button--green">Acquista</button> --}}

    {{-- ----------------------- END - BRAINTREE ----------------------------- --}}

    <!-- MODAL SUCCESSO DEL PAGAMENTO -->
    {{-- @if()
        <div class="modal fade" id="modalSuccess" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Acquista il pacchetto promozionale</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Vuoi acquistare questo pacchetto promozionale?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">NO</button>
                        <button type="button" class="btn btn-primary">SI</button>
                    </div>
                </div>
            </div>
        </div>
    @endif
        
    @else
    <!-- MODAL PAGAMNETO NON RIUSCIUTO-->
    <div class="modal fade" id="modalFail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Acquista il pacchetto promozionale</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Vuoi acquistare questo pacchetto promozionale?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">NO</button>
                    <button type="button" class="btn btn-primary">SI</button>
                </div>
            </div>
        </div>
    </div> --}}

    {{-- Titolo --}}
    <h1>Pacchetti Promozionali</h1>

    <div><strong>Acquista un piano di sponsorizzazione</strong></div>
    
    {{-- FORM BUNDLES RADIOS --}}
    <form action="{{ route('payment.process', ['client_token' => $client_token]) }}" method="post">
        @csrf
        {{-- Radio-check-inputs --}}
        @foreach ($bundles as $bundle)
            <div class="form-check mt-4">
                <input class="form-check-input" type="radio" name="bundle" id="bundle-{{ $bundle->code }}" value="{{ $bundle->id }}">
                <label class="form-check-label" for="bundle-{{ $bundle->code }}">
                    <div>
                        <span class="text-uppercase font-weight-bold">{{ $bundle->name }}</span>: 
                        per{{ $bundle->price }} € di sponsorizzazione
                    </div>
                </label>
            </div>
        @endforeach
        
        {{-- Input invisibile per passare al controller la var deviceData ottenuta tramite script Braintree --}}
        <input type="hidden" name="device_data" id="device-data" value="">

        {{-- Submit --}}
        <button  type="submit" class="btn btn-primary mt-4" data-toggle="modal">
            Acquista
        </button>

    </form>

    {{-- Client-Token passed from sponsors view --}}
    <div id="client-token" class="invisible">{{ $client_token }}</div>

    {{-- Script Braintree --}}
    <script type="text/javascript">
        let divTest = document.getElementById('device-data');
        let client_token = document.getElementById("client-token").innerHTML;
        var button = document.querySelector('#submit-button');


        braintree.client.create({
            // authorization: client_token
        }, function (err, clientInstance) {
            // Creation of any other components...
        
            braintree.dataCollector.create({
            client: clientInstance
            }, function (err, dataCollectorInstance) {
            if (err) {
                // Handle error in creation of data collector
                return;
            }
            // At this point, you should access the dataCollectorInstance.deviceData value and provide it
            // to your server, e.g. by injecting it into your form as a hidden input.
            var deviceData = dataCollectorInstance.deviceData;

            // Passo il deviData all'input invisibile del form per inviarlo al controller
            divTest.value = deviceData;
            });
        });
    </script>
@endsection