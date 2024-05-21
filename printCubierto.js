

const input = require("prompt-sync")()

function ImprimirCubiertos (nombre){
    var Cuchillo = "Cuchillo"
    var Tenedor = "Tenedor"
    var Cuchara = "Cuchara"
    if(nombre==Cuchillo){
        console.log("___    ")
        console.log("l  l   ")
        console.log("l  l   ")
        console.log("l  l   ")
        console.log("l  l   ")
        console.log("l__l   ")
        console.log("   l   ")
        console.log("   l   ")
        console.log("   l   ")
        console.log("   l   ")
        console.log("   l   ")
        console.log("   l   ")
        console.log("   l   ")
        console.log("   l   ")
        console.log("   l   ")
            } else if (nombre ==Tenedor){
        console.log("l  l  l")
        console.log("l  l  l")
        console.log("l  l  l")
        console.log("l  l  l")
        console.log("l__l__l")
        console.log("   l  ")
        console.log("   l  ")
        console.log("   l   ")
        console.log("   l   ")
        console.log("   l   ")
        console.log("   l   ")
        console.log("   l   ")
        console.log("   l   ")
        console.log("   l   ")
            } else if (nombre == Cuchara){
        console.log("_______")      
        console.log("l     l")
        console.log("l     l")
        console.log("l     l")
        console.log("l     l")
        console.log("l_____l")
        console.log("   l  ")
        console.log("   l  ")
        console.log("   l   ")
        console.log("   l   ")
        console.log("   l   ")
        console.log("   l   ")
        console.log("   l   ")
        console.log("   l   ")
        console.log("   l   ")                
            } 

let cubiertos = ["Cuchara", "Tenedor", "Cuchillo", "Cuchistola"]
}

var nombre = prompt("Qué cubierto quieres")