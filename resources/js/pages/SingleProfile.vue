<template>
    <div class="container">
        <h1>Single Profile</h1>
        <ul>
            <li>Nome: {{ user.name }}</li>
            <li>Email: {{ user.email }}</li>
            <li>Indirizzo: {{ user.address }}</li>
            <li>Numero di recensioni: {{ user.count_reviews }}</li>
            <li>Media voto: {{ user.avg_reviews }}</li>
        </ul>

        <div v-for="(review, index) in user.reviews" :key="index">
            <div>Autore: {{ review.author }}</div>
            <div>Voto: {{ review.vote }}</div>
            <div>Recensione: {{ review.content }}</div>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleProfile',
    data() {
        return {
            user: {},
            // reviews: []
        }
    },
    methods: {
        getSingleProfile() {
            // axios.get('/api/users/' + 'destiney-johns')
            axios.get('/api/users/' + this.$route.params.slug)
            .then((response) => {
                this.user = response.data.results;
            });
        }
    },
    mounted() {
        this.getSingleProfile();
    }
}
</script>