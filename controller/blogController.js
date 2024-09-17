const blogModel = require("../model/personalBlogModel");
const fs = require('fs');

const defultController = (req, res) => {

    res.render("index");

}

const addBlogController = async (req, res) => {

    
    var { editId } = req.body;

    if (!editId) {
        const blogData = new blogModel({
            title: req.body.title,
            content: req.body.content,
           
        })
        console.log('Blog Data', blogData);

        await blogData.save();
    } else {

        await blogModel.findByIdAndUpdate(editId, {
            title: req.body.title,
            content: req.body.content,
           
        })
        console.log("Edit Done..");
    }
    res.redirect("/views");
}

const viewBlogController = async (req, res) => {
    const BlogCard = await blogModel.find({});
    console.log(BlogCard);
    
    res.render('views', { BlogCard });
    console.log("viwes Done...");
}

const deleteBlogController = async (req, res) => {
    const id = req.params.id;

    let deleteBlog = await blogModel.findOne({ _id: id });

    console.log('deleteBlog', deleteBlog);

    await blogModel.deleteOne({ _id: id });
    res.redirect("/views");
    console.log("delete done....");
}

const editBlogController = async (req, res) => {
    const id = req.params.id;

    const singleBLog = await blogModel.findById(id)

    res.render("edit", { singleBLog });

}


module.exports = { defultController, addBlogController, viewBlogController, deleteBlogController, editBlogController }