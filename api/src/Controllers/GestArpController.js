const GestArp = require('../Models/GestArp');

module.exports = {
    async index(req, res) {
        const gestarps = await GestArp.findAll();
        return res.json(gestarps);
      },


    async store(req, res){
        const { system_unit_id,numero_arp, data_assinatura, system_unit_representante_id, conf_objeto_id, conf_modalidade_id, fornecedor_id, fornecedor_representante_id, status, processo_contratacao_id, objeto_detalhado, data_validade, fornecedor_cad_reserva, fornecedor_cad_reserva_representante, numero_edital, numero_processo_adm} = req.body;
        const gestarp = await GestArp.create({
            system_unit_id,
            numero_arp,
            data_assinatura,
            system_unit_representante_id,
            conf_objeto_id,
            conf_modalidade_id,
            fornecedor_id,
            fornecedor_representante_id,
            status,
            processo_contratacao_id,
            objeto_detalhado,
            data_validade,
            fornecedor_cad_reserva,
            fornecedor_cad_reserva_representante,
            numero_edital,
            numero_processo_adm
        });
        return res.json(gestarp);
    }
}