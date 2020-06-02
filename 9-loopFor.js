console.log(`\nTrabalhando com Loops\n`);


const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

for(let i = 0; i < 3; i++){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
        break;
    }
}

console.log(`Destino: ${destino}`, "\nExiste:", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem!");
}else{
    console.log("Desculpe, tivemos um erro!");
}
