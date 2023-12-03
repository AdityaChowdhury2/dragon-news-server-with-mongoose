const News = require("../../models/News")

const getNewsById = async (filter) => {
    const news = await News.findOne(filter);
    return news;
}

module.exports = getNewsById