const UserController = require('../controllers/Controller');
module.exports = (app) => {
   app.post('/cadastra/evento', UserController.cadastra_evento);
   app.get('/lista/eventos', UserController.lista_eventos);
   app.get('/lista/eventos/:id', UserController.getById);
}