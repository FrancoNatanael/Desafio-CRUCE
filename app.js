const express = require('express');
const path= require('path');


const app = express();
const port = 3030;



// views / public static
app.use(express.static('public'));
app.set('view engine', 'ejs');


// view engine setup
app.set('views', path.resolve(__dirname, './src/views'));



const rutas = require('./src/routes/rutas.js')
const rutasApi = require('./src/routes/api/apiRoutes')



const methodOverride =  require('method-override');  


app.use(express.urlencoded({ extended: false }));
app.use(express.json())




app.use(methodOverride('_method'));


app.listen(port, () => console.log(`Servidor Funcionando! ${port}!`))

app.use('/',rutas)

app.use('/api',rutasApi)