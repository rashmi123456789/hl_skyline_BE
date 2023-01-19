module.exports = app => {
    const blog = require("../controllers/blog.controller.js");
    const auth = require("../middleware/auth");
    var router = require("express").Router();
  
    // Create a new Blog
    router.post("/",auth, blog.create);
  
    // Retrieve all Blogs
    router.get("/", blog.findAll);
  
    // Retrieve all Blogs with a specific name
    router.post("/url", blog.findAllWithGiveUrl);

    router.post("/status", blog.findAllWithGivenStatus);
  
    // Retrieve a single Blog with id
    router.get("/:id", blog.findOne);
  
    // // Update a Blog with id
    router.put("/:id",auth, blog.update);
  
    // Delete a blog with id
    router.delete("/:id",auth, blog.delete);

    router.get("/url/get-blog-post-urls",blog.findAllBlogPostUrls);
  
    app.use('/api/blog', router);
  };