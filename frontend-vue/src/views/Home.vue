<template>
  <div class="container">
    <header class="jumbotron">
      <h1>Homework-Solutions</h1>
      <h4>Bridging Students and Teachers</h4>
      <br />
      <img class="imgContainer" src="https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80" />
    </header>
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'Home',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getPublicContent()
    .then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>
<style scoped>
.imgContainer {
  width: 100%;
  height: auto;
}
</style>