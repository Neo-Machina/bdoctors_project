<template>
    <div>
        <!-- User Sponsorizzati -->
        <div v-for="(user, index) in users" :key="index">
            {{user.user_name}} - {{user.specialization_name}} - {{user.expired_date}}
        </div>

        <!-- Link Specializzazioni -->
        <div v-for="(user, index) in users" :key="index">
            <router-link class="btn btn-primary m-2" 
                :to="{name:'advanced-search', params:{specialization_slug: user.specialization_slug} }">
                    {{user.specialization_name}}
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            pageTitle: 'Risultato ricerca',
            users: [],
            varTest: 'Hello',
            currentPage: null,
            lastPage: null
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
                this.users = response.data.results;
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

</style>