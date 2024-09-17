
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const blogController = require('../controller/blogController')


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get('/', blogController.defultController);
router.post('/blogForm', blogController.addBlogController);
router.get('/views', blogController.viewBlogController);
router.get("/deleteBlog/:id", blogController.deleteBlogController);
router.get("/editBlog/:id",blogController.editBlogController);



module.exports = router;