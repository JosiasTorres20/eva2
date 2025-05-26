//validar nombre, debe contener solo letras y no ser vacio
//validar edad: Debe ser mayor o igual a 18 y menor a 100

let datos = [];
let enEdicion = null


function validar(){
    errores = document.getElementById("errores")
    elementoNombre = document.getElementById("nombre")
    valorNombre = elementoNombre.value.trim()
    errorNombre = document.getElementById("errorNombre")

    elementoEdad = document.getElementById("edad")
    valorEdad = elementoEdad.value.trim()
    errorEdad = document.getElementById("errorEdad")

    validarNombre = validarTexto(elementoNombre, valorNombre, errores)
    validarEdadd = validarEdad(elementoEdad, valorEdad, errores)
    let dato ={
            nombre: valorNombre,
            edad: valorEdad,
        };
    if(validarNombre && validarEdadd){
 
        if(enEdicion !== null){
            datos[enEdicion] = dato;
            enEdicion = null;
            document.getElementById("btn").textContent = "Enviar"

        }
           
    }
    datos.push(dato)
    cargarDatos()
}
function validarTexto(elemento, valor, error){

    if(valor.length < 0 ){
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        error.textContent = "El nombre no debe estar vacio"

        return false
    }
    else{
        elemento.style.backgroundColor = "green"
        elemento.style.color = "white"
        error.textContent = ""

        return true
    }


}

function validarEdad(elemento, valor, error){
    if (valor < 18 || valor > 100){
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        error.textContent = "Ingrese una edad debe ser mayor de 18 y menor de 100 "
        return false
    }else{
        elemento.style.backgroundColor = "green"
        elemento.style.color = "white"
        error.textContent = ""
        return false
    }
}

function cargarDatos(){
    let cuerpoTabla = document.getElementById("cuerpoTabla")
    cuerpoTabla.innerHTML = ""
    datos.forEach((dato, index) =>{
        cuerpoTabla.innerHTML +=  `
            <tr>
                <td>${dato.nombre}</td>
                <td>${dato.edad}</td>
                <td><button type="submit" onclick="actualizar(${index})">Actualizar</button>
                <button type="submit" onclick="eliminar(${index})">Eliminar</button></td>
            </tr>`
    })

}

function editar(index){
    let 
}

function eliminar(index){
    datos.splice(index, 1)
    cargarDatos()
}