const router = require("express").Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/jwtconfig');
const bcrypt = require('bcryptjs');

router.post("/register", async (req, res) => {
    try {
      let {
        email,
        password,
        passwordCheck,
        name,
        bio,
        date,
        roles
      } = req.body;
  
      // validate
      // make sure all required fields are inputted
      if (!email || !password || !passwordCheck) {
        return res.status(400).json({ msg: "Not all fields have been entered" });
      }
  
      // check password length
      if (password.length < 5) {
        return res
          .status(400)
          .json({ msg: "Password must be at least 5 characters" });
      }
  
      // check to see if passwords match
      if (password !== passwordCheck) {
        return res.status(400).json({ msg: "Passwords must match" });
      }

      const existingUser = await User.findOne({email: email})
      if (existingUser) {
        return res.status(400).json({ msg: "This email already exists" });
      }
  
      // gen salt
      const salt = await bcrypt.genSalt();
      // hash the password
      const passwordHash = await bcrypt.hash(password, salt)
  

      const newUser = new User({
        email,
        password: passwordHash,
        name,
        bio,
        date,
        roles
      })
  
      const savedUser = await newUser.save()
      res.json(savedUser);
      
    } catch (err) {
      res.status(500).json({err: err.message});
    }
});

  router.post('/login', async (req, res) => {
    try {
      const { email, password} = req.body
  
      // validate
      if (!email || !password) {
        return res.status(400).json({ msg: "Not all fields have been entered" });
      }
  
      // find user in the database
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(400).json({ msg: "No account with this email has been registered" });
      }
  
      // compare pass form the req to see if it matches the hashed password
      const isMatch = await bcrypt.compare(password, user.password);
  
      // If isMatch is false, credentials must be incorrect
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({
        token,
        user: {
          id: user._id,
          name: user.name,
          bio: user.bio,
          email: user.email,
          roles: user.roles

        }
      });
    } catch (err) {
      res.status.json({ error: err.message })
    }
  })

  


module.exports = router;
