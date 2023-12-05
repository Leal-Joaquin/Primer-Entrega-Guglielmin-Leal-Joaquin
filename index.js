
function saludo() {
    //Nombre y apellido
    let name = prompt("Ingrese su nombre")
    let lastName = prompt("Ingrese su apellido")
    const nameAndLastName = "!Hola, bienvenido" + " " + name + " " + lastName + "¡"
    alert(nameAndLastName)
}
function prestamo(){
    //Prestamo
    const prestamo = prompt("¿Le gustaria sacar la tasa de interes de su prestamo? (si/no)")
if (prestamo == "si") {
    let cantidad = parseInt(prompt("Ingrese el monto del prestamo que desee"))
    let cantidad2 = parseInt(prompt("¿Que tasa de interes posee?"))
    let cantidad3 = parseInt(prompt("¿En cuantos meses desea pagar su prestamo?"))
    const resultado = cantidad * cantidad2 / 100 * cantidad3 + cantidad
    alert("Usted deberia abonar un total de:" + " " + resultado + " " + "en los meses solicitados")
} else {
    console.log("Vuelva pronto")
}
} 

saludo();

//Edad

let edad = parseInt(prompt("Ingrese su edad para entrar a la Web"))
if ((edad => 18) && (edad <= 36)) {
    alert("Podes ingresar a la Web")
} else {
    alert("Estas fuera del rango de edad, lo siento")
}

//Prestamo
prestamo();

const registrarse = alert("Necesitamos que se vuelva a registrar por favor")
saludo();

//MULTIPLICACION
let cuenta = prompt("¿Usted desea realizar una multiplicacion, (si/no)?").toLowerCase()
if (cuenta == "si") {
    console.log("Ahora empezaremos por su multiplicacion")
} else {
    alert("Gracias por visitar la pagina, vuelva pronto")
}

let numeroIngresado = parseInt(prompt("Ingrese un numero del 1-10 que desee saber las tablas"))
for(let i = 0; i <=10; i++ ){
    let resultado = numeroIngresado * i;
    console.log(numeroIngresado + "X" + i + "=" + resultado)
}









