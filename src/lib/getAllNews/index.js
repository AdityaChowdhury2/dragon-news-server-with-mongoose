const News = require("../../models/news");


const getAllNews = async () => {
    const cursor = await News.find();
    return cursor
}

module.exports = getAllNews