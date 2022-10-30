const authRouter = require('./auth');
const User = require('../app/Models/User');

function route(app) {
    app.use('/api/auth', authRouter);
    app.get('/', (req, res) => {
        res.status(200).send('sended');
    });
}

module.exports = route;
