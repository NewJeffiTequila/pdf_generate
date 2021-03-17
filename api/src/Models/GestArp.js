const { Model, DataTypes,  Sequelize} = require('sequelize');
const sequelize =  new Sequelize('startbid', 'root' , '', {
  host:"localhost",
  dialect:"mysql",
  define:{
    timestamps:false
  }
})

const GestArp = sequelize.define('gest_arp' ,{
            processo_contratacao_id:{
                type:Sequelize.INTEGER,
                allowNull: true
            },
            system_unit_id:{
                type:Sequelize.INTEGER,
                allowNull: false
            },
            system_unit_representante_id:{
                type:Sequelize.INTEGER,
                allowNull: false
            },
            numero_arp:{
                type:Sequelize.STRING,
                allowNull: true
            },
            conf_objeto_id:{
                type:Sequelize.INTEGER,
                allowNull: false
            },
            objeto_detalhado:{
                type:Sequelize.STRING,
                allowNull: true
            },
            fornecedor_id:{
                type:Sequelize.INTEGER,
                allowNull: false
            },
            data_assinatura:{
                type:Sequelize.DATE,
                allowNull: true
            },
            fornecedor_representante_id:{
                type:Sequelize.INTEGER,
                allowNull: false
            },
            data_validade:{
                type:Sequelize.DATE,
                allowNull: true
            },
            fornecedor_cad_reserva:{
                type:Sequelize.STRING,
                allowNull: true
            },
            fornecedor_cad_reserva_representante:{
                type:Sequelize.STRING,
                allowNull: true
            },
            conf_modalidade_id:{
                type:Sequelize.INTEGER,
                allowNull: false
            },
            numero_edital:{
                type:Sequelize.STRING,
                allowNull: true
            },
            numero_processo_adm:{
                type:Sequelize.STRING,
                allowNull: true
            },
            status:{
                type:Sequelize.INTEGER,
                allowNull: false
            },
})













// const { Model, DataTypes,  Sequelize} = require('sequelize');

// class GestArp extends Model {
//   static init(sequelize) {
//     super.init({
//         processo_contratacao_id:{
//             type:Sequelize.INTEGER,
//             allowNull: true
//         }
//         // system_unit_id:{
//         //     type:Sequelize.INTEGER,
//         //     allowNull: false
//         // },
//         // system_unit_representante_id:{
//         //     type:Sequelize.INTEGER,
//         //     allowNull: false
//         // },
//         // numero_arp:{
//         //     type:Sequelize.STRING,
//         //     allowNull: true
//         // },
//         // conf_objeto_id:{
//         //     type:Sequelize.INTEGER,
//         //     allowNull: false
//         // },
//         // objeto_detalhado:{
//         //     type:Sequelize.STRING,
//         //     allowNull: true
//         // },
//         // fornecedor_id:{
//         //     type:Sequelize.INTEGER,
//         //     allowNull: false
//         // },
//         // data_assinatura:{
//         //     type:Sequelize.DATE,
//         //     allowNull: true
//         // },
//         // fornecedor_representante_id:{
//         //     type:Sequelize.INTEGER,
//         //     allowNull: false
//         // },
//         // data_validade:{
//         //     type:Sequelize.DATE,
//         //     allowNull: true
//         // },
//         // fornecedor_cad_reserva:{
//         //     type:Sequelize.STRING,
//         //     allowNull: true
//         // },
//         // fornecedor_cad_reserva_representante:{
//         //     type:Sequelize.STRING,
//         //     allowNull: true
//         // },
//         // conf_modalidade_id:{
//         //     type:Sequelize.INTEGER,
//         //     allowNull: false
//         // },
//         // numero_edital:{
//         //     type:Sequelize.STRING,
//         //     allowNull: true
//         // },
//         // numero_processo_adm:{
//         //     type:Sequelize.STRING,
//         //     allowNull: true
//         // },
//         // status:{
//         //     type:Sequelize.INTEGER,
//         //     allowNull: false
//         // },
//     }, {
//       sequelize
//     })
//   }
// }

module.exports = GestArp;