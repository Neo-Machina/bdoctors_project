<template>
    <!-- ricerca avanzata per specializzazioni -->
            <section class="bg-info my-5">
                <h5 class="text-center py-3 text-light specialization-doctor">Ricerca qui medici per specializzazione</h5>

                <!-- lista specializzazioni -->
                <ul class="list-unstyled d-flex justify-content-center pb-3">
                    <!-- <li class="mr-5" v-for="(specialization, index) in specializations" :key="index">
                        <router-link class="text-light specialization-name" 
                            :to="{name:'advanced-search', params:{specialization_slug: specialization.slug} }">
                                {{specialization.name}}
                        </router-link>
                    </li>  -->

                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Specializzazioni
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                            <li class="mr-5" v-for="(specialization, index) in specializations" :key="index">
                                <router-link class="text-dark specialization-name" 
                                    :to="{name:'advanced-search', params:{specialization_slug: specialization.slug} }">
                                        {{specialization.name}}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </ul>
            </section> 
</template>

<script>
export default {
    name: 'DropdownMenuSpecialization',
    data() {
        return {
            specializations: [],
        }
    },
    methods: {
        getSponsoredUsers() {
            axios.get('/api/sponsored-users', {
                
            })
            .then((response) => {
                this.users = response.data.results.users;
                this.specializations = response.data.results.specializations;
            });
        },
    },
    mounted() {
        this.getSponsoredUsers();
    }
}
</script>
