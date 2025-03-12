# Funções recursivas chamam a si proprias
# def f(argumentos):
# if caso mais simples: return valor que sei 
# else:
# return fórmula ond diminuo algum argumento

# Faça o código abaixo no modo edição:

def fat(n):
    if n==1 or n==0: return 1
    return n * fat(n-1)

print(fat(4))

###EXERCÍCIOS:

# Faça as seguintes funções recursivas:

# 0. def pot(x, n), x**n sem usar **, ex.: pot(2,3) -> 8

def pot(x,n):
    if n==0: return 1
    return x * pot(x, n-1)

# Fazer test de mesa pot(2, 3)
# pot(2, 3)

# return 2 * pot(2, 3-1) => return 2 * pot(2, 2) =>  2* 4 = 8

# return 2 * pot(2, 2-1) => return 2 * pot(2, 1) => 2 *2 = 4

# return 2 * pot(2, 1 - 1) => return 2 * pot(2, 0) => 2 * 1 = 2

# print(pot(2, 3)) = 8


# 1. def inv(s), inverta a string s, inv('abacate') -> 'etacaba'

def inv(s):
    if len(s)==0:return s
    else:
     return s[-1] + inv(s[:-1])
    

# 2. def sd(n), some os dígitos de n, sd(123) -> 1 + 2 + 3 -> 6
# def sd(n):
#     return sum(int(algarismo) for algarismo in str(n))

# print(sd(123))

# 3. def fib(n), calcule o elemento n da sequência de Fibonacci
# nome disso é memoritization => ter um dicionário para guardar os dados que se repetem

# dic= {}
# def fib(n):
#     if n==1 or n==2: return 1
#     else: 
#         if n not in dic: dic [n] = fib(n-1) + fib(n-2)
#         return dic [n]
    
# print(fib(1000))  

from functools import cache

@cache #decorador cache envolve a função abaixo e dá super poderes de cache para ela 
def fib(n):
    if n==1 or n==2: return 1
    else: 
        return fib(n-1) + fib(n-2)
        
print(fib(1000)) 

# Fazer test de mesa (fib(4))

# f(4)= f(3)+ f(2) => 2 + 1 => 3 

# f(3) = f(2) + f(1) => 1 + 1= 2
# f(2) = 1

# 4. def mdc(a, b), mdc(21, 15) -> 3



# 5. def dec2bin(n), dec2bin(18) -> '10010'
def dec2bin(n):




#6. Diga se é a mesma coisa fazer a função abaixo das duas formas

def f(n):
    if n==1: return 1
    return f(n-1) + f(n-1)

#ou

def f(n):
    if n==1: return 1
    return 2*f(n-1)

#Resposta: sim, na matemática. Não, na computação. A versão de cima é repetitiva, não otimizada. A versão de baixo é mais eficiente e mais apropriada.