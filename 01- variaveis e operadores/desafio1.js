/*Faça um programa para calcular o valor de uma viagem .

Você terá 3 variáveis . Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por km;
3 - Distância em KM da viagem; */

const precoCombustivel = 5.10;
const gastoMedioKmporL = 13;
const distanciaPercorridaKM = 100;

const LConsumidos = distanciaPercorridaKM / gastoMedioKmporL;
const valorgasto = LConsumidos * precoCombustivel;

console.log(valorgasto .toFixed(2));
