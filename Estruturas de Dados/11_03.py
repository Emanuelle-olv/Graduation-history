a = [1, 2, 3]
print(a)
b = a
print(b)
a[0] = 42
print(a)
print(b)

print(id(a))
print(id(b))

#Ponteiros em py alto nível

a = [1, 2, 3]
b = list(a)

a[0] = 77
print(a)
print(b)

print(id(a))
print(id(b))

a.insert(0, 42)
print(a)
print(id(a))

#Em python tudo é ponteiro, into é por referencia
#Amemória do computador é um vetorzão, o índice de uma posição permite acessar o dado que está la
#Porém os dados tem tamanho diferentes
#C tem dados estáticos, um depois do outro
# int i;   posição 348756
# int j;   posição 348756+4 = 348760


