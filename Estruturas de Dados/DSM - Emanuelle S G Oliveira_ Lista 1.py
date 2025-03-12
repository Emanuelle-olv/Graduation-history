#Faça a seguinte lista de Listas, Dicionários e sort com key=
#Não use o chatgpt, tente fazer sozinho

a = [4, 2]
b = [1, 1, 10]
c = [5, 3, 2, 1]
lista = [a, b, c]
#coloque em ordem crescente a partir do segundo numero

def segundo(vetor):
    return vetor[1]

ab = sorted(lista, key=segundo)
print(ab)

#Seja uma lista de inteiros, mostre apenas os números pares usando list comprehension.
numeros = [1, 2, 3, 4, 5, 6]
pares = [x for x in numeros if x % 2 == 0]
print(pares)

#Crie uma lista com os quadrados de todos os números pares de 1 a 20 usando list comprehension.

quadrados_pares = [x**2 for x in range(1,21) if x % 2 == 0]
print(quadrados_pares)

#Dada uma lista de palavras, ordene-a pelo tamanho das palavras em ordem crescente, utilizando sorted() com a cláusula key=.

palavras = ["banana", "kiwi", "abacaxi", "laranja", "maçã"]
ordenadas = sorted(palavras, key=len)
print(ordenadas)

# Dada uma lista de palavras, ordene-a pelo número de vogais presentes em cada palavra.
palavras = ["banana", "kiwi", "abacaxi", "laranja", "maçã"]

def ordem_vogais(palavra):
    vogais = 'aeiou'
    return sum (1 for letra in palavra if letra in vogais)

palavras_ordenadas = sorted(palavras, key = lambda palavra: ordem_vogais(palavra))
print(palavras_ordenadas)

# Dada uma lista de palavras, ordene-a pelo último caractere de cada palavra.

# Dada uma string, utilize list comprehension para criar uma nova string onde os caracteres aparecem alternando entre maiúsculas e minúsculas.

# Dada uma lista de strings contendo números misturados com letras (por exemplo, "a3b", "z12y", "c1x"), ordene a lista com base no número contido na string.

# Crie um dicionário que mapeia os números de 1 a 10 para seus respectivos quadrados, usando dict comprehension.

# Dada uma string, crie um dicionário onde as chaves são os caracteres e os valores são a contagem de vezes que cada caractere aparece.

# Dado um dicionário qualquer, crie um novo dicionário onde as chaves e os valores estejam invertidos.

# Dado um dicionário de números, crie um novo dicionário contendo apenas os pares chave-valor onde o valor seja maior que um determinado número.

# Dado um dicionário, ordene-o pelos valores e retorne uma lista de tuplas ordenadas.

# Dado um dicionário onde as chaves são palavras, ordene-o com base no comprimento das chaves.

# Dada uma frase, crie um dicionário onde as chaves são palavras e os valores são a contagem de vezes que cada palavra aparece.

# Dado um dicionário onde os valores são números, crie um novo dicionário onde cada valor seja a raiz quadrada do original.

# Dada uma lista de palavras, crie um dicionário onde as chaves sejam as primeiras letras e os valores sejam listas das palavras correspondentes.

# Dado um dicionário de números, ordene-o pelos valores em ordem decrescente e retorne uma lista de tuplas ordenadas.
