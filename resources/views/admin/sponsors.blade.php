@extends('layouts.dashboard')

@section('content')
    <!-- MODAL SUCCESSO DEL PAGAMENTO -->
    @if()
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
    </div>

    {{-- Titolo --}}
    <h1>Pacchetti Promozionali</h1>

    <div><strong>Acquista una sponsorizzazione selenzionado il tipo di promozione</strong></div>

    {{-- Radio-check-inputs --}}
    @foreach ($bundles as $bundle)
        <div class="form-check mt-4">
            <input class="form-check-input" type="radio" name="bundle" id="bundle-{{ $bundle->code }}" value="{{ $bundle->code }}">
            <label class="form-check-label" for="bundle-{{ $bundle->code }}">
                <div>
                    <span class="text-uppercase font-weight-bold">{{ $bundle->name }}</span>: 
                    per{{ $bundle->price }} € di sponsorizzazione
                </div>
            </label>
        </div>
    @endforeach
    
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary mt-4" data-toggle="modal" data-target="#exampleModal">
        Acquista il Pacchetto Promozioale
    </button>
@endsection