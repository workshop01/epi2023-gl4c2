//importation
const express = require('express')
const mongoose = require('mongoose');
const FeedbackModel = require('./models/Feedback.model');

//initialisation
const server = express()
server.use(express.json())
//connexion à la base de données
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/feedback_database'  ,()=>{
    console.log('Mongodb connected')
})




require('./apis')(server)

//lancement du serveur 
server.listen(5001,()=>{
    console.log("done test")
})
