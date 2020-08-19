<template >
<div>
    <div class="card" v-for="(submission, index) in submissions" :key="index">
    <h5>Title: {{ submission.title }}</h5>
    <h5>Name: {{submission.name}}</h5>
    <h5>Comments: 
        <ul v-for="(comment, index) in submission.comments" :key="index"><li>Grade: {{comment.grade}}</li><li> {{comment.name}}'s feedback: {{comment.content}}</li></ul>
    </h5>
    <h5>Location URL: <a :to="submission.location" :href="submission.location">{{submission.location}}</a></h5>
    </div> 
</div>
</template>

<script>
import SubmissionService from '../services/submission.service'
export default {
    name: 'SubmissionList',
    data() {
        return {
        submissions: [],
        }
    },
    methods: {
        retrieveSubmissions() {
            SubmissionService.getAll()
            .then(response => {
                this.submissions = response
                console.log(response)
                console.log(this.submissions, "hi")
                console.log(this.$store)
            })
            .catch(e => {
            console.log(e);
            })
        }
    },
    mounted () {
        this.retrieveSubmissions()
    }
}
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

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