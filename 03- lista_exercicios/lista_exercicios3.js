/*3- Elabore um algorítimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou Pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta se,m juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(precoEtiqueta-(precoEtiqueta * 0.1))
} else if (formaDePagamento === 2 ) {
    console.log(precoEtiqueta-(precoEtiqueta * 0.15))
} else if (formaDePagamento === 3) {
    console.log (precoEtiqueta)
} else {console.log (precoEtiqueta+ (precoEtiqueta* 0.1))

}