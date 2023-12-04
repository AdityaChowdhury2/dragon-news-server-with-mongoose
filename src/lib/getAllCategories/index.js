const Categories = require("../../models/Categories")

const getAllCategories = async () => {
    const result = await Categories.find()
    return result
}

module.exports = getAllCategories