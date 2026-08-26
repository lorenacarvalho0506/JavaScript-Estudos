# Loops em JavaScript

Loops são estruturas usadas para **repetir um bloco de código** várias vezes.

Eles são úteis quando precisamos executar a mesma ação várias vezes sem precisar escrever o código repetidamente.

Exemplo:

```js
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

Podemos fazer a mesma coisa usando um `for`:

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

---

## `for`

O `for` é usado principalmente quando sabemos quantas vezes queremos repetir alguma coisa.

Estrutura:

```js
for (inicialização; condição; incremento) {
    // código
}
```

Exemplo:

```js
for (let i = 0; i < 5; i++) {
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

### Como funciona?

```js
for (let i = 0; i < 5; i++) {
```

Temos 3 partes:

```text
let i = 0   → inicialização
i < 5       → condição
i++         → incremento
```

A execução acontece nessa ordem:

```text
1. cria i com valor 0
2. verifica se i < 5
3. executa o código
4. aumenta i em 1
5. verifica a condição novamente
6. repete
```

Quando `i` chegar a `5`, a condição:

```js
i < 5
```

será falsa e o loop termina.

---

## Contador

O `for` também pode ser usado simplesmente para contar.

### Contando de 1 até 10:

```js
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

### Contando de 10 até 1:

```js
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
```

### Pulando de 2 em 2:

```js
for (let i = 0; i <= 10; i += 2) {
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
```

---

# `while`

O `while` também serve para repetir código, mas sua estrutura é diferente.

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

Nesse caso, precisamos tomar cuidado para alterar a variável que controla a condição.

Se fizermos:

```js
let i = 0;

while (i < 5) {
    console.log(i);
}
```

O valor de `i` nunca muda.

Então:

```text
i = 0
i = 0
i = 0
i = 0
...
```

O loop nunca termina.

Isso é chamado de **loop infinito**.

---

# `do...while`

O `do...while` é parecido com o `while`, mas existe uma diferença:

> O código é executado pelo menos uma vez.

Exemplo:

```js
let i = 10;

do {
    console.log(i);
    i++;
} while (i < 5);
```

Mesmo que `i < 5` seja falso, o `console.log()` será executado uma vez.

Resultado:

```text
10
```

No `while`, a condição é verificada antes:

```js
while (condição) {
    // código
}
```

No `do...while`, a condição é verificada depois:

```js
do {
    // código
} while (condição);
```

---

# `for...of`

O `for...of` é muito usado para percorrer os **valores** de um array.

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

A variável `fruta` recebe cada valor do array.

```text
fruta → "maçã"
fruta → "banana"
fruta → "laranja"
```

---

# `for...in`

O `for...in` é usado principalmente para percorrer as **propriedades** de um objeto.

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

Podemos acessar o valor usando:

```js
pessoa[propriedade]
```

Exemplo:

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

De forma simples:

```text
for...of → valores
for...in → propriedades/chaves
```

---

# Loops aninhados

Quando temos um `for` dentro de outro `for`, isso é chamado de **laço aninhado** (ou loop dentro de loop).

O laço principal controla quantas vezes o bloco geral será repetido.

Já o laço interno executa todas as suas repetições para cada repetição do laço externo.

Exemplo:

```js
for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 2; j++) {
        console.log(i, j);
    }

}
```

Funcionamento:

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

Resultado:

```text
0 0
0 1
1 0
1 1
2 0
2 1
```

Ou seja:

> Para cada repetição do laço externo, o laço interno executa do começo ao fim.

Nesse exemplo:

```text
3 repetições do i
×
2 repetições do j
=
6 execuções
```

---

# Loops aninhados com 3 níveis

Também podemos colocar um loop dentro de outro loop dentro de outro:

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

O código mais interno será executado `27` vezes.

---

# `break`

O `break` serve para **parar o loop**.

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

Quando `i` chega a `5`, o `break` encerra o loop.

---

# `continue`

O `continue` não encerra o loop.

Ele apenas **pula a repetição atual**.

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

Quando `i` é `2`, o código abaixo do `continue` não é executado naquela repetição.

Diferença:

```text
break    → para o loop
continue → pula a repetição atual
```

---

# Percorrendo arrays com `for`

Podemos usar um `for` para percorrer um array.

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

O `i` representa o índice do array.

```text
índice →  0   1   2   3   4
valor  → 10  20  30  40  50
```

Então:

```js
numeros[0] // 10
numeros[1] // 20
numeros[2] // 30
```

E assim por diante.

---

# `.length`

O `.length` retorna a quantidade de elementos de um array.

Exemplo:

```js
const numeros = [10, 20, 30, 40, 50];

