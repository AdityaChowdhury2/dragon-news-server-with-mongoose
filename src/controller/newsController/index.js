const getAllNews = require('../../lib/getAllNews');
const getNewsByCategory = require('../../lib/getNewsByCategories');
const getNewsById = require('../../lib/getNewsById');


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

const newsByCategory = async (req, res, next) => {
    try {
        const category = req.query.category;
        if (category === 'all-news') {
            const result = await getAllNews()
            return res.send(result)
        }
        else {
            const result = await getNewsByCategory(category);
            return res.send(result)
        }
    } catch (error) {
        next(error);
    }
}


module.exports = { allNews, newsById, newsByCategory }