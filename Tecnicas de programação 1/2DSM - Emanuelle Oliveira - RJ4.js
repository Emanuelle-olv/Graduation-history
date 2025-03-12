// 📁 Cliente.js
class Cliente {
    #cpf; // Atributo privado

    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefones = new Set();
        this.#cpf = cpf;
    }

    // Método GET para acessar o CPF
    getCpf() {
        return this.#cpf;
    }

    // Métodos para retornar nome em caixa alta e baixa
    getNomeMaiusculo() {
        return this.nome.toUpperCase();
    }

    getNomeMinusculo() {
        return this.nome.toLowerCase();
    }

    // Método para exibir os detalhes do cliente
    detalhe() {
        let telefonesDetalhe = "";
        this.telefones.forEach(telefone => {
            telefonesDetalhe += `\n  ddd: ${telefone.ddd} número: ${telefone.numero}`;
        });

        return `Nome: ${this.nome}
Estado: ${this.endereco.estado} Cidade: ${this.endereco.cidade} Rua: ${this.endereco.rua} Número: ${this.endereco.numero}
Telefones:${telefonesDetalhe}\n`;
    }
}

export default Cliente;

// 📁 Telefone.js
class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
}

export default Telefone;

// 📁 Endereco.js
class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
}

export default Endereco;

// 📁 Empresa.js
class Empresa {
    #cnpj; // Atributo privado

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
        this.#cnpj = cnpj;
    }

    // Método GET para acessar o CNPJ
    getCnpj() {
        return this.#cnpj;
    }

    // Métodos para retornar nome fantasia em caixa alta e baixa
    getNomeFantasiaMaiusculo() {
        return this.nomeFantasia.toUpperCase();
    }

    getNomeFantasiaMinusculo() {
        return this.nomeFantasia.toLowerCase();
    }

    // Método para exibir os detalhes da empresa e seus clientes
    detalhe() {
        let detalheClientes = "";
        this.clientes.forEach(cliente => {
            detalheClientes += cliente.detalhe() + "\n-------------------\n";
        });

        return `Razão Social: ${this.razaoSocial}
Nome Fantasia: ${this.nomeFantasia}
-------------------
${detalheClientes}`;
    }
}

export default Empresa;

// 📁 index.js (Módulo de teste)
import Cliente from "./Cliente.js";
import Telefone from "./Telefone.js";
import Endereco from "./Endereco.js";
import Empresa from "./Empresa.js";

// Criando um endereço para a empresa
const enderecoEmpresa = new Endereco("SP", "São Paulo", "Av. Paulista", 1000);

// Criando a empresa
const empresa = new Empresa("Tech Solutions LTDA", "TechSol", "12.345.678/0001-99", enderecoEmpresa);

// Criando dois telefones para a empresa
const telefoneEmpresa1 = new Telefone("11", "99998888");
const telefoneEmpresa2 = new Telefone("11", "99997777");

empresa.telefones.add(telefoneEmpresa1);
empresa.telefones.add(telefoneEmpresa2);

// Criando 5 clientes, cada um com um endereço e dois telefones
const clientes = [];

for (let i = 1; i <= 5; i++) {
    let enderecoCliente = new Endereco("SP", "São Paulo", `Rua Cliente ${i}`, i);
    let cliente = new Cliente(`Cliente ${i}`, `123.456.78${i}-00`, enderecoCliente);

    let telefone1 = new Telefone("11", `98765432${i}`);
    let telefone2 = new Telefone("11", `99987654${i}`);

    cliente.telefones.add(telefone1);
    cliente.telefones.add(telefone2);

    clientes.push(cliente);
}

// Adicionando clientes à empresa
clientes.forEach(cliente => empresa.clientes.add(cliente));

// Exibindo a descrição completa da empresa e seus clientes
console.log(empresa.detalhe());
