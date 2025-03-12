a = [4, 2]
b = [1, 1, 10]
c = [5, 3, 2, 1]

#coloque em ordem crescente a partir do segundo numero

lista = [a, b, c]
def segundo(vetor):
    return vetor[1]

ab = sorted(lista, key=segundo)


print(ab)

nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for x in nums:
    if x % 2 !=0:
        x = x**2

