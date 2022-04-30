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
    create: (req,res) => {
      
       
        let product = {
            id:productModel.nextId(),
            name:req.body.name,
            price:req.body.price,
            discount:0,
            stock:1,
            image:req.body.image
        }

        

        productModel.create(product)

        return res.json({
            data:product,
            status:200
        })



    }
    
}

module.exports = controllerPrincipal;