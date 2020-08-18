const mongoose = require('mongoose')
const assignmentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    userId : {
        type: String,
        required: true
    },
    description: {
      type: String
    },
        
})


module.exports = Assignment = mongoose.model("assignment", assignmentSchema);