@extends('layouts.dashboard')

@section('content')
    <h1>Ciao {{ $user->name }}, questa è la tua lista delle tue Recensioni</h1>

    {{-- Stampa tutte le recensioni --}}
    @foreach ($reviews as $review)
        <ul>
            <li>Review ID: {{ $review->id }}</li>
            <li>Autore: {{ $review->author }}</li>
            <li>Data pubblicazione: {{ $review->created_at }}</li>
            <li>Voto: {{ $review->vote }}</li>
            <li>Recensione: {{ $review->content }}</li>
            <!-- Delete Button -->
            <button  class="btn btn-danger my-3" type="button" data-target="#deleteModal" data-toggle="modal">Elimina</button>
        </ul>
        
        <h5>ID della Review da eliminare: {{ $review->id }}</h5>

        <hr>


        <!-- Modale conferma eliminazione profilo user -->
        <div class=" modal" tabindex="-1" role="dialog" id="deleteModal">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Conferma eliminazaione</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Confermi di voler eliminare la recensione?</p>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" type="button" data-dismiss="modal">NO</button>
                    <form class="form-btn-elimina" action="{{ route('admin.reviews.destroy', ['review' => $review->id + 1]) }}" method="post">
                    {{-- <form class="form-btn-elimina" action="{{ route('admin.reviews.destroy', ['review' => 4]) }}" method="post"> --}}
                        @csrf
                        @method('DELETE')
                        <input type="submit" value="SI" class="btn btn-danger">
                    </form>
                </div>
                </div>
            </div>
        </div>
    @endforeach

    {{-- Pagination --}}
    <div>
        {{ $reviews->links() }}
    </div>
@endsection