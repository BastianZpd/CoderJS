const servicios = []

function listarServicios(){
    for (let i=0; i < servicios.length; i++){
        console.log(servicios[i])
    }
}

function agregarServicio(){
    let nuevoServicio = prompt("Ingresa un nuevo servicio:")
    let resultado = servicios.includes(nuevoServicio)
        if (resultado === false){
            servicios.push(nuevoServicio)
            console.table(servicios)
        }else{
            console.warn("El servicio ingresado ya existe en el listado")
        }
}

function sacarServicio(){
    let elemento = prompt("Ingresa el servicio que deseas quitar:")
    let indice = servicios.indexOf(elemento)
    if(indice > -1){
        let resultado = servicios.splice(indice, 1)
        console.log(resultado)
        console.table(servicios)
    }else{
        console.warn("No se ha encontrado el servicio:", elemento)
    }
}