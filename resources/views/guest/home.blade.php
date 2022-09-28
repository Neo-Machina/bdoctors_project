<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <title>Document</title>
</head>
<body>
    <div class="container-fluid ">
        <div id="app">
            <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                <div class="container">
                    <a class="navbar-brand" href="{{ url('/') }}">
                        {{ config('app.name', 'Laravel') }}
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                        <span class="navbar-toggler-icon"></span>
                    </button>
    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <!-- Left Side Of Navbar -->
                        <ul class="navbar-nav mr-auto">
    
                        </ul>
    
                        <!-- Right Side Of Navbar -->
                        <ul class="navbar-nav ml-auto">
                            <!-- Authentication Links -->
                            @guest
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                </li>
                                @if (Route::has('register'))
                                    <li class="nav-item">
                                        <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                    </li>
                                @endif
                            @else
                                <li class="nav-item dropdown">
                                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                        {{ Auth::user()->name }}
                                    </a>
    
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="{{ route('logout') }}"
                                           onclick="event.preventDefault();
                                                         document.getElementById('logout-form').submit();">
                                            {{ __('Logout') }}
                                        </a>
    
                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                            @csrf
                                        </form>
                                    </div>
                                </li>
                            @endguest
                        </ul>
                    </div>
                </div>
            </nav>
    
            <main class="py-4">
                @yield('content')
            </main>
        </div>
        <h1 class="bg-light text-success">Welcome to Bdoctors</h1>
        <p class="mt-3 text-light" >
            Benvenuto nel sito Bdoctors, dove puoi trovare la miglior scelta per la tua esigenza.
        </p>
        <ul class="d-flex list-unstyled">
            <li class="mr-3">
                <a class="text-light" href="#"> Cerca</a>
                <img class="progress" style="height: 50px;" src="https://support.apple.com/library/content/dam/edam/applecare/images/it_IT/iOS/ios15-iphone13-pro-search-animation.gif" alt="">
            </li>
        </ul>
    </div>
    <div class="mb-3 progress" style="height: 200px;">
        <img  src="https://images.theconversation.com/files/59470/original/bmc3zndq-1411073854.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="">
        <img  src="https://dr-olivier-clinic.com/wp-content/uploads/2014/10/different-doctors.jpg" alt="">
        <img  src="https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=2000" alt="">
        <img  src="https://welpmagazine.com/wp-content/uploads/2020/09/becoming-doctor.jpg" alt="">
        <img  src="https://www.optimahealth.com/_assets/images/group-of-doctors-card.jpg" alt="">   
    </div>
    <div class="container-fluid bg-info">
        <ul class="list-unstyled ">
            <li>
                <span class="bg-warning ">Specializzazioni</span> 
            </li>
            <li class="mt-3">
               <a class="text-light" href="#"> Cardiologia</a>
            </li>
            <li class="mt-3">
                <a class="text-light" href="#"> Neurologia</a>
            </li>
            <li class="mt-3">
                <a class="text-light" href="#"> Ortopedia</a>
            </li>
            <li class="mt-3">
                <a class="text-light" href="#"> Andrologia</a>
            </li>
            <li class="mt-3">
                <a class="text-light" href="#"> Urologia</a>
            </li>
            <li class="mt-3">
                <a class="text-light" href="#"> Dermatologia</a>
            </li>
            <li class="mt-3">
                <a class="text-light" href="#"> Oculistica</a>
            </li>
            <li class="mt-3">
                <a class="text-light" href="#"> Proctologia</a>
            </li>
        </ul>
    </div>
    <div>
        <div class="d-flex ">
            <div>
                <img style="height: 200px;" src="https://www.ges-tt.com/wp-content/uploads/2020/11/recensioni-positive-google-perche-sono-importanti-come-gestirle.jpg" alt="">
            </div>
            <div>
                <h3>
                    Dicono di noi 
                </h3>
                <p>
                    Oltre il 90% di pazienti soddisfatti
                    BDoctors è un nuovo sito in Italia di prenotazioni di visite mediche ed esami diagnostici, online dal 2022.
                    Crediamo nell'importanza dell'informazione e della trasparenza per aiutare i pazienti a scegliere il medico giusto tra gli oltre 9.000 presenti su BDoctors.
                    Per questo su BDoctors, solo i pazienti che hanno prenotato attraverso il sito e svolto la prestazione possono rilasciare un feedback sul medico: una garanzia dell'affidabilità delle 13.553 recensioni che leggi.
                </p>
            </div>
        </div>
    </div>
</body>
</html>

