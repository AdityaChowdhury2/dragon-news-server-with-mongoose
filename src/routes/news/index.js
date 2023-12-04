const express = require('express');
const router = express.Router();
const { allNews, newsById, newsByCategory } = require('../../controller/newsController');

router.get('/all-news', allNews);
router.get('/news/:newsId', newsById);
router.get('/news', newsByCategory)

module.exports = router;