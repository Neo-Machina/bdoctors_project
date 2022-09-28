@extends('layouts.dashboard');

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Edit</title>
</head>
<body>
    <h1>Edit your profile</h1>

    <form action="{{ route('admin.users.update') }}" method="POST" enctype="multipart/form-data">
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
        {{-- CURRICULUM VITAE --}}
        <div class="mb-3">
            <label for="curriculum" class="form-label">Curriculum Vitae</label>
            <textarea class="form-control" id="floatingTextarea" name="curriculum" rows="30"></textarea>
        </div>
        {{-- SPECIALIZZAZIONI --}}
        <div class="mb-3">
            <div><strong>Specializzazioni</strong></div>

            <div class="form-check">
                <input class="form-check-input" 
                        type="checkbox" 
                        value="" 
                        id="specialization" 
                        name="specialization[]">
                        
                <label class="form-check-label" for="specialization-">
                    
                </label>
            </div>
        </div>
        {{-- FOTOGRAFIA --}}
        <div class="mb-3">
            <label for="photo" class="form-label">Fotografia</label>
            <input class="form-control" type="file" id="photo" name="photo">
        </div>
        {{-- INDIRIZZO --}}
        <div class="mb-3">
            <label for="address" class="form-label">Indirizzo</label>
            <input class="form-control" type="file" id="address" name="address">
        </div>
        {{-- TELEFONO --}}
        <div class="mb-3">
            <label for="phone_number" class="form-label">Telefono</label>
            <input class="form-control" type="file" id="phone_number" name="phone_number">
        </div>
        {{-- PRESTAZIONI --}}
        <div class="mb-3">
            <label for="service" class="form-label">Prestazioni</label>
            <input class="form-control" type="file" id="service" name="service">
        </div>

        <input type="submit" value="Modica profilo">
    </form>
</body>
</html>