Para colocar no GitHub, eu deixaria a explicação mais completa e organizada, incluindo **o que são loops, `for`, `while`, `do...while`, `break`, `continue`, loops aninhados, contadores e complexidade básica**. Isso cria uma documentação que serve como material de estudo.

# Laços de Repetição (Loops) em JavaScript

Os **laços de repetição**, também chamados de **loops**, são estruturas utilizadas para executar um determinado bloco de código várias vezes.

Eles são úteis quando precisamos repetir uma operação sem escrever o mesmo código diversas vezes.

Por exemplo, imagine que precisamos imprimir os números de `1` até `5`. Sem um loop, poderíamos fazer:

```js
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

Com um `for`, podemos fazer a mesma coisa de forma muito mais simples:

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

O loop permite que o computador execute automaticamente as repetições enquanto uma determinada condição for verdadeira.

---

# 1. Estrutura básica de um loop

Existem diferentes tipos de loops em JavaScript. Os principais são:

* `for`
* `while`
* `do...while`
* `for...of`
* `for...in`

Cada um é adequado para determinadas situações.

---

# 2. Loop `for`

O `for` é provavelmente o loop mais utilizado quando sabemos ou conseguimos determinar a quantidade de repetições.

Sua estrutura básica é:

```js
for (inicialização; condição; incremento) {
    // código que será repetido
}
```

Exemplo:

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

Esse código imprime:

```text
0
1
2
3
4
```

## Como o `for` funciona?

Podemos dividir o funcionamento em três partes:

```js
for (let i = 0; i < 5; i++) {
```

### 1. Inicialização

```js
let i = 0;
```

É executada apenas uma vez, antes do início do loop.

Nesse caso, criamos a variável `i` e começamos com o valor `0`.

### 2. Condição

```js
i < 5
```

Antes de cada repetição, essa condição é verificada.

Se for `true`, o código dentro do `for` será executado.

Se for `false`, o loop termina.

### 3. Incremento

```js
i++
```

Depois que o bloco de código é executado, `i` é incrementado em `1`.

Portanto:

```text
i = 0 → executa
i = 1 → executa
i = 2 → executa
i = 3 → executa
i = 4 → executa
i = 5 → condição falsa → termina
```

---

# 3. Contador

Uma utilização muito comum do `for` é como contador.

Exemplo:

```js
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

Resultado:

```text
1
2
3
4
5
6
7
8
9
10
```

Também podemos contar de trás para frente:

```js
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
```

Resultado:

```text
10
9
8
7
6
5
4
3
2
1
```

O operador `--` diminui o valor da variável em `1`.

---

# 4. Incrementos diferentes

Não somos obrigados a aumentar o contador apenas de `1` em `1`.

Podemos utilizar outros valores.

```js
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}
```

Resultado:

```text
0
2
4
6
8
10
12
14
16
18
20
```

Nesse caso:

```js
i += 2
```

é equivalente a:

```js
i = i + 2
```

Também podemos utilizar:

```js
i += 5
```

ou:

```js
i *= 2
```

dependendo do objetivo do algoritmo.

---

# 5. Loop `while`

O `while` também executa um bloco enquanto uma condição for verdadeira.

Sua estrutura é:

```js
while (condição) {
    // código
}
```

Exemplo:

```js
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

Resultado:

```text
0
1
2
3
4
```

A principal diferença em relação ao `for` é que, no `while`, a inicialização e a alteração da variável normalmente ficam fora e dentro do bloco.

No `for`:

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

No `while`:

```js
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

Os dois podem produzir o mesmo resultado.

---

# 6. Cuidado com loops infinitos

É importante garantir que a condição do loop eventualmente se torne falsa.

Por exemplo:

```js
let i = 0;

while (i < 5) {
    console.log(i);
}
```

Esse código possui um problema.

A variável `i` nunca é alterada.

Portanto:

```text
i = 0
i = 0
i = 0
i = 0
...
```

A condição `i < 5` continuará sendo verdadeira para sempre.

Isso cria um **loop infinito**.

Uma forma de corrigir:

```js
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

Agora `i` aumenta até chegar a `5`, fazendo a condição se tornar falsa.

---

# 7. Loop `do...while`

O `do...while` é parecido com o `while`, mas existe uma diferença importante:

> O bloco de código é executado pelo menos uma vez.

Estrutura:

```js
do {
    // código
} while (condição);
```

Exemplo:

```js
let i = 10;

do {
    console.log(i);
    i++;
} while (i < 5);
```

Mesmo que `i < 5` seja falso desde o começo, o código será executado uma vez.

Resultado:

```text
10
```

Isso acontece porque a condição só é verificada **depois** da execução do bloco.

Comparação:

### `while`

```js
let i = 10;

while (i < 5) {
    console.log(i);
}
```

Não executa nenhuma vez.

### `do...while`

```js
let i = 10;

do {
    console.log(i);
} while (i < 5);
```

Executa uma vez.

---

# 8. `for...of`

O `for...of` é utilizado principalmente para percorrer os **valores** de estruturas iteráveis, como arrays e strings.

Exemplo:

```js
const frutas = ["maçã", "banana", "laranja"];

for (const fruta of frutas) {
    console.log(fruta);
}
```

Resultado:

```text
maçã
banana
laranja
```

Nesse caso, a variável `fruta` recebe diretamente cada valor do array.

Podemos pensar assim:

```text
fruta → "maçã"
fruta → "banana"
fruta → "laranja"
```

---

# 9. `for...in`

O `for...in` é utilizado para percorrer as **propriedades/chaves** de um objeto.

Exemplo:

```js
const pessoa = {
    nome: "Ana",
    idade: 21,
    cidade: "Fortaleza"
};

for (const propriedade in pessoa) {
    console.log(propriedade);
}
```

Resultado:

```text
nome
idade
cidade
```

Podemos acessar o valor utilizando a chave:

```js
for (const propriedade in pessoa) {
    console.log(propriedade, pessoa[propriedade]);
}
```

Resultado:

```text
nome Ana
idade 21
cidade Fortaleza
```

De forma simplificada:

```text
for...of → valores
for...in → propriedades/chaves
```

---

# 10. Loops aninhados

Quando colocamos um loop dentro de outro loop, temos um **laço aninhado**.

Exemplo:

```js
for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 2; j++) {
        console.log(i, j);
    }

}
```

O loop externo controla as repetições principais.

Para cada repetição do loop externo, o loop interno executa **todas as suas repetições**.

O funcionamento é:

```text
i = 0
    j = 0
    j = 1

