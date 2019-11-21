const users = require('../app/controllers/users');

module.exports = (app) => {
    app.get('/users',users.getAll);
    app.put('/users/:id',users.create);
    app.post('/users', users.update);
    app.delete('/users/:id',  users.remove);
}; 