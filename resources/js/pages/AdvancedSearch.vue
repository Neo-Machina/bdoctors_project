<template>
    <div class="container">
        <!-- <Profiles/> -->
        <h1>Advanced Search</h1>

        <!-- CARD USER -->
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
                            name: 'single-post', 
                            params: {slug: user.slug}
                        }">
                            Scopri di più
                        </router-link>
                    </div>
                </div>
            </div>
        </div>


        <!-- FILTRO MEDIA VOTO DA 0 A 5 -->
        <div v-for="(number, index) in 6" :key="'B' + index">
            <div @click.prevent="getUsersBySpecAndAvgVote(1, index)" style="cursor: pointer;">
                Media Voto: {{ index }}
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
                this.users = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
            });
        },
        getUsersBySpecAndAvgVote(pageNumber, filter_avg_vote) {
            console.log(filter_avg_vote);
            axios.get('/api/users-by-specialization-and-average-vote/' + this.$route.params.specialization_slug + '/' + filter_avg_vote, {
                params: {
                    page: pageNumber
                }
            })
            .then((response) => {
                this.users = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
            });
        },
        truncateText(text) {
            if(text.length > 100) {
                return text.slice(0, 100) + '...'
            }

            return text;
        }
    },
    mounted() {
        // setTimeout(function(){ this.getUsersBySpecialization(this.$route.params.specialization_slug, 1) }, 500);
        this.getUsersBySpecialization(1);
    }
}
</script>