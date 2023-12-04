const getAllCategories = require("../../lib/getAllCategories")

const allCategories = async (req, res, next) => {
    try {
        const result = await getAllCategories();
        res.send(result);
    } catch (error) {
        next(error);
    }
}

module.exports = allCategories;