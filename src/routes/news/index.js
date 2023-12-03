const express = require('express');
const router = express.Router();
const { allNews, newsById } = require('../../controller/newsController');

router.get('/news', allNews);
router.get('/news/:newsId', newsById)

module.exports = router;