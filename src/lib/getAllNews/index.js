const News = require("../../models/News")

const getAllNews = async () => {
    const cursor = await News.find();
    return cursor
}

module.exports = getAllNews