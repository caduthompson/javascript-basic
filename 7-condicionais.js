console.log(`\nTrabalhando com condicionais\n`);


const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log(`Destinos possíveis: `);
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log(`Comprador maior de idade`);
//     listaDeDestinos.splice(1, 1); // Remover um item 
// } else if (estaAcompanhada) {
//     console.log(`Comprador está acompanhado`);
//     listaDeDestinos.splice(1, 1); // Remover um item 

// } else {
//     console.log(`Não é maior de idade e não posso vender`);
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log(`Comprador é maior de idade ou está acompanhado`);
    listaDeDestinos.splice(1, 1); // Remover um item 
}else {
    console.log(`Não é maior de idade e não posso vender`);
}

console.log("\nEmbarque: ");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem!");
}else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);
