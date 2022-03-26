let idInmueble = document.getElementById("idInmueble");
let id = idInmueble.value;



let direccionInmueble = document.getElementById("direccionInmueble");
let telefonoInmueble = document.getElementById("telefonoInmueble");
let valorInmueble = document.getElementById("valorInmueble");






let disponibilidad = document.getElementById("disponibilidad");
let disponible = disponibilidad.value;


// console.log(disponible)


let btnEnviar = document.getElementById("btnEnviar");
let btnBuscar = document.getElementById("btnBuscar");
let btnListar= document.getElementById("btnListar");



// eventos del DOM
//al recibir foco - función anonima (también se puede con función flecha)
idInmueble.onfocus=function() {
    mensajeId.innerHTML="*Solo se aceptan Números"
}
//al quitar foco - función flecha (también se puede con función anonima)
idInmueble.onblur=()=>{
    mensajeId.innerHTML=""
}

//ADDlistener

direccionInmueble.addEventListener('focus', function(){
    mensajeDireccion.innerHTML="*La dirección es obligatoria"
})

direccionInmueble.addEventListener('blur', function(){
    mensajeDireccion.innerHTML=""
})

valorInmueble.addEventListener('focus', function(){
    mensajeValor.innerHTML="*El valor del inmueblre debe estar entre 100.000.000 y 500.000.000"
})

valorInmueble.addEventListener('blur', function(){
    mensajeValor.innerHTML=""
})


//arreglo inmuebles
let inmuebles=[{
    idInmueble:1,
    direccionInmueble:"calle 123",
    telefonoInmueble:3173802568,
    valorInmueble:500000000,
    disponibilidad:true},
{
    idInmueble:2,
    direccionInmueble:"calle 134",
    telefonoInmueble:4373802568,
    valorInmueble:243000000,
    disponibilidad:true
},
{
    idInmueble:3,
    direccionInmueble:"calle 234",
    telefonoInmueble:3172342568,
    valorInmueble:200000000,
    disponibilidad:true},
{ 
    idInmueble:4,
    direccionInmueble:"calle 12368",
    telefonoInmueble:3173802568,
    valorInmueble:350000000,
    disponibilidad:false

    },
{
        idInmueble:5,
    direccionInmueble:"calle 555",
    telefonoInmueble:3175552568,
    valorInmueble:255000000,
    disponibilidad:false

},
{
    idInmueble:6,
direccionInmueble:"calle 456",
telefonoInmueble:3173802568,
valorInmueble:500000000,
disponibilidad:true
},
{
    idInmueble:7,
direccionInmueble:"calle 987",
telefonoInmueble:3989587568,
valorInmueble:275000000,
disponibilidad:true

},
{
    idInmueble:8,
direccionInmueble:"calle 3242",
telefonoInmueble:3173802568,
valorInmueble:500000000,
disponibilidad:true
},
{
    idInmueble:9,
direccionInmueble:"calle 689",
telefonoInmueble:3165442568,
valorInmueble:150000000,
disponibilidad:false
},
{
idInmueble:10,
direccionInmueble:"calle 7992",
telefonoInmueble:456802568,
valorInmueble:	295000000,
disponibilidad:false
}]

//crear funcion para enviar inmuebles

const obtenerInmueble = ()=> {
    return new Promise((resolve, reject)=>{
        let idInmueble = document.getElementById("idInmueble");
        let id = idInmueble.value;



        let direccionInmueble = document.getElementById("direccionInmueble");
        let direccion = direccionInmueble.value;
        let telefonoInmueble = document.getElementById("telefonoInmueble");
        let telefono=telefonoInmueble.value;
        let valorcasa = parseInt(document.getElementById("valorInmueble"));
        let valor=valorcasa.value;

        
        if( id==='' || direccion ==='' || telefono ===''){
            alert("dijite id y direccion")
            
        }else{
            setTimeout(()=> {
                resolve(alert("datos enviados correctamente"))
            },1500)
        }

    })
}

async function recuperarInmueble () {
        try {
            let inmuebleRecuperado = await obtenerInmueble();
            console.log(inmuebles);
        }catch(err){
    
        }
    }

btnEnviar.addEventListener("click",function(){
    recuperarInmueble ()
})



/********************************************************************************/

//BUSCAR POR ID

function buscarPorId() {
    return new Promise((resolve, reject) => {

        let idInmueble = document.getElementById("idInmueble");
        let id = idInmueble.value;
        console.log("Buscando Inmueble")

        setTimeout(() => {
            //buscar parametros
            let inmuebleporID = inmuebles.filter(function (inmueble){
                return(inmueble.idInmueble == id && inmueble.disponibilidad == true) })
                console.log(id)
                console.log(inmuebleporID)

                //validar que haya resultados
                if(inmuebleporID.length>0){
                    resolve(inmuebleporID)
                }else{
                    reject (alert("Inmueble no encontrado o no disponible"))
                }
           
        },3000)
    })
}

//ejectuar promesa

btnBuscar.addEventListener("click",function(){
    buscarPorId(inmuebles)
        .then((data)=>{
            for(let i=0; i<data.length; i++){
            document.getElementById('direccionInmueble').value= data[i].direccionInmueble;
            document.getElementById('telefonoInmueble').value= data[i].telefonoInmueble;
            document.getElementById('valorInmueble').value= data[i].valorInmueble;
            // document.getElementById('disponipilidad').value= data[i].disponipilidad;
        }
        })
        .catch((error)=>{
            
        })
})



// Listar inmuebles....................


function promesaListarInmuebles(){
    return new Promise((resolve, reject) =>{
        console.log ("Cargando los inmuebles")
    
        setTimeout(() =>{

        //buscar parametros
        let filtrarlista= inmuebles.filter(function(inmueble){
            return(inmueble.valorInmueble>200000000 && inmueble.valorInmueble<300000000 && inmueble.disponibilidad == true ) })
            console.log(filtrarlista)
        
        //validar que hayan resultados
        if(filtrarlista.length>0){
            resolve(filtrarlista)
        }else{
            reject(
                
                document.getElementById('listadoInmuebles').innerHTML = `<label>No se encontraron propiedades disponibles</label>`)
        }

        },3000)
    })

    
}

//ejecutar la promesa desde el boton, btnListar es el elemento (boton que inicia el proceso), click, luego dentro de funcion llamar la promesa


btnListar.addEventListener("click",function(){promesaListarInmuebles(inmuebles)
    .then((data)=>{
        //Recorrer arreglo de objetos
        let html = "";
        html += `<table class="table table-striped table-hover"><th>Id</th><th>Dirección</th><th>teléfono</th><th>Valor</th>`
        for(let i=0; i<data.length; i++){
            html += `<tr>
                        <td>${data[i].idInmueble}</td>
                        <td>${data[i].direccionInmueble}</td>
                        <td>${data[i].telefonoInmueble}</td>
                        <td>${data[i].valorInmueble}</td>
                    </tr>`;
        }
        html += `</table>`
        document.getElementById('listadoInmuebles').innerHTML = html;
    })
    .catch((error)=>{
        
        document.getElementById('listadoInmuebles').innerHTML = error;
    })

})




