<template>
    <div class="container">
        <h1>Single Profile</h1>

        <!-- FORM MESSAGGIO -->
        <div class="my-4">
            <div v-if='success_message' class="alert alert-success" role="alert">
                Grazie per averci contattato!
            </div>

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
        <div>
            <div v-if='success_review' class="alert alert-success" role="alert">
                Grazie per averci recensito e dato un voto!
            </div>

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
                    <div class="average_vote"> 
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
        getUserProfile() {
            axios.get('/api/users/' + this.$route.params.user_slug, {})
            .then((response) => {
                this.user = response.data.results;
            })
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
        scrollTopPage() {
            window.scrollTo(0, 0);
        },
        scrollToReview() {
            window.scrollTo(0, 628);
        }
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
        this.getUserProfile();
    }
}
</script>

<style lang="scss" scoped>
.star_icon {
    color: grey;
    cursor: pointer;
}

.active {
    color: gold;
}
</style>