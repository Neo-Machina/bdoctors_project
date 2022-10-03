<template>
    <div class="container">
        <h1>Advanced Search</h1>

        <!-- CARD USER -->
        <div v-for="(user, index) in users" :key="'A' + index">
                <div>{{user.user_name}}</div>
                <div>Fine Sponsorizzazione: {{user.expired_date}}</div>
                <div>{{user.specialization_name}}</div>
                <hr>
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
export default {
    name: 'AdvancedSearch',
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
        }
    },
    mounted() {
        // setTimeout(function(){ this.getUsersBySpecialization(this.$route.params.specialization_slug, 1) }, 500);
        this.getUsersBySpecialization(1);
    }
}
</script>