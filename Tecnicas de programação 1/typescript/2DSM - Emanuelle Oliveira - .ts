// classe endereco
class Endereco {
    numero: number;
    rua: string;
    bairro: string;
    cidade: string;

    constructor(numero: number, rua: string, bairro: string, cidade: string) {
        this.numero = numero;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
    }
}

// classe telefone
class Telefone {
    ddd: string;
    numero: string;

    constructor(ddd: string, numero: string) {
        this.ddd = ddd;
        this.numero = numero;
    }
}

// classe funcionario
class Funcionario {
    nome: string;
    matricula: string;
    cpf: string;
    endereco: Endereco;
    telefone: Telefone;

    constructor(nome: string, matricula: string, cpf: string, endereco: Endereco, telefone: Telefone) {
        this.nome = nome;
        this.matricula = matricula;
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
    }
}

// classe empresa
class Empresa {
    funcionarios: Funcionario[];
    endereco: Endereco;
    razaoSocial: string;
    nomeFantasia: string;
    cnpj: string;
    telefones: Telefone[];

    constructor(funcionarios: Funcionario[], endereco: Endereco, razaoSocial: string, nomeFantasia: string, cnpj: string, telefones: Telefone[]) {
        this.funcionarios = funcionarios;
        this.endereco = endereco;
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.telefones = telefones;
    }
}

// criar instâncias
let endereco = new Endereco(123, 'Av. Paulista', 'Jardim Paulista', 'São Paulo');
let telefone = new Telefone('011', '9-9999-9999');
let funcionario = new Funcionario('Tony Stark', '123456789', '999.999.999-99', endereco, telefone);
let funcionarios = [funcionario];
let telefones = [telefone];
let empresa = new Empresa(funcionarios, endereco, 'ABC LTDA', 'Mercado online', '999-999-999-999-99', telefones);

// exibir informações
console.log('Razao social:', empresa.razaoSocial);
console.log('Nome fantasia:', empresa.nomeFantasia);
console.log('CNPJ:', empresa.cnpj);
console.log('Endereco: Rua', empresa.endereco.rua, 'Bairro:', empresa.endereco.bairro, 'Cidade:', empresa.endereco.cidade, 'Numero:', empresa.endereco.numero);
console.log('\nFuncionários:');
empresa.funcionarios.forEach(func => {
    console.log('Nome:', func.nome);
    console.log('Matricula:', func.matricula);
    console.log('CPF:', func.cpf);
    console.log('Rua:', func.endereco.rua, 'Bairro:', func.endereco.bairro, 'Cidade:', func.endereco.cidade, 'Numero:', func.endereco.numero);
    console.log('Telefone: (' + func.telefone.ddd + ') ' + func.telefone.numero + '\n');
});
