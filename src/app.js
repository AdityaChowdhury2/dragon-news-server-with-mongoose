const express = require('express');
const connectDb = require('./db/connectDb');
const applyMiddleware = require('./middlewares/applyMiddlewares');
const port = process.env.PORT || 5000;
const app = express();
const newsRouter = require('./routes/news');
const globalErrorHandler = require('./utils/globalErrorHandler');


applyMiddleware(app);


app.use(newsRouter)

app.get('/health', (req, res) => {
    res.send('Dragon News is running...🐲🐲🐲');
})


app.all('*', (req, res, next) => {
    console.log(req.url);
    const error = new Error(`The requested URL is not valid: ${req.url}`);
    next(error);
})

app.use(globalErrorHandler)

const main = async () => {
    await connectDb();
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });
}
main();