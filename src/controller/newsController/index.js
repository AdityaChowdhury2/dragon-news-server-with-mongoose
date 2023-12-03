const getAllNews = require('../../lib/getAllNews');
const getNewsById = require('../../lib/getNewsById');
const News = require('../../models/News')


const allNews = async (req, res, next) => {
    try {
        const result = await getAllNews();
        res.send(result);
    } catch (error) {
        next(error);
    }
}

const newsById = async (req, res, next) => {
    try {
        const id = req.params.newsId;
        const query = { _id: id };
        const result = await getNewsById(query);
        res.send(result);
    } catch (error) {
        next(error);
    }
}


module.exports = { allNews, newsById }