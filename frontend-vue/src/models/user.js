export default class User {
    constructor( name , email, password, bio, roles ) {
      this.email = email;
      this.password = password;
      this.name = name;
      this.bio = bio;
      this.roles = roles;
    }
  }