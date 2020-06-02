console.log("\nTrabalhando com atribuição de variáveis\n");

const idade = 36; // const -> constante, é uma variável que não pode variar
let primeiroNome = "Carlos"; // let -> permite variação.
const sobreNome = "Thompson";

//console.log(nome + " " + sobreNome);
console.log(primeiroNome, sobreNome);
console.log(`Meu nome é ${primeiroNome} ${sobreNome}`) // com o uso da crase, pode-se fazer interpolação de forma melhor

const nomeCompleto = primeiroNome + " " + sobreNome;
console.log(nomeCompleto);