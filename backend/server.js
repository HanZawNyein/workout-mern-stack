require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const WorkOutRoutes = require("./routes/workout");

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})


app.use('/api/workouts/', WorkOutRoutes)



// connect to db
mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Connected to DB & Listening Port :", process.env.PORT)
    })
}).catch((error) => {
    console.log(error)
})