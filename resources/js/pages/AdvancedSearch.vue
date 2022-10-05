<template>
    <div class="container">
        <!-- <Profiles/> -->
        <!-- <h1>Advanced Search</h1> -->

        <div class="row">
            <div class="col-2">
                <div class="average">
                    <div class="mb-2">
                        <strong class="bg-warning">Scegli un medico in base <br> alle recensioni ricevute</strong> 
                    </div>

                    <!-- FILTRO MEDIA VOTO DA 0 A 5 -->
                    <div v-for="(number, index) in 6" :key="'B' + index">
                        <div @click.prevent="getUsersBySpecAndAvgVote(1, index)" style="cursor: pointer;">
                            Media Voto: {{ index }}
                        </div>

                        <div class="average_vote"> 
                            <span class="bold_text">Vote</span>: 
                           <!-- <span class="star_icon " :class="{ 'active': star <= voteReview }" v-for="(star,index) in 5" :key="index" @click.prevent="voteReview = star">
                             <span v-for="(star,index) in 5" :key="index"> 
                                &#9733;
                            </span>-->
                        </div>
                    </div>
                </div>
            </div>

            <!-- CARD USER -->
            <div class="col-10">
                <div class="d-flex flex-wrap justify-content-between">
                    <div v-for="(user, index) in users" :key="'A' + index">

                        <div class="card mb-5" style="width: 18rem;">
                            <img :src="user.user_photo" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">{{user.user_name}}</h5>
                                <h6 class="card-text">{{user.specialization_name}}</h6>
                                <div class="mb-1">{{user.user_email}}</div>
                                <p>{{truncateText(user.user_curriculum)}}</p>

                                <router-link class="btn btn-primary" 
                                    :to="{
                                        name: 'single-profile', 
                                        params: {user_slug: user.user_slug}
                                    }">
                                    Scopri di più
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <!-- CARD USER -->
        <div v-for="(user, index) in users" :key="'A' + index">
            <router-link class="btn btn-primary m-2" 
            :to="{name:'single-profile', params:{user_slug: user.slug} }">
                <div>Nome: {{user.name}}</div>
                <div>Fine Sponsorizzazione: {{user.expired_date}}</div>
                <div>Specializzazione: {{user.specialization_slug}}</div>
                <div>Media Voto recensioni: {{user.reviews_avg_vote}}</div>
                <div>Numero Recensioni: {{user.reviews_count}}</div>
                <hr>
            </router-link>
        </div>


        <!-- FILTRO MEDIA VOTO DA 1 A 5 -->
        <div v-for="(number, index) in 5" :key="'B' + index">
            <div @click.prevent="getUsersBySpecAndAvgVote(1, number)" style="cursor: pointer;">
                Media Voto: {{ number }}
            </div>
        </div>
        
        
        <!-- FILTRO NUMERO RECENSIONI -->
        <h5>Filtro Numero Recensioni</h5>
        <div @click.prevent="getUsersBySpecAndCountRev(1, 0, 5)" style="cursor: pointer;">
            Fino a 5 RECENSIONI
        </div>
        <div @click.prevent="getUsersBySpecAndCountRev(1, 5, 10)" style="cursor: pointer;">
            5 a 10 RECENSIONI
        </div>
        <div @click.prevent="getUsersBySpecAndCountRev(1, 10, 1000)" style="cursor: pointer;">
            10 RECENSIONI e più
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
        averageFilterUsers() {

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
</style>