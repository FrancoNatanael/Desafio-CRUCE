const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const jsonDb = require('./json')
const productModel = jsonDb('products')


let controllerPrincipal = {

    home: (req,res) =>{
        let products = productModel.all();
        res.render('home',{products})
    },
    index: (req,res) =>{
        fetch('http://localhost:3030/api')
        .then(response => response.json())
        .then(products => {
            let productos = products.products;
            res.render('index',{productos})
        }
            
           
            )
        .catch(e => res.send(e))
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
       
        
    },
    form:(req,res) =>{
        res.render('form')
    }
}


module.exports = controllerPrincipal;