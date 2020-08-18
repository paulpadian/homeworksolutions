const router = require("express").Router();
const auth = require('../middleware/jwtconfig');
const Submission = require('../models/submission');
  
  router.post("/submit/:id", auth, async (req, res) => {
    try {
      const { name, title, location, content} = req.body;
  
      // validation
      if (!location) {
        return res.status(400).json({ msg: "Not all fields have been entered" });
      }
  
      const newSubmission = new Submission({
        name,
        title,
        location,
        content,
        assignment: req.params.id,
        userId: req.user
      });
      const savedSubmission= await newSubmission.save();
      res.json(savedSubmission);
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  })
  router.put('/:id', auth, async (req, res) => {
    try {
      const submission = await Submission.updateOne(
        { _id: req.params.id }, 
        { $push: { comments : req.body } }
    );
      res.json(submission);
    } catch (err) {
      console.log(err)
      res.status(400).json({ msg: 'Could not update the submission'})
    }
    
  })
  module.exports = router