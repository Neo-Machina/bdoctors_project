<template>
    <div class="container">
        <div> <!-- FIXME creare ciclo for -> v-for="singleProfile in profiles" :key="singleProfile.id" class="col" -->
            <ProfileDetails/> <!-- FIXME aggiungere -> :post="singleProfile" -->
        </div>

        <!-- TODO creare eventuale paginazione -->
    </div>
</template>

<script>
import ProfileDetails from './ProfileDetails.vue';

export default {
    name: 'SingleProfile',
    components: {
        ProfileDetails
    }
}
</script>