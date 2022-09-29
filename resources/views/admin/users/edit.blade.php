@extends('layouts.dashboard')

@section('content')
    <h1>Modifica il tuo profilo</h1>

    <form action="{{ route('admin.users.update', ['user' => $user->id]) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
        @endif

        {{-- NOME E COGNOME--}}
        <div class="mb-3">
            <label for="name" class="form-label"><strong>Nome e cognome</strong></label>
            <input class="form-control" type="text" id="name" name="name" value="{{ old('name', $user->name) }}">
        </div>
        {{-- EMAIL --}}
        <div class="mb-3">
            <label for="email" class="form-label"><strong>Email</strong></label>
            <input class="form-control" type="text" id="email" name="email" value="{{ old('email', $user->email) }}">
        </div>
        {{-- CURRICULUM VITAE --}}
        <div class="mb-3">
            <label for="curriculum" class="form-label"><strong>Curriculum Vitae</strong></label>
            <textarea class="form-control" id="floatingTextarea" name="curriculum" rows="30" cols="20">{{ old('curriculum', $user->curriculum) }}</textarea>
        </div>
        {{-- SPECIALIZZAZIONI --}}
        <div class="mb-3">
            <div><strong>Specializzazioni</strong></div>

            @foreach ($specializations as $specialization)
                @if ($errors->any())
                    <div class="form-check">
                        <input class="form-check-input" 
                                type="checkbox" 
                                value="{{ $specialization->id }}" 
                                id="specialization-{{ $specialization->id }}" 
                                name="specializations[]"
                                {{ in_array($specialization->id,old('specializations', [])) ? 'checked' : ''}}>
                        <label class="form-check-label" for="specialization-{{ $specialization->id }}">
                            {{ $specialization->name }}
                        </label>
                    </div>

                @else
                    <div class="form-check">
                        <input class="form-check-input" 
                                type="checkbox" 
                                value="{{ $specialization->id }}" 
                                id="specialization-{{ $specialization->id }}" 
                                name="specializations[]"
                                {{ $user->specializations->contains($specialization) ? 'checked' : ''}}>
                        <label class="form-check-label" for="specialization-{{ $specialization->id }}">
                            {{ $specialization->name }}
                        </label>
                    </div>
                @endif
            @endforeach
        </div>
        {{-- FOTOGRAFIA --}}
        <div class="mb-3">
            <label for="image" class="form-label"><strong>Fotografia</strong></label>
            <input class="form-control" type="file" id="image" name="image">

            @if ($user->photo)
                <div class="mt-2">Immagine corrente:</div>
                <img class="w-25 mt-3" src="{{ $user->photo }}" alt="{{ $user->name }}">
            @endif
        </div>

        <div class="form-check">
            <input class="form-check-input" 
                    type="checkbox" 
                    value="remove-image" 
                    id="remove-image" 
                    name="remove-image">
            <label class="form-check-label" for="remove-image">
                Cancella immagine
            </label>
        </div>
        {{-- INDIRIZZO --}}
        <div class="mb-3">
            <label for="address" class="form-label"><strong>Indirizzo</strong></label>
            <input class="form-control" type="text" id="address" name="address" value="{{ old('address', $user->address) }}">
        </div>
        {{-- TELEFONO --}}
        <div class="mb-3">
            <label for="phone_number" class="form-label"><strong>Telefono</strong></label>
            <input class="form-control" type="text" id="phone_number" name="phone_number" value="{{ old('phone_number', $user->phone_number) }}">
        </div>
        {{-- PRESTAZIONI --}}
        <div class="mb-3">
            <label for="service" class="form-label"><strong>Prestazioni</strong></label>
            <input class="form-control" type="text" id="service" name="service"  value="{{ old('service', $user->service) }}">
        </div>

        <input type="submit" value="Modica profilo" class="btn btn-primary">
    </form>

    <form class="form-btn-elimina" action="{{ route('admin.users.destroy', ['user' => $user->id]) }}" method="post">
        @csrf
        @method('DELETE')

        <input type="submit" value="Elimina Profilo" class="btn btn-danger" onClick="return confirm('Sei sicuro di voler eliminare l'utente'?');">
    </form>
@endsection