i = 1
    j = 0
    j = 1

i = 2
    j = 0
    j = 1
```

Portanto, o resultado será:

```text
0 0
0 1
1 0
1 1
2 0
2 1
```

Uma forma de entender:

> Para cada repetição do loop externo, o loop interno começa novamente e executa do início ao fim.

---

# 11. Quantidade de repetições em loops aninhados

Considere:

```js
for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 2; j++) {
        console.log(i, j);
    }

}
```

O loop externo executa `3` vezes.

O loop interno executa `2` vezes para cada execução do externo.

Então:

```text
3 × 2 = 6
```

O `console.log()` será executado **6 vezes**.

Se tivermos:

```js
for (let i = 0; i < 10; i++) {

    for (let j = 0; j < 10; j++) {

        console.log(i, j);

    }

}
```

Teremos:

```text
10 × 10 = 100
```

execuções.

Isso é importante para entender o custo de determinados algoritmos.

---

# 12. Três ou mais loops aninhados

Também é possível colocar mais loops dentro de outros:

```js
for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        for (let k = 0; k < 3; k++) {

            console.log(i, j, k);

        }

    }

}
```

Nesse caso:

```text
3 × 3 × 3 = 27
```

O código interno será executado `27` vezes.

Quanto mais loops aninhados existem, maior pode ser o custo de execução do algoritmo.

---

# 13. `break`

O `break` é utilizado para **interromper completamente um loop**.

Exemplo:

```js
for (let i = 0; i < 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}
```

Resultado:

```text
0
1
2
3
4
```

Quando `i` chega a `5`, o `break` é executado e o loop termina imediatamente.

---

# 14. `continue`

O `continue` funciona de maneira diferente.

Ele não encerra o loop.

Ele apenas faz o programa **pular a iteração atual** e continuar com a próxima.

Exemplo:

```js
for (let i = 0; i < 5; i++) {

    if (i === 2) {
        continue;
    }

    console.log(i);
}
```

Resultado:

```text
0
1
3
4
```

Quando `i` é `2`, o `continue` faz o código abaixo dele ser ignorado naquela repetição.

O loop continua normalmente.

### Diferença

```text
break    → encerra o loop
continue → pula apenas a iteração atual
```

---

# 15. Percorrendo arrays com loops

Loops são muito utilizados para percorrer arrays.

Exemplo:

```js
const numeros = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
```

Resultado:

```text
10
20
30
40
50
```

Aqui, `i` representa o **índice** do array.

Os índices são:

```text
Índice:  0   1   2   3   4
Valor:  10  20  30  40  50
```

Por isso usamos:

```js
numeros[i]
```

Quando:

```js
i = 0
```

temos:

```js
numeros[0]
```

Quando:

```js
i = 1
```

temos:

```js
numeros[1]
```

E assim por diante.

---

# 16. `length` em loops

Uma prática muito comum é utilizar `.length` para determinar até onde o loop deve percorrer um array.

```js
const nomes = ["Ana", "Carlos", "João", "Maria"];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}
```

`nomes.length` retorna:

```text
4
```

Como os índices começam em `0`, o último índice é:

```text
3
```

Por isso usamos:

```js
i < nomes.length
```

e não:

```js
i <= nomes.length
```

Se utilizássemos `<=`, tentaríamos acessar:

```js
nomes[4]
```

que não existe.

---

# 17. Loops para procurar valores

Podemos utilizar loops para procurar elementos dentro de arrays.

Exemplo:

```js
const numeros = [10, 25, 30, 45, 50];

