const { Schema, model } = require("mongoose");


const NewsSchema = new Schema({
    category_id: {
        type: Number,
        required: true,
    },
    category: String,
    rating:
    {
        number: Number,
        badge: String,
    },
    total_view: Number,
    title: String,
    author: {
        name: String,
        published_date: String,
        img: String,
    },
    thumbnail_url: String,
    image_url: String,
    details: String,
})

const News = model('News', NewsSchema)
module.exports = News;