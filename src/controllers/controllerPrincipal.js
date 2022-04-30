const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const jsonDb = require('./json')
const productModel = jsonDb('products')


let controllerPrincipal = {

    index: (req,res) =>{
        let products = productModel.all();
        res.render('index',{products})
    },
    list: (req,res) =>{

        fetch('http://localhost:3030/api')
        .then(response => response.json())
        .then(products => {
            let productos = products.products;
            res.render('list',{productos})
        }
            
           
            )
        .catch(e => res.send(e))
       
        
    }
}


module.exports = controllerPrincipal;