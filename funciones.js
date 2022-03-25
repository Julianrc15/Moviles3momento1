let idInmueble = document.getElementById("idInmueble");
let direccionInmueble = document.getElementById("direccionInmueble");
let telefonoInmueble = document.getElementById("telefonoInmueble");
let valorInmueble = document.getElementById("valorInmueble");


let disponibilidad = document.getElementById("disponibilidad");
let disponible = disponibilidad.value;


// console.log(disponible)


let btnEnviar = document.getElementById("btnEnviar");
let btnBuscar = document.getElementById("btnBuscar");



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
    valorInmueble:100000000,
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
valorInmueble:450000000,
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
valorInmueble:500000000,
disponibilidad:false
}]

//crear funcion para enviar inmuebles

const obtenerInmueble= ()=> {
    return new Promise((resolve, reject)=>{
        if(idInmueble.value ==='' || direccionInmueble.value==='' || telefonoInmueble.value==='' || valorInmueble.value<100000000 || valorInmueble.value>5000000){
            alert("Ingrese todos los datos según se sugiere")
        }
        setTimeout(() =>{
            alert("Inmueble enviado correctamente")
            resolve(inmuebles)
        },2000)
    })
}

async function recuperarInmueble () {
    try {
        let inmuebleRecuperado = await obtenerInmueble();
        console.log(inmuebleRecuperado);
    }catch(err){

    }
}






/*****************************************************************/

//BUSCAR POR ID

function buscarInmueble(){

    inmuebles.filter(function(inmueble){
        if (idInmueble===gitidInmueble.value && inmueble.disponibilidad == true ){
            document.getElementById('direccionInmueble').value= inmueble.direccionInmueble;
            document.getElementById('telefonoInmueble').value= inmueble.telefonoInmueble;
            document.getElementById('valorInmueble').value= inmueble.valorInmueble;
            // document.getElementById('disponipilidad').value= inmueble.disponipilidad;
        }else{
         alert('no se encuentra')
        }
    })


}






//listar


function promesaListarInmuebles(){
    return new Promise((resolve, reject) =>{
        console.log ("Cargando los inmuebles")

        setTimeout(() =>{

        let estado =true;
        if(estado){
            resolve(inmuebles)
        }else{
            reject(alert("Eyyy"))
        }


        },3000)
    })
}


promesaListarInmuebles(inmuebles)
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










       
