const express = require('express');
const app = express();
const port = 3030;
const routes = require('./routes')
// require('./database');

app.use(express.json());
app.use(routes);
app.listen(port, () => console.log(`Example app listening on port port!`));


// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('startbid', 'root', '',{
//     host:"localhost",
//     dialect:'mysql',
//     define: {
//         timestamps: false
//     },
// })




// const Arp = sequelize.define('gest_arp' , {
//     processo_contratacao_id:{
//         type:Sequelize.INTEGER
//     },
//     system_unit_id:{
//         type:Sequelize.INTEGER
//     },
//     system_unit_representante_id:{
//         type:Sequelize.INTEGER
//     },
//     numero_arp:{
//         type:Sequelize.INTEGER
//     },
//     conf_objeto_id:{
//         type:Sequelize.INTEGER
//     },
    
//     objeto_detalhado:{
//         type:Sequelize.STRING
//     },
    
//     fornecedor_id:{
//         type:Sequelize.INTEGER
//     },
    
//     fornecedor_representante_id:{
//         type:Sequelize.INTEGER
//     },
    
//     data_assinatura:{
//         type:Sequelize.DATE
//     },
//     data_validade:{
//         type:Sequelize.DATE
//     },
//     fornecedor_cad_reserva:{
//         type:Sequelize.STRING
//     },
//     fornecedor_cad_reserva_representante:{
//         type:Sequelize.STRING
//     },
//     conf_modalidade_id:{
//         type:Sequelize.INTEGER
//     },
//     numero_edital:{
//         type:Sequelize.INTEGER
//     },
//     numero_processo_adm:{
//         type:Sequelize.INTEGER
//     },
//     status:{
//         type:Sequelize.INTEGER
//     }
    
// })

// Arp.create({
//     system_unit_id:1,
//     numero_arp:"312321321",
//     data_assinatura:"2021-01-09",
//     system_unit_representante_id:1,
//     conf_objeto_id:1,
//     conf_modalidade_id:1,
//     fornecedor_id:1,
//     fornecedor_representante_id:1,
//     status:1
// });
