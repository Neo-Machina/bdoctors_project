<template>  
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <!-- <img src="..." class="img-fluid rounded-start" alt="..."> -->
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Nome e cognome</h5> <!-- {{user.name}}  -->
                    <h6 class="card-text">Specializzazione</h6> <!-- {{user.specialization}} -->
                    <div>Email</div> <!--{{user.email}}-->
                    <p>{{truncateText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, perspiciatis! Recusandae iure et ipsa similique architecto ut at, repellat voluptates qui sapiente dicta odit porro ratione ex. Nobis, quos dicta?')}}</p> <!--{{user.curriculum}} -->
                    
                    <!-- TODO aggiungere router link con button per visualizzare profilo completo -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileDetails',
    /* props: {
        user: Object
    },*/
    methods: {
        truncateText(text) {
            if(text.length > 100) {
                return text.slice(0, 100) + '...'
            }

            return text;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>