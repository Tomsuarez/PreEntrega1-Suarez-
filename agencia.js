pais = prompt("Cuál es tu país de nacimiento?");
let fecha = parseInt(prompt("Bienvenido seas estimado viajante de "+pais+" por favor decime en que año naciste"));
let currentTime = new Date()
let edades = currentTime.getFullYear()
menu = "";
let sumaNumeros = edades - fecha;

PaqueteA= "Europa";
PaqueteB= "America";
PaqueteC= "Africa";

const CostoPaqueteA = 300000;
const CostoPaqueteB = 200000;
const CostoPaqueteC = 400000;

function ivaA(peso){
    let impuesto = ((CostoPaqueteA * .21)+CostoPaqueteA);
    return impuesto;
}

function ivaB(peso){
    let impuesto = ((CostoPaqueteB * .21)+CostoPaqueteB);
    return impuesto;
}

function ivaC(peso){
    let impuesto = ((CostoPaqueteC * .21)+CostoPaqueteC);
    return impuesto;
}

if (sumaNumeros >=18){
    console.log("Wow para tener "+sumaNumeros+" años se ve genial");
    alert("Ya eres mayor de edad")
    let menu = prompt("Gracias viajante "+pais+" elige por favor que tipo de aventura prefieres.\n 1. Aventurero\n 2. Romantico\n 3. Con amigos\n Presiona e para abandonar tus sueños.");
    
    while (menu !="e"){
    switch(menu){
    case"1":
    alert("Tu necesitas "+PaqueteA+". Tiene un costo de $ "+CostoPaqueteA);
    let compraA = prompt("Escribe C para comprar "+PaqueteA);
    if (compraA ==="C"){
        let totalA = ivaA(CostoPaqueteA);
        alert("Precio total es de $"+totalA);
        }
    else{
    compraA=alert("Si lo compras? Escribe C")
    }
    break;
    case"2":
    alert("Tu necesitas "+PaqueteB+". Tiene un costo de $ "+CostoPaqueteB);
    let compraB = prompt("Escribe C para comprar "+PaqueteB);
    if (compraB ==="C"){
        let totalB = ivaB(CostoPaqueteB);
        alert("Precio total es de $"+totalB);
    }else{
    compraB=alert("Si lo compras? Escribe C")
    } break;
    case"3":
    alert("Tu necesitas "+PaqueteC+". Tiene un costo de $ "+CostoPaqueteC);
    let compraC = prompt("Escribe C para comprar "+PaqueteC);
    if (compraC ==="C"){
        let totalC = ivaC(CostoPaqueteC);
        alert("Precio total es de $"+totalC);
    }else{
    compraB=alert("Si lo compras? Escribe C")
    } break;
    default:
    alert("Número inválido. elige por favor el tipo de aventura que prefieres.\n 1. Aventurero\n 2. Romantico\n 3. Con amigos\n Presiona e para abandonar tus sueños.");
    break;
    }
    menu = prompt("Gracias viajante de "+pais+" elige por favor el tipo de aventura que prefieres.\n 1. Aventurero\n 2. Romantico\n 3. Con amigos\n Presiona e para abandonar tus sueños.");
    }
    
    }else{
    alert("No eres mayor de edad. Bye");
    
    }
