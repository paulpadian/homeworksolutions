<template >
  <div>
    <div class="card" v-for="(Assignment, index) in Assignments" :key="index">
      <h5>Name: {{Assignment.title}}</h5>
      <h5>Teacher: {{Assignment.name}}</h5>
      <h5>Assignment Description: {{Assignment.description}}</h5>
      <br />
      <router-link :to="{name: 'submission', params: {id: Assignment._id}}">
        <button class="btn btn-primary">Create Submission</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Assignmentervice from "../services/assignment.service";
export default {
  name: "AssignmentList",
  data() {
    return {
      Assignments: [],
    };
  },
  methods: {
    retrieveAssignment() {
      Assignmentervice.getAll()
        .then((response) => {
          this.Assignments = response;
          console.log(response);
          console.log(this.Assignment, "hi");
          console.log(this.$store);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveAssignment();
  },
};
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