
<template>
    <div> 
        <br />
        <h2>Hi, {{currentUser.name}} this is your profile:</h2>
        <hr />
        <br>
        <h3>These are open assignments:</h3>
        <AssignmentList />
        <br />
        <hr />
        <br />
        <h3>These are your submissions: </h3>
        <div class="col">
        <SubmissionList />
        </div>
    </div>
</template>

<script>
import SubmissionList from '../components/SubmissionList'
import AssignmentList from '../components/AssignmentList'

export default {
    name: 'Profile',
    components: {
        SubmissionList,
        AssignmentList
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