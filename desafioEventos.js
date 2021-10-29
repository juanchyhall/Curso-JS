class Reserva {
    constructor(nombre, apellido, dia, hora) {
        this.nombre = nombre
        this.apellido = apellido
        this.dia = parseInt(dia)
        this.hora = parseInt(hora)
    }
}

let nombreReserva
let apellidoReserva
let diaReserva
let horaReserva
let listadoReservas = []

//Limpiar campos del formulario

function limpiar() {
    document.getElementById("txtNombre").value = ""
    document.getElementById("txtApellido").value = ""
    document.getElementById("txtDia").value = ""
    document.getElementById("txtHora").value = ""
}

//funcion para ir mostrando las reservas en una lista
function mostrarEnLista(reserva) {

    let ul = document.getElementById("ul")
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `
        <br>
        <li>Nombre: ${reserva.nombre}</li>
        <li>Apellido: ${reserva.apellido}</li>
        <li>Dia: ${reserva.dia}</li>
        <li>Hora: ${reserva.hora}hrs</li>
        <br>`

    ul.appendChild(contenedor)

}
//Boton para crear un formulario con los campos para la reserva
const btnNuevaReserva = document.getElementById("nuevaReserva")

btnNuevaReserva.onclick = () => {
    const div = document.getElementById("formularioReserva")
    const formReserva = document.createElement("div")
    formReserva.innerHTML =
        `<br>
    <label>Nombre</label><input id="txtNombre"></input><br>
    <label>Apellido</label><input id="txtApellido"></input><br>
    <label>Dia</label><input id="txtDia"></input><br>
    <label>Hora</label><input id="txtHora"></input><br>
    <button id="btnGuardar">Guardar Reserva</button>`

    div.appendChild(formReserva)

    //boton para guardar la reserva
    const btnGuardar = document.getElementById("btnGuardar")
    btnGuardar.onclick = () => {
        confirmar = confirm("Desea confirmar la reserva?")
        if (confirmar) {
            nombreReserva = document.getElementById("txtNombre").value
            apellidoReserva = document.getElementById("txtApellido").value
            diaReserva = document.getElementById("txtDia").value
            horaReserva = document.getElementById("txtHora").value

            const reserva = new Reserva(nombreReserva, apellidoReserva, diaReserva, horaReserva)

            listadoReservas.push(reserva)

            limpiar()
            mostrarEnLista(reserva)
        }else{
            limpiar()
        }

        console.log(listadoReservas)
    }

}
