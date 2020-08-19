<template>
    <div class="jumbotron"> 
      <h1>Submit a Homework</h1>
        <form name="form" @submit.prevent="handleSubmit">
            <div class="form-group">
            <label for="name">Name</label>
            <input
              v-validate="'required|min:3|max:100'"
              type="text"
              class="form-control"
              name="name"
            />
            </div>
            <div class="form-group">
            <label for="title">Title</label>
            <input
              v-validate="'required|min:3|max:100'"
              type="text"
              class="form-control"
              name="title"
            />
            </div>
            <div class="form-group">
            <label for="location">Location</label>
            <input
              v-validate="'required|min:3|max:100'"
              type="text"
              class="form-control"
              name="title"
            />
            </div>
            <div class="form-group">
            <button class="btn btn-primary btn-block">Submit Homework</button>
          </div>
        </form>
    </div>
</template>

<script>
import SubmissionService from '../services/submission.service'
export default {
    
    name: 'Submission',
    components: {

    },
    computed: {
        currentUser() {
            console.log(this.$store.state.auth.user.user)
            console.log(this.$store)
            return this.$store.state.auth.user.user
        }, 
    },
    
     mounted() {
        if(!this.currentUser) {
            this.$router.push('/login')
        }
    },
    methods: {
        handleSubmit() {
            SubmissionService.submitOne()
            .then((response) => {
                console.log(response)
            })
            .catch(err => console.log(err))
        }
    }
}
</script>

<style scoped>
.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
</style>