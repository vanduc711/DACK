const productsRouter = require('./products');
const authRouter = require('./auth');
const userRouter = require('./user');
const cartsRouter = require('./carts');

function route (app) {

    // app.use('/', siteRouter);
    app.use('/auth', authRouter);
    app.use('/user', userRouter);
    app.use('/products',productsRouter);
    app.use('/carts',cartsRouter);

}

module.exports = route