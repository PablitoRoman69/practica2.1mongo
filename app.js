const pablo2 = require ("mongoose") //instanciar 
const fresa = 'mongodb://localhost:27017/Empresa-Jessi-new' //conexxión

pablo2.connect (fresa)

//Promesa para corroborar si funciona
.then(()=>{
    console.log('Si funciona la segunda práctica')
})
.catch((err)=>{
    console.log('No funcionó la segunda práctica')
})

//esquemas para la base de datos es decir atrubitos como el escqueleto de la BD
const esquema_empresa = new pablo2.Schema (
    {
        nombre:{
            type:String
        },
        apepat:{
            type:String
        },
        apemat:{
            type:String
        },
        edad:{
            type:Number
        },
        estatura:{
            type:Number
        },
        cel:{
            type:Number
        },
        sueldo:{
            type:Number
        }
    }
)

//una colección es una tabla practicamente ya que en NoSQL se le llaman tablas...
const modelo_empleados = new pablo2.model ('Empleados', esquema_empresa)

//crear datos
modelo_empleados.create({
    nombre:"Pablo",
    apepat:"Román",
    apemat: "Rodríguez",
    edad:21,
    estatura:1.71,
    cel:4493456702,
    sueldo:1750
})

