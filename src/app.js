const express = require('express');
const connectDb = require('./db/connectDb');
const applyMiddleware = require('./middlewares/applyMiddlewares');
const port = process.env.PORT || 5000;
const app = express();
const globalErrorHandler = require('./utils/globalErrorHandler');
const { newsRouter, categoriesRouter } = require('./routes');


applyMiddleware(app);


app.use(newsRouter)
app.use(categoriesRouter)

app.get('/health', (req, res) => {
    res.send('Dragon News is running...🐲🐲🐲');
})


app.all('*', (req, res, next) => {
    const error = new Error(`The requested URL is not valid: ${req.url}`);
    next(error);
})

app.use(globalErrorHandler)

const main = async () => {
    await connectDb();
    app.listen(port, () => {
        console.log(`🚀🚀 Server is listening on port ${port}`);
    });
}
main();