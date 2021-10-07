/*Primera Entrega

const nombre = prompt("Bienvenido! Por favor, ingrese su nombre")

let valorTomate = 5

let valorCompraTomates = valorTomate * parseInt(prompt("Ingrese la cantidad de tomates que desee comprar"))

alert("Hola "+nombre+"! El monto total por tu compra es de $"+valorCompraTomates)
*/

/*Segunda entrega

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


//Tercera Entrega
//Aplique la misma logica de la segunda entrega pero esta vez con un numero de reserva envuelto en un for para ir contando y que pueda volver a generarse otra

alert("Complete sus datos para una reserva")
let reserva=""
    for (let numeroReserva = 1; numeroReserva <= 20; numeroReserva++) {   
        let nombreCompleto = prompt("Ingrese su nombre y apellido").toUpperCase()
        let edad = parseInt(prompt("Ingrese su edad"))
        let validarEdad = (edad>=18)
        if(validarEdad){
        alert("Ingrese la fecha que quiera realizar la reserva")
        
        let dia = parseInt(prompt("Dia: "))
        
        if(!Number.isInteger(dia)){
            alert("El dia debe ser numerico")
            dia = parseInt(prompt("Dia: "))
        }else if(dia>31 || dia<1){
            alert("Debe ingresar un dia del calendario")
            dia = parseInt(prompt("Dia: "))
        }
        
        
        let mes = parseInt(prompt("Mes: "))
        
        if(!Number.isInteger(mes)){
            alert("El mes debe ser numerico")
            mes= parseInt(prompt("mes: "))
        }else if(mes<1 || mes>12){
            alert("Debe ingresar un mes del calendario")
            mes = parseInt(prompt("mes: "))
        }
        
        
        let fechaReserva = dia+"-"+mes
        reserva="Muchas Gracias! El numero de su reserva es el: "+numeroReserva+" .Para el dia: "+fechaReserva+
        "\n A nombre de "+nombreCompleto+
        "\n Muchas gracias!"
        alert(reserva)
        if(numeroReserva == 20){
            alert("No quedan mas reservas! Disculpe las molestias")
        }
        
    }else{      
        alert("Usted no es mayor de edad! No puede realizar la reserva.")
        break
       }
    }
 
