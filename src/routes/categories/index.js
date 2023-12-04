const express = require('express');
const allCategories = require('../../controller/categoriesController');
const router = express.Router();

router.get('/categories', allCategories)

module.exports = router;