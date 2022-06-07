const Sequelize = require('sequelize')
const connection = new Sequelize('platperguntas','root',/* password here */'',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection