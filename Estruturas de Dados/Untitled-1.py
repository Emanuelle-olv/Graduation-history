a = [4, 2]
b = [1, 1, 10]
c = [5, 3, 2, 1]
#coloque em ordem crescnte a partir do segundo numero

lista = [a, b, c]
def segundo(vetor):
    return vetor[1]

ab = sorted(lista, key=segundo)

print(ab)

