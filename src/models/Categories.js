const { Schema, model } = require('mongoose');

const CategoriesSchema = new Schema({
    category_id: Number,
    title: String,
})

const Categories = model('categories', CategoriesSchema)

module.exports = Categories;