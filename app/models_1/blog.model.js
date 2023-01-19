module.exports = (sequelize, Sequelize) => {
    const Blog = sequelize.define("blog", {
      blog_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING
      },
      image_path: {
        type: Sequelize.STRING
      },
      alt: {
        type: Sequelize.STRING
      },
      editor_text: {
          type: Sequelize.STRING
      },
      blog_post_url: {
          type: Sequelize.STRING
      },
      date_time: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING
    },
    meta: {
      type: Sequelize.STRING
  }
    });
  
    return Blog;
  };