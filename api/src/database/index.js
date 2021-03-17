const Sequelize = require('sequelize');
const dbConfig = require('../Config/database');

const User = require('../Models/GestArp');
const connection = new Sequelize(dbConfig);
GestArp.init(connection);

// connection.authenticate().then(function(){
//     console.log('conecatado com sucesso');
// }).catch(function(error){
//     console.log("flaha"+error)
// })

module.exports = connection;
