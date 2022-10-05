<template>
    <div class="container">
        <Profiles/>
        <h1>Advanced Search</h1>

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
import Profiles from '../components/Profiles.vue';

export default {
    name: 'AdvancedSearch',
    components: {
        Profiles
    },
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
        }
    },
    mounted() {
        // setTimeout(function(){ this.getUsersBySpecialization(this.$route.params.specialization_slug, 1) }, 500);
        this.getUsersBySpecialization(1);
    }
}
</script>