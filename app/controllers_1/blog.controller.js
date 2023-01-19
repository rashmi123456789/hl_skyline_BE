const db = require("../models");
const Blog = db.blog;
const Op = db.Sequelize.Op;

function custom_sort(a, b) {
  return new Date(b.date_time).getTime() - new Date(a.date_time).getTime();
}


// Create and Save a new Blog
exports.create = function (req, res, next) {
    
      // Create a customer
      const blog = {
        title: req.body.title,
        image_path: req.body.image_path,
        alt: req.body.alt,
        editor_text: req.body.editor_text,
        blog_post_url: req.body.blog_post_url,
        date_time: req.body.date_time,
        status: req.body.status,
        meta: req.body.meta
      };
    
      // Save Tutorial in the database
      db.blog.create(blog)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating a blog."
          });
        });
  
};

// Retrieve all Blog from the database.
exports.findAll = function (request, res, next) {
  var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric',minute: 'numeric',second: 'numeric'};
    db.blog.findAll({attributes: ['blog_id', 'title','image_path','alt','editor_text','blog_post_url','date_time','status','meta'],order: [['date_time','DESC']]})
    .then(async data =>{
        await data.forEach(async dataItem => {
            var content = await JSON.parse(dataItem.editor_text).blocks[0].data.text;
            dataItem.editor_text = content;
            dataItem.date_time = (new Date(dataItem.date_time)).toLocaleDateString("en-US", options)
        });
        await res.send(data.sort(custom_sort));
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving blog."
                });
              });
};

// Find a single Blog with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
  
    db.blog.findByPk(id)
      .then(data => {
        data.editor_text = new Buffer( data.editor_text ).toString('utf-8');
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Blog with id=" + id
        });
      });
  };

// Update a Blog by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.blog.update(req.body, {
      where: { blog_id: id }
    })
      .then(
          res.send({
            message: "Blog was updated successfully."
          })
        )
      .catch(err => {
        res.status(500).send({
          message: "Error updating Blog with id=" + id
        });
      });
  };
  
// };

// // Delete a Blog with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.blog.destroy({
      where: { blog_id: id }
    })
      .then(
          res.send({
            message: "Blog was deleted successfully!"
          })
          )
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Blog with id=" + id
        });
      });
  };

// Find posts with given blog post url 
exports.findAllWithGiveUrl=  function (req, res, next) {
    db.blog.findOne({ where: { blog_post_url: req.body.blog_post_url } })
      .then(data => {
        data.editor_text = new Buffer( data.editor_text ).toString('utf-8');
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving blogs."
        });
      });
  };

  // Find posts with given blog post status
exports.findAllWithGivenStatus=  function (req, res, next) {
  var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric',minute: 'numeric',second: 'numeric'};
    db.blog.findAll({ where: { status: req.body.status } })
      .then(async data =>{
        await data.forEach(async dataItem => {

          var content = await JSON.parse(dataItem.editor_text).blocks[0].data.text;
          dataItem.editor_text = content;

            dataItem.date_time = (new Date(dataItem.date_time)).toLocaleDateString("en-US", options)
        });
        await res.send(data.sort(custom_sort));
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving blog."
                });
              });
  };

  exports.findAllBlogPostUrls = function (request, res, next) {
    db.sequelize.query('select blog_post_url from blog', {type: db.sequelize.QueryTypes.SELECT }
  ).then(function(blog_post_urls) {
    res.send(blog_post_urls)
  })
   
  };
  