<template>
    <section>
        <section class="main-content">
            <!-- page title -->
            <div class="text-center">
                <h2 class="mt-3 text-primary">Benvenuti su BDoctors</h2>

                <p class="mt-3" >
                    Benvenuto nel sito BDoctors, dove puoi trovare la miglior scelta per la tua esigenza.
                </p>
            </div>

            <!-- image -->
            <section class="progress" style="height: 200px;">
                <img  src="https://images.theconversation.com/files/59470/original/bmc3zndq-1411073854.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="">
                <img  src="https://dr-olivier-clinic.com/wp-content/uploads/2014/10/different-doctors.jpg" alt="">
                <img  src="https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=2000" alt="">
                <img  src="https://welpmagazine.com/wp-content/uploads/2020/09/becoming-doctor.jpg" alt="">
                <img  src="https://www.optimahealth.com/_assets/images/group-of-doctors-card.jpg" alt="">   
            </section>

            <!-- ricerca avanzata per specializzazioni -->
            <section class="bg-info my-5">
                <h5 class="text-center py-3 text-light">Ricerca qui medici per specializzazione</h5>

                <!-- lista specializzazioni -->
                <ul class="list-unstyled d-flex justify-content-center pb-3">
                    <li class="mr-5" v-for="(specialization, index) in specializations" :key="'B' + index">
                        <router-link class="text-light" 
                            :to="{name:'advanced-search', params:{specialization_slug: specialization.slug} }">
                                {{specialization.name}}
                        </router-link>
                    </li>
                </ul>
            </section>

            <!-- utenti Sponsorizzati -->
            <div class="carousel d-flex">
                <div v-for="(user, index) in users" :key="'A' + index">
                    <div class="card" style="width: 12rem;">
                        <img :src="user.user_photo" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{user.user_name}}</h5>
                            <p class="card-text">{{user.specialization_name}}</p>
                            <div class="card-text mb-3">{{user.user_email}}</div>
                            <div>{{user.bundle_name}}</div>
                            <div>{{user.expired_date}}</div>

                            <router-link class="btn btn-primary" 
                            :to="{
                                name: 'single-post', 
                                params: {slug: user.slug}
                            }">
                                Scopri di più
                            </router-link>
                        </div>
                    </div>
                </div>  
            </div>

            <!-- about us -->
            <section class="about-us my-5">
                <div class="container">
                    <div class="row">
                        <!-- left col with image  -->
                        <div class="col col-sm-12 col-md-6 mr-3">
                            <img style="height: 200px;" src="https://www.ges-tt.com/wp-content/uploads/2020/11/recensioni-positive-google-perche-sono-importanti-come-gestirle.jpg" alt="reviews">
                        </div>
        
                        <!-- right col with text -->
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
        </section>

        <Footer/>
        
    </section>
</template>

<script>
import Footer from '../components/Footer.vue';
import { Carousel, Slide } from 'vue-carousel';

export default {
    name: 'HomePage',
    components: {
        Footer,
        Carousel,
        Slide
    },
    data() {
        return {
            pageTitle: 'Risultato ricerca',
            users: [],
            specializations: [],
            varTest: 'Hello',
            currentPage: null,
            lastPage: null,
        }
    },
    methods: {
        getSponsoredUsers() {
            axios.get('/api/sponsored-users', {
                // params: {
                //     page: pageNumber
                // }
            })
            .then((response) => {
                this.users = response.data.results.users;
                this.specializations = response.data.results.specializations;
                // this.currentPage = response.data.results.current_page;
                // this.lastPage = response.data.results.last_page;
            });
        }
    },
    mounted() {
        this.getSponsoredUsers();
        console.log(this.users);
    }
}
</script>

<style lang="scss" scoped>
.carousel {
    overflow-y: auto;
    
    .card {
        margin-inline: 1rem;
    }
}
</style>