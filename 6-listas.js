console.log(`\nTrabalhando com Listas\n`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// Má pratica: Temos três variáveis para um mesmo contexto.

const listaDeDestinos = new Array(`Salvador` , `São Paulo` , `Rio de Janeiro` );

listaDeDestinos.push(`Curitiba`); // adicionando elementos dinamicamente na lista
console.log(`Destinos possíveis: `);
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); // Deleter somente um elemento na posição 2.
// São Paulo
console.log(listaDeDestinos);

console.log(listaDeDestinos[1] , listaDeDestinos[0]);