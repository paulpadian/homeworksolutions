const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// set up express

const app = express();
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/homeworksolutions", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.connection
  .once("open", () => console.log("Successfully connected to MongoDB"))
  .on("error", (error) => {
    console.warn("Warning", error);
  });


app.get('/', (req, res) => {
  res.json("a slash page")
})

app.use('/api', require('./router/user')) 
app.use('/submission', require('./router/submission')) 
app.use('/assignment', require('./router/assignment')) 

app.listen(PORT, () => {
  console.log(`Server on PORT: ${PORT}`)
})