const procurado = 30;

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] === procurado) {
        console.log("Número encontrado!");
        break;
    }

}
```

Quando o número `30` é encontrado, o `break` encerra o loop.

---

# 18. Loops para acumular valores

Outra utilização muito comum é somar valores.

```js
const numeros = [10, 20, 30, 40];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(soma);
```

Resultado:

```text
100
```

A variável `soma` funciona como um **acumulador**.

Seu funcionamento é:

```text
soma = 0

soma = 0 + 10 → 10
soma = 10 + 20 → 30
soma = 30 + 30 → 60
soma = 60 + 40 → 100
```

---

# 19. Loop para calcular uma média

Podemos combinar um acumulador com um contador.

```js
const notas = [7, 8, 9, 6];

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

const media = soma / notas.length;

console.log(media);
```

Resultado:

```text
7.5
```

---

# 20. Loops e condições

Loops frequentemente são utilizados junto com `if`.

Exemplo:

```js
for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }

}
```

Nesse caso, o loop percorre os números de `1` até `10`.

O `if` verifica quais são pares.

Resultado:

```text
2
4
6
8
10
```

O operador `%` retorna o resto da divisão.

Por exemplo:

```js
10 % 2
```

resulta em:

```text
0
```

Por isso podemos verificar se um número é par usando:

```js
numero % 2 === 0
```

---

# 21. Loop infinito com `for`

Também podemos criar loops infinitos propositalmente.

Por exemplo:

```js
for (;;) {
    console.log("Executando...");
}
```

A ausência da condição faz com que o loop não tenha uma condição de parada.

Outro exemplo:

```js
while (true) {
    console.log("Executando...");
}
```

Nesse caso, a condição é sempre verdadeira.

Normalmente, um loop infinito precisa de alguma forma de interrupção, como:

```js
while (true) {

    // código

    if (condicao) {
        break;
    }
}
```

---

# 22. `for` ou `while`?

Não existe uma regra absoluta, mas podemos utilizar uma ideia simples:

### Use `for` quando:

Sabemos a quantidade de repetições ou estamos percorrendo uma estrutura.

```js
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

