const jsonDb = require('../json')
const productModel = jsonDb('productsApi')

let controllerPrincipal = {

    list: (req,res) =>{
        
        let products = productModel.all();

        let respuesta = {
            meta :{
                status:200,
                url:'/api'
            },
            products

        }

        res.json(respuesta);

    },
    create:(req,res) =>{
        
    },
    delete:(req,res) =>{

    },
    
}

module.exports = controllerPrincipal;