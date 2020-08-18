const router = require("express").Router();
const auth = require('../middleware/jwtconfig');
const Assignment = require('../models/assignment');


router.post("/new-assignment", auth, async (req, res) => {
    try {
      const { name, title, description } = req.body;
  
      // validation
      if (!title) {
        return res.status(400).json({ msg: "Not all fields have been entered" });
      }
  
      const newAssignment = new Assignment({
        name,
        title,
        description,
        userId: req.user
      });
      const savedAssignment = await newAssignment.save();
      res.json(savedAssignment);
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  })

module.exports = router

  