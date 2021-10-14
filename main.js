/*-----------------------------Primer Entrega-------------------------------------------

const nombre = prompt("Bienvenido! Por favor, ingrese su nombre")

let valorTomate = 5

let valorCompraTomates = valorTomate * parseInt(prompt("Ingrese la cantidad de tomates que desee comprar"))

alert("Hola "+nombre+"! El monto total por tu compra es de $"+valorCompraTomates)
*/

/*-----------------------------Segunda Entrega-------------------------------------------

alert("Complete sus datos para una reserva")
let nombreCompleto = prompt("Ingrese su nombre y apellido").toUpperCase()
let edad = parseInt(prompt("Ingrese su edad"))
let validarEdad = (edad>=18)
let fechaReserva = ''
let dia = 0
let mes = 0
if(validarEdad){
    alert("Ingrese la fecha que quiera realizar la reserva")

     dia = parseInt(prompt("Dia: "))

    if(!Number.isInteger(dia)){
        alert("El dia debe ser numerico")
        dia = parseInt(prompt("Dia: "))
    }else if(dia>=31 || dia<=1){
        alert("Debe ingresar un dia del calendario")
        dia = parseInt(prompt("Dia: "))
    }
    

     mes = parseInt(prompt("Mes: "))

    if(!Number.isInteger(mes)){
        alert("El mes debe ser numerico")
         mes= parseInt(prompt("mes: "))
    }else if(mes<=1 || mes>=12){
        alert("Debe ingresar un mes del calendario")
        mes = parseInt(prompt("mes: "))
    }

    fechaReserva = dia+"-"+mes
  {alert("Su reserva se ha realizado con exito para el "+fechaReserva+
            "\n A nombre de "+nombreCompleto+
            "\n Muchas gracias!")
 }else{      
     alert("Usted no es mayor de edad! No puede realizar la reserva.")
    }}
*/


/*-----------------------------Tercera Entrega-------------------------------------------
alert("Ingrese sus datos para una nueva reserva")
for (let numeroReserva = 1; numeroReserva <= 20; numeroReserva++) {
    let nombreCompleto = prompt("Ingrese su nombre y apellido").toUpperCase()
    let edad = parseInt(prompt("Ingrese su edad"))
    let validarEdad = (edad >= 18)

    if (validarEdad) {
        alert("Ingrese la fecha que quiera realizar la reserva")

        let dia = parseInt(prompt("Dia: "))

        if (!Number.isInteger(dia)) {
            alert("El dia debe ser numerico")
            dia = parseInt(prompt("Dia: "))
        } else if (dia > 31 || dia < 1) {
            alert("Debe ingresar un dia del calendario")
            dia = parseInt(prompt("Dia: "))
        }

        let mes = parseInt(prompt("Mes: "))

        if (!Number.isInteger(mes)) {
            alert("El mes debe ser numerico")
            mes = parseInt(prompt("mes: "))
        } else if (mes < 1 || mes > 12) {
            alert("Debe ingresar un mes del calendario")
            mes = parseInt(prompt("mes: "))
        }

        if (numeroReserva > 20) {
            alert("No quedan mas reservas! Disculpe las molestias")
            break;
        }

        let fechaReserva = dia + "-" + mes
        alert("Muchas Gracias! Su numero de su reserva es el: " + numeroReserva + " .Para el dia: " + fechaReserva +
            "\n A nombre de " + nombreCompleto +
            "\n Muchas gracias!")

        confirmarReserva = confirm("Desea realizar otra reserva?")
        if (confirmarReserva == false)
            break;

    } else {
        alert("Las reservas son solo para mayores de edad")
        break;
    }
}*/

/*-----------------------------Cuarta Entrega-------------------------------------------
                    Desafío: Simulador interactivo


let nombre
let horario 
let edad 

function solicitarNombre(){
    nombre = prompt("Ingrese su nombre")
}

function solicitarEdad() {
    edad = parseInt(prompt("Ingrese su edad"))
}

function validarEdad() {
    let mayorDeEdad = (edad>=18)
    if(mayorDeEdad == false){
        return false
    }else{
        return true
    }
}

function registrarHorario() {
    horario = parseInt(prompt("Ingrese el horario. Ej: 18"))
}

function mostrarReserva() {
    
    let reserva = "Su reserva se ha registrado a nombre de: "+nombre
    +".\nHorario de reserva:  "+ horario+"hrs"
    return reserva
}
alert("Bienvenido a AlgoBar")
do{
    alert("Ingrese los datos para una realizar una reserva")
    solicitarEdad()
    if(validarEdad()== true){
        solicitarNombre()
        registrarHorario();
        alert(mostrarReserva());
    }else{
        alert("Lo sentimos! Las reservas son solo para mayores de edad")
    }
    
    nuevaReserva = confirm("Desea Realizar una nueva reserva?")

}while(nuevaReserva)*/




/*-------------------------    Funciones relacionadas -----------------*/
let nombre
let horario
let edad
const precioPromo = 500
const costoReserva = 300

function solicitarNombre() {
    nombre = prompt("Ingrese su nombre")
}

function solicitarEdad() {
    edad = parseInt(prompt("Ingrese su edad"))
}

function validarEdad() {
    let mayorDeEdad = (edad >= 18)
    if (mayorDeEdad == false) {
        return false
    } else {
        return true
    }
}

function registrarHorario() {
    horario = parseInt(prompt("Ingrese el horario. Ej: 18"))
}

function reservaNocturna() {
    if (horario >= 20) {
        confirmarReserva = confirm("A partir de las 20hrs, las reservas tienen un costo anticipado de $" + costoReserva + ".\n Desea continuar con la reserva?")
        if (confirmarReserva) {
            return true
        } else {
            return false
        }
    }
}

function confirmarPromo() {
    confirmar = confirm("Tenemos promos de tragos por un precio de $" + precioPromo + "\nDesea comprar alguna promo?")
    if (confirmar) {
        return true
    } else {
        return false
    }
}


function calcularPromo(cantidad) {

    const montoTotal = precioPromo * cantidad
    return montoTotal
}

function calcularMonto(cantidad) {
    const montoTotal = costoReserva + calcularPromo(cantidad)
    return montoTotal
}

function mostrarReserva() {


    let reserva = "Su reserva se ha registrado a nombre de: " + nombre
        + ".\nHorario de reserva:  " + horario + "hrs"
    let mensajeMonto = "\nSu total a pagar es de $"

    if (reservaNocturna()) {
        if (confirmarPromo()) {
            cantidad = parseInt(prompt("Ingrese la cantidad de tragos que desea comprar"))
            return reserva + mensajeMonto + calcularMonto(cantidad)
        } else {
            return reserva + mensajeMonto + costoReserva
        }
    } else {
        if (confirmarPromo()) {
            cantidad = parseInt(prompt("Ingrese la cantidad de tragos que desea comprar"))
            return reserva + mensajeMonto + calcularPromo(cantidad)
        } else {

            return reserva
        }
    }


}

alert("Bienvenido a AlgoBar")
do {
    alert("Ingrese los datos para una realizar una reserva")
    solicitarEdad()
    if (validarEdad() == true) {
        solicitarNombre()
        registrarHorario();
        alert(mostrarReserva())

        nuevaReserva = confirm("Desea Realizar una nueva reserva?")
    } else {
        alert("Lo sentimos! Las reservas son solo para mayores de edad")
    }
} while (nuevaReserva)