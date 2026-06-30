
function gerarMatriz (entrada, nLinhas) {
    let i;
    let j;
    let dados;
    let matriz;
    let indice;
    let nColunas;
    
    dados = entrada.split(" ");
    nColunas = parseInt(dados.length / nLinhas);
    matriz = [];
    indice = 0;
    
    for (i = 0; i < nLinhas; i++) {
        matriz[i] = [];
        for (j = 0; j < nColunas; j++) {
            matriz[i][j] = parseFloat(dados[indice]);
            indice++;
        }
    }
    return matriz;
}

let linhaEscolhida;
let outraAlternativa;
let operacao;
let entrada;
let nLinhas;
let matriz;
let media;
let soma;
let j;

linhaEscolhida = parseInt(prompt("Linha escolhida (digite 0, 1 ou 2): "));
operacao = prompt("Digite sua operação (S para Soma ou M para Média): ");
entrada = prompt("Digite as 12 entradas separadas por um único espaço: "); 

nLinhas = 3; 
matriz = gerarMatriz(entrada, nLinhas);
soma = 0;


for (j = 0; j < matriz[linhaEscolhida].length; j++) {
    soma = soma + matriz[linhaEscolhida][j];
}

if (operacao == "S") {
    console.log("Resultado da Soma: " + soma.toFixed(1));
} else {
    media = soma / matriz[linhaEscolhida].length;
    console.log("Resultado da Média: " + media.toFixed(1)); 
} 

outraAlternativa = prompt("Você quer saber a outra operação? (digite sim ou não): ");

if (outraAlternativa == "sim") {
    if (operacao == "S") {
        media = soma / matriz[linhaEscolhida].length;
        console.log("A outra operação (Média) é: " + media.toFixed(1));
    } else if (operacao == "M") {
        console.log("A outra operação (Soma) é: " + soma.toFixed(1));
    }  
} else {
    console.log("Programa encerrado. Até mais!");
}
