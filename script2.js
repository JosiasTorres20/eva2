//validar nombre, debe contener solo letras y no ser vacio
//validar edad: Debe ser mayor o igual a 18 y menor a 100

let datos = [];
let enEdicion = null


function validar(){
    errores = document.getElementById("errores")
    errores.textContent = ""
    elementoNombre = document.getElementById("nombre")
    valorNombre = elementoNombre.value.trim()
   

    elementoEdad = document.getElementById("edad")
    valorEdad = elementoEdad.value.trim()
    errorEdad = document.getElementById("errorEdad")

    let mensajesError = []
    nombreValido  = validarTexto(elementoNombre, valorNombre, mensajesError)
    edadValida  = validarEdad(elementoEdad, valorEdad, mensajesError)


    if (!nombreValido  || !edadValida ){
        errores.textContent = mensajesError.join("\n")
        return;
    }

    let dato = {
        nombre: valorNombre, 
        edad: valorEdad
    }

    if(enEdicion !== null){
        datos[enEdicion] = dato;
        enEdicion = null;
        document.getElementById("btn").textContent = "Enviar"

    }else{
        datos.push(dato);
    }
    document.getElementById("miFormulario").reset()

    cargarDatos()
    

}


function validarTexto(elemento, valor, mensajes) {
    let soloLetras = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/;
    if (valor === "" || !soloLetras.test(valor)) {
        elemento.style.backgroundColor = "red";
        elemento.style.color = "white";
        mensajes.push("El nombre debe contener solo letras y no estar vacio")
        return false;
    } else {
        elemento.style.backgroundColor = "green";
        elemento.style.color = "white";
        mensajes.push("")
        return true;
    }
}
function validarEdad(elemento, valor, mensajes) {
    let edad = parseInt(valor, 10);
    if (isNaN(edad) || edad < 18 || edad >= 100) {
        elemento.style.backgroundColor = "red";
        elemento.style.color = "white";
        mensajes.push( "Ingrese una edad vlida (entre 18 y 99)")
        return false;
    } else {
        elemento.style.backgroundColor = "green";
        elemento.style.color = "white";
        mensajes.push("")
        return true;
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


function actualizar(index) {
    let dato = datos[index];
    document.getElementById("nombre").value = dato.nombre;
    document.getElementById("edad").value = dato.edad;
    enEdicion = index;
    document.getElementById("btn").textContent = "Actualizar";
}

function eliminar(index){
    datos.splice(index, 1)
    cargarDatos()
}