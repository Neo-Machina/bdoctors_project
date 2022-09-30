<template>
    <h1>
        home page
    </h1>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            pageTitle: 'Risultato ricerca',
            users: [],
            currentPage: null,
            lastPage: null
        }
    },
    methods: {
        getUsers(pageNumber) {
            axios.get('/api/users', {
                params: {
                    page: pageNumber
                }
            })
            .then((response) => {
                this.posts = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
            });
        }
    },
    mounted() {
        this.getUsers(1);
    }
}
</script>

<style lang="scss" scoped>

</style>