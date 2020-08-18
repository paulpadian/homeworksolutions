const mongoose = require('mongoose');
const assignment = require('./assignment');

const commentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    grade: {
      type: String,
      required: true
    },
    content: {
      type: String
    }    
})

const submissionSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    assignment: {
        type: String,
    },
    userId : {
        type: String,
        required: true
    },
    content: {
        type: String,
    },
    comments : [commentSchema]    
})

module.exports = Submission = mongoose.model("submission", submissionSchema);