
module.exports = (server) => {
    const feedbackController = require('./controllers/feedbacks.controller')

    //traitement
    server.get('/feedbacks', feedbackController.liste)
    server.post('/feedbacks', feedbackController.add)
    server.delete('/feedbacks/:id', feedbackController.delete)
    server.put('/feedbacks/:id',feedbackController.update)

}