### Use `while` quando:

A repetição depende principalmente de uma condição que pode mudar durante a execução.

```js
while (senha !== senhaCorreta) {
    // pedir senha novamente
}
```

### Use `do...while` quando:

Precisamos garantir que o código seja executado pelo menos uma vez.

```js
do {
    // pedir uma informação
} while (informacaoInvalida);
```

---

# 23. Loops aninhados com arrays

Os loops aninhados são especialmente úteis para trabalhar com estruturas que possuem mais de uma dimensão.

Por exemplo, uma matriz:

```js
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

Podemos percorrê-la utilizando dois loops:

```js
for (let i = 0; i < matriz.length; i++) {

    for (let j = 0; j < matriz[i].length; j++) {

        console.log(matriz[i][j]);

    }

}
```

O primeiro loop percorre as linhas.

O segundo percorre os elementos de cada linha.

Podemos visualizar:

```text
i = 0 → [1, 2, 3]
          ↑  ↑  ↑
          j  j  j

i = 1 → [4, 5, 6]
          ↑  ↑  ↑

i = 2 → [7, 8, 9]
          ↑  ↑  ↑
```

Esse conceito é muito importante para trabalhar com **matrizes, tabelas, jogos e algoritmos**.

---

# 24. Cuidado com a condição de parada

Um dos erros mais comuns ao trabalhar com loops é criar uma condição incorreta.

Por exemplo:

```js
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
```

Esse código executa:

```text
0 até 10
```

Ou seja, `11` vezes.

Já:

```js
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

executa:

```text
0 até 9
```

Ou seja, `10` vezes.

Essa diferença entre `<` e `<=` é muito importante.

---

# 25. Complexidade de loops

Loops também são importantes quando estudamos a **complexidade de algoritmos**.

Um loop simples como:

```js
for (let i = 0; i < n; i++) {
    console.log(i);
}
```

executa aproximadamente `n` vezes.

Sua complexidade é:

```text
O(n)
```

Agora considere:

```js
for (let i = 0; i < n; i++) {

    for (let j = 0; j < n; j++) {

        console.log(i, j);

    }

}
```

Temos aproximadamente:

```text
n × n = n²
```

execuções.

Sua complexidade é:

```text
O(n²)
```

Por isso loops aninhados podem tornar um algoritmo significativamente mais lento quando a quantidade de dados aumenta.

---

# 26. Resumo

Os principais conceitos relacionados aos loops são:

| Estrutura     | Utilização                                                      |
| ------------- | --------------------------------------------------------------- |
| `for`         | Repetições controladas por inicialização, condição e incremento |
| `while`       | Repetição enquanto uma condição for verdadeira                  |
| `do...while`  | Executa pelo menos uma vez antes de verificar a condição        |
| `for...of`    | Percorre valores de estruturas iteráveis                        |
| `for...in`    | Percorre propriedades/chaves de objetos                         |
| `break`       | Interrompe o loop                                               |
| `continue`    | Pula a iteração atual                                           |
| Loop aninhado | Loop dentro de outro loop                                       |
| `.length`     | Obtém o tamanho de arrays e strings                             |

---

# 27. Ideia principal

Um loop pode ser entendido como uma instrução para o computador:

> "Repita este bloco de código enquanto determinada regra for satisfeita."

Por exemplo:

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

Pode ser interpretado como:

```text
Comece com i = 0.

Enquanto i for menor que 5:
    execute o código.

Depois:
    aumente i em 1.

Quando i chegar a 5:
    pare.
```

E, quando temos um loop dentro de outro:

```js
for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 2; j++) {

        // código

    }

}
```

A ideia passa a ser:

```text
Para cada repetição de i:
    execute todas as repetições de j.
```

Essa lógica é fundamental para programação, pois aparece em algoritmos de busca, ordenação, matrizes, processamento de dados, jogos e diversas outras aplicações.

