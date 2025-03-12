// let empresa = {
//     nome: 'piratininga'
// }

// let empresa2 = {
//     nome: 'shibata'
//     cnpj: '123456789'
// }




// function Empresa(nome, cnpj){
//     this.nome = nome
//     this.cnpj = cnpj
// }
// let empresa = new Empresa ('GM', '123456')
// let empresa2 = new Empresa ('Renault', '654321')
// console.log(empresa)
// console.log("----------------------------------------")
// console.log(empresa2)




// function Empresa(nome, razaoSocial) {
//     this.nome = nome;
//     this.razaoSocial = razaoSocial;
//     this.detalhe = function() {
//       return this.nome + '\n' + this.razaoSocial;
//     }
//   }
  
//   let empresa = new Empresa('Mercado Online', 'ABC LTDA');
  
//   console.log("Detalhes da empresa: \n" + empresa.detalhe());
  


// class Empresa{
//   constructor(nome, razaoSocial){
//     this.nome = nome
//     this.razaoSocial = razaoSocial
//   }
// }
// let empresa = new Empresa ('Mercado Livre', 'ABC LTDA')

// console.log(empresa.nome)
// console.log(empresa.razaoSocial)





// class Pessoa{
//   nome
//   constructor(nome){
//     this.nome = nome
//   }
// }
// class PessoaJuridica extends Pessoa{
//   cnpj
//   constructor(nome, cnpj){
//     super(nome)
//     this.cnpj = cnpj
//   }
// }
// let pes = new Pessoa(`Massanori`)
// let pej = new PessoaJuridica(`Arakaki`, `123456`)

// console.log(pej.nome)
// console.log(pes.nome)




// class Empresa {
//   #cnpj
//   constructor(razaoSocial, nomeFantasia, cnpj) {
//     this.nomeFantasia = nomeFantasia
//     this.razaoSocial = razaoSocial
//     this.#cnpj = cnpj
//   }
//   get pegarCnpj(){
//     return this.#cnpj
//   }
// }
// let empresa = new Empresa('ABC LTDA', 'Mercado Online', '9999999999')
// console.log('Qual o cnpj: ' + empresa.pegarCnpj)




// class Empresa {
//   #cnpj

//   constructor(razaoSocial, nomeFantasia, cnpj) {
//     this.nomeFantasia = nomeFantasia
//     this.razaoSocial = razaoSocial
//     this.#cnpj = cnpj
//   }
//   #colocarMaiusculo(texto) {
//     return texto.toUpperCase()
//   }
//   mostrarDetalhes() {
//     return 'Nome da empresa: ' + this.#colocarMaiusculo(this.razaoSocial) +
//       '\nNome fantasia: ' + this.#colocarMaiusculo(this.nomeFantasia)
//   }
//   get pegarCnpj() {
//     return this.#cnpj
//   }
// }
// let empresa = new Empresa('ABC LTDA', 'Mercado Online', '9999999999')

// console.log('Detalhes: \n' + empresa.mostrarDetalhes())




// class Empresa {
//   static telefoneGeral

//   constructor(razaoSocial, nomeFantasia, cnpj) {
//     this.nomeFantasia = nomeFantasia
//     this.razaoSocial = razaoSocial
//     this.cnpj = cnpj
//   }
// }

// Empresa.telefoneGeral = '(12) 999999999'

// console.log('Telefone da empresa: \n' + Empresa.telefoneGeral)
