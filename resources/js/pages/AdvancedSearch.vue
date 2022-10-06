<template>
    <div class="container">
        <!-- <Profiles/> -->
        <!-- <h1>Advanced Search</h1> -->

        <div class="row">
            <div class="col-2">
                <div class="average">
                    <div class="mb-2 px-1">
                        <strong class="bg-info">Scegli un medico in base <br> a i voti che ha ricevuto</strong> 
                    </div>

                   <!-- FILTRO MEDIA VOTO DA 1 A 5 -->
                    <div v-for="(number, index) in 4" :key="index">
                        <div class="hover-effect" @click.prevent="getUsersBySpecAndAvgVote(1, number)" style="cursor: pointer;">
                            <!-- Media Voto: {{ number }} e più -->
                            <!-- <i class="fas fa-star active"></i> -->

                            <i v-for="n in stars(number)" :key="n" class="fas fa-star active"></i>
                            <i v-for="m in 5 - stars(number)" :key="m" class="far fa-star star_icon"></i>
                        </div>
                    </div>
                    
                    <!-- FILTRO NUMERO RECENSIONI -->
                    <div class="mt-3">
                        <div class="mb-2">
                            <strong class="bg-info">Filtra per numero <br> di recensioni</strong>
                        </div>

                        <div class="hover-effect" @click.prevent="getUsersBySpecAndCountRev(1, 0, 5)" style="cursor: pointer;">
                            Fino a 5 recensioni
                        </div>
                        <div class="hover-effect" @click.prevent="getUsersBySpecAndCountRev(1, 5, 10)" style="cursor: pointer;">
                            da 5 a 10 recensioni
                        </div>
                        <div class="hover-effect" @click.prevent="getUsersBySpecAndCountRev(1, 10, 1000)" style="cursor: pointer;">
                            10 recensioni e più
                        </div>
                    </div>
                </div>
            </div>

            <!-- CARD USER -->
            <div class="col-10">
                <div class="user-card d-flex flex-wrap">
                    <div v-for="(user, index) in users" :key="'A' + index">

                        <div class="card mb-5" style="width: 18rem;">
                            <img :src="user.photo" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">{{user.name}}</h5>
                                <h6 class="card-text badge bg-info text-dark mr-1">{{user.specialization_slug}}</h6>
                                <div class="mb-1"><strong>{{user.email}}</strong></div>
                                <div><strong>Voto</strong>: <i v-for="n in stars(user.reviews_avg_vote)" :key="n" class="fas fa-star active"></i></div>
                                <div><strong>Numero di recensioni</strong>: {{user.reviews_count}}</div>
                                <p>{{truncateText(user.curriculum)}}</p>

                                <router-link class="btn btn-primary" 
                                    :to="{
                                        name: 'single-profile', 
                                        params: {user_slug: user.slug}
                                    }">
                                    Scopri di più
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
// import Profiles from '../components/Profiles.vue';

export default {
    name: 'AdvancedSearch',
    // components: {
    //     Profiles
    // },
    data() {
        return {
            users: [],
        }
    },
    methods: {
        getUsersBySpecialization(pageNumber) {
            axios.get('/api/users-by-specialization/' + this.$route.params.specialization_slug, {
                params: {
                    page: pageNumber
                }
            })
            .then((response) => {
                this.users = response.data.results;
                // this.currentPage = response.data.results.current_page;
                // this.lastPage = response.data.results.last_page;
            });
        },
        getUsersBySpecAndAvgVote(pageNumber, filter_avg_vote) {
            console.log(filter_avg_vote);
            console.log(this.$route.params.specialization_slug);
            axios.get('/api/users-by-specialization-and-average-vote/' + this.$route.params.specialization_slug + '/' + filter_avg_vote, {
                params: {
                    page: pageNumber
                }
            })
            .then((response) => {
                console.log(response);
                this.users = response.data.results;
                // this.currentPage = response.data.results.current_page;
                // this.lastPage = response.data.results.last_page;
            });
        },
        getUsersBySpecAndCountRev(pageNumber, reviews_min, reviews_max) {
            console.log(reviews_min, reviews_max);
            console.log(this.$route.params.specialization_slug);
            axios.get('/api/users-by-specialization-and-count-reviews/' + this.$route.params.specialization_slug + '/' + reviews_min + '/' + reviews_max, {
                params: {
                    page: pageNumber
                }
            })
            .then((response) => {
                console.log(response);
                this.users = response.data.results;
                // this.currentPage = response.data.results.current_page;
                // this.lastPage = response.data.results.last_page;
            });
        },
        truncateText(text) {
            if(text.length > 100) {
                return text.slice(0, 100) + '...'
            }

            return text;
        },
        stars(original_vote) {
            return Math.round(original_vote);
        }
    },
    mounted() {
        // setTimeout(function(){ this.getUsersBySpecialization(this.$route.params.specialization_slug, 1) }, 500);
        this.getUsersBySpecialization(1);
    }
}
</script>

<style lang="scss" scoped>
.average {
    position: fixed;
}

.star_icon {
    color: grey;
    cursor: pointer;
}

.active {
    color: gold;
}

.hover-effect:hover {
    font-weight: bold;
}

.col-10 {
    .user-card {
        justify-content: space-between;
    }
}

@media screen and (min-width:568px) {
    .col-10 {
        .user-card {
            justify-content: flex-end;
        }
    }
}

@media screen and (min-width:768px) {
    .col-10 {
        .user-card {
            justify-content: center;
        }
    }
}

@media screen and (min-width:992px) {
    .col-10 {
        .user-card {
            justify-content: space-evenly;
        }
    }
}
</style>