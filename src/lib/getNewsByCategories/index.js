const News = require("../../models/news")

const getNewsByCategory = async (category) => {

    const query = {
        category: { $regex: category, $options: 'i' }
    }
    const result = await News.find(query);
    return result
}

module.exports = getNewsByCategory