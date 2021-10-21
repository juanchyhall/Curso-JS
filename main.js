
class Reserva {
    constructor(nombre, apellido, dia, hora) {
        this.nombre = nombre
        this.apellido = apellido
        this.dia = dia
        this.hora = hora
    }
}
let edad
let nombreReserva
let apellidoReserva
let diaReserva
let horaReserva
let listadoReservas = []
alert("Ingrese los datos para una nueva reserva")

function validarEdad() {
    while (edad == null || !Number.isInteger(edad)) {
        edad = parseInt(prompt("Debe ingresar un edad para continuar"))
    }
}

function validarNombre() {
    while (nombreReserva == "" || nombreReserva == " ") {
        nombreReserva = prompt("Debe ingresar un nombre para continuar").toUpperCase()
    }
}
function validadApellido() {
    while (apellidoReserva == "" || apellidoReserva == " ")
        apellidoReserva = prompt("Debe ingresar su apellido ").toUpperCase()
}

function validarDiaReserva() {
    while (!Number.isInteger(diaReserva) || diaReserva == null) {
        diaReserva = parseInt(prompt("Debe ingresar un numero!\nIngrese un dia para la reserva"))
    }
    while (diaReserva < 1 || diaReserva > 31) {
        diaReserva = parseInt(prompt("Las reservas deben ser un ddia habil del mes!\nIngrese un dia para la reserva"))
    }
}

function validarHoraReserva() {
    while (!Number.isInteger(horaReserva) || horaReserva == null) {
        horaReserva = parseInt(prompt("Debe ingresar un numero!\nIngrese un dia para la reserva"))
    }
    while (horaReserva < 14 || horaReserva > 24) {
        horaReserva = parseInt(prompt("Solo se pueden realizar reservas a partir de las 14:00hrs\nHasta las 24:hrs\nIngrese un dia para la reserva"))
    }

}


function consultarDatosReserva() {

    edad = parseInt(prompt("Ingrese su edad"))
    validarEdad()
    mayorDeEdad = (edad >= 18)

    while (!Number.isInteger(edad) || edad == null) {
        edad = parseInt(prompt("Ingrese un numero valido para la edad"))
    }
    if (mayorDeEdad) {
        nombreReserva = prompt("Ingrese el nombre al que va a estar la reserva").toUpperCase()
        validarNombre()
        apellidoReserva = prompt("Ingrese el apellido").toUpperCase()
        validadApellido()
        diaReserva = parseInt(prompt("Ingrese el dia en que quiere realizar la reserva"))
        validarDiaReserva()
        horaReserva = parseInt(prompt("Ingrese la hora en que quiere realizar la reserva"))
        validarHoraReserva()

    } else {
        alert("Lo sentimos! Las reservas son solo para mayores de edad(18+)")

        return false
    }
}


function crearReserva() {

    confirmarReserva = confirm("Desea confirmar su reserva?")
    if (confirmarReserva) {
        const reserva = new Reserva(nombreReserva, apellidoReserva, diaReserva, horaReserva)
        listadoReservas.push(reserva)

        alert("Su reserva se ha realizado a nombre de: " + reserva.nombre + ", " + reserva.apellido +
            "\nPara el dia: " + reserva.dia +
            "\nHora: " + reserva.hora + ":00")
        
    } 
}

function listarReservas() {
    console.log("Listado de reservas")
    for (let i = 0; i < listadoReservas.length; i++) {

        console.log(listadoReservas[i])

    }
}

function ejecutarReserva() {
    do {
        consultarDatosReserva()
        crearReserva()
        nuevaReserva = confirm("Desea realizar otra reserva?")

    } while (nuevaReserva)
}

function ordenarPorNombre() {
    const listadoOrdenado = listadoReservas.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1
        } else {
            return -1
        }
    })
    console.log("Listado por nombre de la A a la Z")
    console.log(listadoOrdenado)
}
ejecutarReserva()
listarReservas()
ordenarPorNombre()

