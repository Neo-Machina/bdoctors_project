<template>
    <div class="container">
        <h2 class="mb-4">{{user.name}}</h2>

        <!-- user profile and reviews -->
        <div class="row">

            <div class="col-5">
                <div class="d-flex">
                    <div class="card mb-5" style="width: 30rem;">
                        <img :src="user.photo" class="card-img-top" alt="..."> 
                        <div class="card-body">
                            <h5 class="card-title">{{user.name}}</h5>
                            <div v-if="user.specializations.length > 0">
                                <strong>Specializzazione in</strong>
                                <span v-for="specialization in user.specializations" :key="specialization.id" class="badge bg-info text-light mr-1 mb-3">{{specialization.name}}</span>
                            </div>
                            <div class="mb-3"><strong>Contatta il medico al seguente indirizzo:</strong> {{user.email}}</div>
                            <p><strong class="d-block">Curriculum Vitae</strong>{{user.curriculum}}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- message and reviews -->
            <div class="col-7 d-flex">
                <div v-for="(review, index) in user.reviews" :key="index">
                    <!-- <div><strong>Autore</strong>: {{ review.author }}</div>
                    <div><strong>Voto</strong>: {{ review.vote }}</div>
                    <div><strong>Recensione</strong>: {{ review.content }}</div>
                    <hr> -->

                    <div class="review-card card text-dark bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header">Recensione</div>
                        <div class="card-body">
                            <h5 class="card-title">{{ review.author }}</h5>
                            <div><strong>Voto</strong>: <i v-for="n in stars(review.vote)" :key="n" class="fas fa-star active"></i></div>
                            
                            <p class="card-text">{{ review.content }}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- <ul>
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
            </div> -->
        </div>

        <!-- message and revies forms -->
        <div class="row">
            <!-- FORM MESSAGGIO -->
            <div class="col">
                
                <div v-if='success_message' class="alert alert-success" role="alert">
                    Grazie per averci contattato!
                </div>

                <h4>Scrivi un messaggio al medico</h4>

                <form @submit.prevent="sendMessage()">
                    <div class="mb-3">
                        <label for="author-message" class="form-label">Nome e cognome *</label>
                        <input v-model="authorMessage" type="text" class="form-control" id="author-message">

                        <div v-if="errors.author">
                            <div v-for="(error, index) in errors.name" :key="index" class="alert alert-danger" role="alert">
                                {{ error }}
                            </div>  
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="user-mail" class="form-label">Email *</label>
                        <input v-model="userEmail" type="email" class="form-control" id="user-mail">

                        <div v-if="errors.email">
                            <div v-for="(error, index) in errors.email" :key="index" class="alert alert-danger" role="alert">
                                {{ error }}
                            </div>  
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="content-message" class="form-label">Messaggio *</label>
                        <textarea v-model="contentMessage" class="form-control" id="content-message" rows="8"></textarea>

                        <div v-if="errors.content">
                            <div v-for="(error, index) in errors.message" :key="index" class="alert alert-danger" role="alert">
                                {{ error }}
                            </div>  
                        </div>
                    </div>
                    
                    <input type="submit" value="Invia Messaggio" class="btn btn-primary" :disabled="sending">
                </form>
            </div>

            <!-- FORM RECENSIONE -->
            <div class="col">
                <div v-if='success_review' class="alert alert-success" role="alert">
                    Grazie per averci recensito e dato un voto!
                </div>

                <h4>Scrivi una recensione</h4>

                <form @submit.prevent="sendReview()">
                    <div class="mb-3">
                        <label for="author-review" class="form-label">Nome e cognome *</label>
                        <input v-model="authorReview" type="text" class="form-control" id="author-review">

                        <div v-if="errors.author">
                            <div v-for="(error, index) in errors.name" :key="index" class="alert alert-danger" role="alert">
                                {{ error }}
                            </div>  
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="content-review" class="form-label">Recensione *</label>
                        <textarea v-model="contentReview" class="form-control" id="content-review" rows="8"></textarea>

                        <div v-if="errors.review">
                            <div v-for="(error, index) in errors.message" :key="index" class="alert alert-danger" role="alert">
                                {{ error }}
                            </div>  
                        </div>
                    </div>

                    <div class="mb-3">
                        <!-- <label for="user-vote" class="form-label">Punteggio generale *</label>
                        <input v-model="userVote" type="text" class="form-control" id="user-vote"> -->
                        <div class="average_vote" style="cursor:pointer"> 
                            <span class="bold_text">Vote</span>: 
                            <span class="star_icon " :class="{ 'active': star <= voteReview }" v-for="(star,index) in 5" :key="index" @click.prevent="voteReview = star">
                            <!-- <span v-for="(star,index) in 5" :key="index"> -->
                                &#9733;
                            </span>
                        </div>

                        <div>
                            {{ voteReview }}
                        </div>

                        <div v-if="errors.vote">
                            <div v-for="(error, index) in errors.name" :key="index" class="alert alert-danger" role="alert">
                                {{ error }}
                            </div>  
                        </div>
                    </div>
                    <input type="submit" value="Invia Recensione" class="btn btn-primary" :disabled="sending">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleProfile',
    data()  {
        return {
            user: {},
            authorMessage: '',
            userEmail: '',
            contentMessage: '',
            authorReview: '',
            contentReview: '',
            voteReview: 1,
            success_message: false, 
            success_review: false, 
            errors: {},
            sending: false
        };
    },
    methods: {
        getSingleProfile() {
            axios.get('/api/users/' + this.$route.params.user_slug)
            .then((response) => {
                this.user = response.data.results;
            });
        },
        sendMessage() {
            this.sending = true;

            axios.post('/api/messages', {
                author: this.authorMessage,
                email: this.userEmail,
                content: this.contentMessage,
                user_id: this.user.id
            })
            .then((response) => {
                this.scrollTopPage();

                if(response.data.success) {
                    this.success_message = true;
                    this.authorMessage = '';
                    this.userEmail = '';
                    this.contentMessage = '';
                    this.errors = {};
                } else {
                    this.errors = response.data.errors;
                }

                this.sending = false;
            })
        },
        sendReview() {
            this.sending = true;

            axios.post('/api/reviews', {
                author: this.authorReview,
                content: this.contentReview,
                vote: this.voteReview,
                user_id: this.user.id
            })
            .then((response) => {
                this.scrollToReview();

                if(response.data.success) {
                    this.success_review = true;
                    this.authorReview = '';
                    this.contentReview = '';
                    this.voteReview = 1;
                    this.errors = {};
                } else {
                    this.errors = response.data.errors;
                }

                this.sending = false;
            })
        },
        stars(original_vote) {
            return Math.round(original_vote);
        },
        scrollTopPage() {
            window.scrollTo(0, 0);
        },
        scrollToReview() {
            window.scrollTo(0, 628);
        },
        // transformVote() {
        //     return Math.round((this.reviews.vote * 5) / 10);
        // },
        // getStarsStyle(starNumber) {
        //     if(starNumber <= this.transformVote()) {
        //         return 'fa-solid fa-star';
        //     } else {
        //         return 'fa-regular fa-star'
        //     }
        // }
    },
    mounted() {
        this.getSingleProfile();
    }
}
</script>

<style lang="scss" scoped>
.col-7 {
    flex-wrap: wrap;

    .review-card {
        margin-inline: 0.9rem;
    }
}
// .star_icon {
//     color: grey;
//     cursor: pointer;
// }

.active {
    color: gold;
}


</style>