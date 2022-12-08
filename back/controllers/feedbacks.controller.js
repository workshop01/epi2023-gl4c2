const FeedbackModel = require("../models/Feedback.model")

exports.liste = async (req, res) => {
    console.log("test liste feesback")
    /*  FeedbackModel.find()
     .then(data=>{
         console.log(data)
     }).catch(err=>{
         console.log(err)
     }) */
    /*  FeedbackModel.find( (err , data)=>{
         if(err){
             res.status(505).send({err : err})
         }
         console.log(data)
     }) */

    const data = await FeedbackModel.find()
    console.log(data)

    // res.end();
    res.status(300).send(data)
}


exports.add = async (req, res) => {

    console.log(req.body)
    const feed = new FeedbackModel(req.body)
    await feed.save();

    // FeedbackModel.insertMany([req.body])

    res.send({ 'saved': 'success' })
}

exports.delete = (req, res) => {

    FeedbackModel.deleteOne({ _id: req.params.id })
        .then(result => {
            res.send(result);
        }).catch(err => {
            res.status(505).send(err)
        })
    console.log(req.params.id)

}

exports.update = (req, res) => {
    FeedbackModel.updateOne({ _id: req.params.id }, req.body)
        .then(result => {
            res.send(result)
        })
}