//importation
const express = require('express')


//initialisation
const server = express()

//traitement
server.get('/liste_feedback' , (req , res)=>{
    console.log("test liste feesback")
   // res.end();
   res.status(300).send({'test' : 'ok'})
})


//lancement du serveur 
server.listen(5001,()=>{
    console.log("done test")
})
