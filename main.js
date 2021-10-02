/*Primera Entrega

const nombre = prompt("Bienvenido! Por favor, ingrese su nombre")

let valorTomate = 5

let valorCompraTomates = valorTomate * parseInt(prompt("Ingrese la cantidad de tomates que desee comprar"))

alert("Hola "+nombre+"! El monto total por tu compra es de $"+valorCompraTomates)
*/

/*Segunda entrega*/

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
    alert("Su reserva se ha realizado con exito para el "+fechaReserva+
            "\n A nombre de "+nombreCompleto+
            "\n Muchas gracias!")
 }else{      
     alert("Usted no es mayor de edad! No puede realizar la reserva.")
    }




