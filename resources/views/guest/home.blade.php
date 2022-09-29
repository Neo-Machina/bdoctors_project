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

    {{-- header --}}
    <header>
        <div class="header-top">
            <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                <div class="container">
                    <a class="navbar-brand" href="{{ url('/') }}">
                        {{ config('app.name', 'Laravel') }}
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                        <span class="navbar-toggler-icon"></span>
                    </button>
    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                              
                        <!-- Right Side Of Navbar -->
                        <ul class="navbar-nav ml-auto">
                            <!-- Authentication Links -->
                            @guest
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('login') }}">{{ __('Accedi') }}</a>
                                </li>
                                @if (Route::has('register'))
                                    <li class="nav-item">
                                        <a class="nav-link" href="{{ route('register') }}">{{ __('Registrati') }}</a>
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
                                            {{ __('Esci') }}
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
        </div>

        <div class="header-bottom text-center mt-5">  
            <div class="container">
                <h1 class="mt-3 text-primary">Welcome to BDoctors</h1>

                <p class="mt-3" >
                    Benvenuto nel sito BDoctors, dove puoi trovare la miglior scelta per la tua esigenza.
                </p>

                <ul class="d-flex list-unstyled">
                    <li class="mr-3">
                        <a class="text-light" href="#"> Cerca</a>
                        {{-- <img class="progress" style="height: 50px;" src="https://support.apple.com/library/content/dam/edam/applecare/images/it_IT/iOS/ios15-iphone13-pro-search-animation.gif" alt=""> --}}
                    </li>
                </ul>
            </div>
        </div>
        
    </header>
    
    {{-- main --}}
    <main>
        {{-- image --}}
        <section class="progress" style="height: 200px;">
            <img  src="https://images.theconversation.com/files/59470/original/bmc3zndq-1411073854.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="">
            <img  src="https://dr-olivier-clinic.com/wp-content/uploads/2014/10/different-doctors.jpg" alt="">
            <img  src="https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=2000" alt="">
            <img  src="https://welpmagazine.com/wp-content/uploads/2020/09/becoming-doctor.jpg" alt="">
            <img  src="https://www.optimahealth.com/_assets/images/group-of-doctors-card.jpg" alt="">   
        </section>
    
        {{-- specializations --}}
        <section class="bg-info my-5">
            
            <h5 class="text-center py-3 text-light">Ricerca qui medici per specializzazione</h5>

            {{-- lista specializzazioni --}}
            <ul class="list-unstyled d-flex justify-content-center pb-3">
                <li class="mr-5">
                   <a class="text-light" href="#"> Cardiologia</a>
                </li>

                <li class="mr-5">
                    <a class="text-light" href="#"> Neurologia</a>
                </li>

                <li class="mr-5">
                    <a class="text-light" href="#"> Ortopedia</a>
                </li>

                <li class="mr-5">
                    <a class="text-light" href="#"> Andrologia</a>
                </li>

                <li class="mr-5">
                    <a class="text-light" href="#"> Urologia</a>
                </li>

                <li class="mr-5">
                    <a class="text-light" href="#"> Dermatologia</a>
                </li>

                <li class="mr-5">
                    <a class="text-light" href="#"> Oculistica</a>
                </li>

                <li class="mr-5">
                    <a class="text-light" href="#"> Proctologia</a>
                </li>
            </ul>
        </section>

        {{-- about us --}}
        <section class="about-us my-5">
            <div class="container">
                <div class="row">  {{-- row-cols-2 row-cols-sm-1 row-cols-md-2 --}}
                    {{-- left col with image --}}
                    <div class="col col-sm-12 col-md-6 mr-3">
                        <img style="height: 200px;" src="https://www.ges-tt.com/wp-content/uploads/2020/11/recensioni-positive-google-perche-sono-importanti-come-gestirle.jpg" alt="reviews">
                    </div>
    
                    {{-- right col with text --}}
                    <div class="col col-sm-12 col-md-5">
                        <h3 class="text-primary">
                            Dicono di noi 
                        </h3>

                        <h5>
                            Oltre il 90% di pazienti soddisfatti.
                        </h5>

                        <p>
                            BDoctors è un nuovo sito in Italia di prenotazioni di visite mediche ed esami diagnostici, online dal 2022.
                            Crediamo nell'importanza dell'informazione e della trasparenza per aiutare i pazienti a scegliere il medico giusto tra gli oltre 9.000 presenti su BDoctors.
                            Per questo su BDoctors, solo i pazienti che hanno prenotato attraverso il sito e svolto la prestazione possono rilasciare un feedback sul medico: una garanzia dell'affidabilità delle 13.553 recensioni che leggi.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    {{-- footer --}}
    <footer class="bg-info text-light py-3">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-3">
                    <div>
                        via giulio cesare
                    </div>

                    <div>
                        3693583475
                    </div>

                    <div>
                        0823 657894
                    </div>
                </div>

                <div class="col-9">
                    <div class="row">
                        <div class="col">
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#" class="link-light text-light border-bottom-0">specializzazioni</a>
                                </li>
                    
                                <li>
                                    <a href="#" class="link-light text-light border-bottom-0">chi siamo</a>
                                </li>
                    
                                <li>
                                    <a href="#" class="link-light text-light border-bottom-0">contatti</a>
                                </li>
                    
                                <li>
                                    <a href="#" class="link-light text-light border-bottom-0">privacy e condizioni</a>
                                </li>
                            </ul>
                        </div>
    
                        <div class="col">
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#" class="link-light text-light border-bottom-0">specializzazioni</a>
                                </li>
                    
                                <li>
                                    <a href="#" class="link-light text-light border-bottom-0">chi siamo</a>
                                </li>
                    
                                <li>
                                    <a href="#" class="link-light text-light border-bottom-0">contatti</a>
                                </li>
                    
                                <li>
                                    <a href="#" class="link-light text-light border-bottom-0">privacy e condizioni</a>
                                </li>
                            </ul>
                        </div>
            
                        <div class="col">
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#" class="link-light text-light border-bottom-0">specializzazioni</a>
                                </li>
                    
                                <li>
                                    <a href="#" class="link-light text-light border-bottom-0">chi siamo</a>
                                </li>
                    
                                <li>
                                    <a href="#" class="link-light text-light border-bottom-0">contatti</a>
                                </li>
                    
                                <li>
                                    <a href="#" class="link-light text-light border-bottom-0">privacy e condizioni</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
</body>
</html>
