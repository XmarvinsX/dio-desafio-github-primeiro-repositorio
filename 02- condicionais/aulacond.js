/*Faça um progrma para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1- Preço do etanol;
 2- Preço da gasolina;
 3- O tipo de combustível que está em seu carro;
 4- Gasto médio de combustível do carro por KM;
 5- Distância em KM da viagem;

Imrpima no console o valor que será gasto para realizar esta viagem.*/

//const precoCombustivel = 5.79;
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKM = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKM / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else { 
    const valorGasto = litrosConsumidos * precoGasolina; 
    console.log(valorGasto.toFixed(2));
}


