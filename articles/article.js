const Sequelize = require("sequelize");
const connection = require("../datebase/datebase");
const Category = require("../categories/Category");

const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug:{
        type: Sequelize.STRING,
        allowNull: false
    },body:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article);      // N Artigos => 1 categoria
Article.belongsTo(Category);    // 1 Artigo => 1 categoria


module.exports = Article;