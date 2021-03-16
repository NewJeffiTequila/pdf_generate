const express = require('express')
const app = express()
const pdf = require('html-pdf');
const port = 3000
const ejs = require('ejs');



var data = [
    {   
        id: 1,
        descricao: "ACIDO MURIÁTICO PARA LIMPEZA, FRASCO COM 1000ML, CAIXA COM 12 UNIDADES", 
        unidade:"CX" , 
        quantidade:5000,
        preco_unidade:1000, 
        preco_total:560.000
    },
    {   
        id: 2,
        descricao: "ÁGUA SANITÁRIA, COMPOSIÇÃO: HIPOCLORITO DE SÓDIO, HIDRÓXIDO DE SÓDIO E ÁGUA. COMPONENTE ATIVO: HIPOCLORETO DE SÓDIO TEOR DE CLORO ATIVO 2,0 A 2,5 P/P COM 1.000ML. , CAIXA COM 12 UNIDADES.", 
        unidade:"CX" , 
        quantidade:5000,
        preco_unidade:1000, 
        preco_total:560.000
    },
    {   
        id: 3,
        descricao: "ÁLCOOL 70, CAIXA COM 12 UNIDADES., FRASCO COM 1.000 ML.", 
        unidade:"CX" , 
        quantidade:5000,
        preco_unidade:1000, 
        preco_total:560.000
    },
    {   
        id: 4,
        descricao: "ÁLCOOL EM GEL, SOLUÇÃO COM 70% DE ÁLCOOL E 30% DE ÁGUA 500ML, (APROPRIADO PARA ASSEPSIA DAS MÃOS CONTRA GRIPE H1N1), CAIXA COM 12 UNIDADES.", 
        unidade:"CX" , 
        quantidade:5000,
        preco_unidade:1000, 
        preco_total:560.000
    },
];

app.get('/', (req, res) => {

    ejs.renderFile('./templates/index.ejs' , {data:data} ,(err, html)=>{
        if (err) {
            return res.status(500).json({message:'error em server'})
        }
        const options = {
            format : 'A4',
        }
        pdf.create(html, options).toFile('./files/teste.pdf' , (error ,response)=>{
            if (!error) {
                return res.json({data})
            }else{
                return res.status(200).json({message:'pdf error!!'})
            }
        });

    })
})

app.listen(port)