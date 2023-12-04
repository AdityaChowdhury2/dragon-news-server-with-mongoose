const News = require("../../models/news");


const getNewsById = async (filter) => {
    const news = await News.findOne(filter);
    return news;
}

module.exports = getNewsById