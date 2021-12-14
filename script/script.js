let NombredePlanetas = Array ("Tierra", "Marte");
let Distancia = [6,3 ,"67"];
const tamaño = []

let i = 0
while (i <= NombredePlanetas.length -1){
    i = i+1

for (let index = 0; index < NombredePlanetas.length; index++) {
    console.log(NombredePlanetas[index]);
}

for (const key in Object) {
    if (Object.hasOwnProperty.call(Object, key)) {
        const element = Object[key];
    }
}

for(const key in NombredePlanetas){
    console.log(NombredePlanetas[key]);
}

for (const iterator of Object){

}
// recorrer planeta//

for(const planeta of NombredePlanetas)
console.log(planeta)

//operador de igualdad//

for(const key in Distancia){
    if(Distancia[key]== "5"){
        console.log("se encontro la distancia")
    }
    else{
        console.log(" no encontro la distancia") 
    }
}