console.log(numeros.length);
```

Resultado:

```text
5
```

Por isso podemos fazer:

```js
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
```

É importante usar:

```js
i < numeros.length
```

e não:

```js
i <= numeros.length
```

Porque os índices começam em `0`.

Se o array possui 5 elementos:

```text
índices:
0
1
2
3
4
```

Não existe:

```text
5
```

---

# Loop + `if`

É muito comum usar loops junto com condições.

Exemplo: mostrar apenas números pares.

```js
for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }

}
```

Resultado:

```text
2
4
6
8
10
```

O `%` retorna o resto da divisão.

```js
10 % 2 // 0
```

Como o resto é `0`, sabemos que o número é divisível por `2`.

---

# Acumulador

Loops também podem ser usados para acumular valores.

Exemplo:

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

O funcionamento é:

```text
soma = 0

soma = 0 + 10 → 10
soma = 10 + 20 → 30
soma = 30 + 30 → 60
soma = 60 + 40 → 100
```

A variável `soma` é um **acumulador**.

---

# Loops e matrizes

Loops aninhados são muito usados para percorrer matrizes.

Exemplo:

```js
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

Podemos percorrer todos os elementos com dois loops:

```js
for (let i = 0; i < matriz.length; i++) {

    for (let j = 0; j < matriz[i].length; j++) {

        console.log(matriz[i][j]);

    }

}
```

O primeiro `for` percorre as linhas.

O segundo `for` percorre os elementos de cada linha.

```text
i = 0 → [1, 2, 3]
i = 1 → [4, 5, 6]
i = 2 → [7, 8, 9]
```

---

# `for` x `while`

Os dois podem fazer praticamente a mesma coisa.

### `for`

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

### `while`

```js
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

Uma forma simples de escolher:

```text
for       → quando a quantidade de repetições é mais previsível
while     → quando a repetição depende de uma condição
do...while → quando precisa executar pelo menos uma vez
```

---

# Complexidade de loops

Loops também aparecem quando estudamos **complexidade de algoritmos**.

Um loop:

```js
for (let i = 0; i < n; i++) {
    console.log(i);
}
```

executa aproximadamente `n` vezes.

Complexidade:

```text
O(n)
```

Já dois loops aninhados:

```js
for (let i = 0; i < n; i++) {

    for (let j = 0; j < n; j++) {
        console.log(i, j);
    }

}
```

Executam aproximadamente:

```text
n × n = n²
```

Complexidade:

```text
O(n²)
```

Isso significa que, conforme a quantidade de dados aumenta, um algoritmo com vários loops aninhados pode ficar bem mais pesado.

---

# Resumo

```text
for
→ usado para repetir código, geralmente quando temos um contador.

while
→ repete enquanto uma condição for verdadeira.

do...while
→ executa primeiro e verifica a condição depois.

for...of
→ percorre os valores.

for...in
→ percorre propriedades/chaves.

break
→ encerra o loop.

continue
→ pula a iteração atual.

loop aninhado
→ loop dentro de outro loop.

.length
→ retorna a quantidade de elementos.

O(n)
→ um loop que cresce proporcionalmente a n.

O(n²)
→ dois loops aninhados que percorrem n elementos.
```

## Ideia principal

A lógica de um loop pode ser resumida como:

```text
inicializa
    ↓
verifica a condição
    ↓
executa o código
    ↓
atualiza a variável
    ↓
volta para a condição
    ↓
repete
```

E em um loop aninhado:

```text
loop externo
    ↓
    loop interno
        ↓
        executa todas as repetições
    ↓
loop externo avança
    ↓
loop interno começa novamente
```
