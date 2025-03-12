// Personagens - objetos

let vingadores = [
    {
        nome: "Tony Stark",
        codinome: "Iron Man",
        armaPrincipal: "Armadura de Ferro",
        armaSecundaria: "Repulsores",
        velocidade: 80,
        forca: 85,
        resistencia: 90
    },
    {
        nome: "Steve Rogers",
        codinome: "Capitão América",
        armaPrincipal: "Escudo",
        armaSecundaria: "Punhos",
        velocidade: 85,
        forca: 90,
        resistencia: 95
    },
    {
        nome: "Natasha Romanoff",
        codinome: "Viúva Negra",
        armaPrincipal: "Pistolas",
        armaSecundaria: "Artes marciais",
        velocidade: 90,
        forca: 70,
        resistencia: 80
    },
    {
        nome: "Thor",
        codinome: "Thor",
        armaPrincipal: "Stormbreaker",
        armaSecundaria: "Raio",
        velocidade: 95,
        forca: 100,
        resistencia: 100
    },
    {
        nome: "Bruce Banner",
        codinome: "Hulk",
        armaPrincipal: "Força bruta",
        armaSecundaria: "Garras",
        velocidade: 70,
        forca: 100,
        resistencia: 95
    },
    {
        nome: "Thanos",
        codinome: "Thanos",
        armaPrincipal: "Manopla do Infinito",
        armaSecundaria: "Força bruta",
        velocidade: 85,
        forca: 100,
        resistencia: 100
    }
];

// Função de comparação dos personagens

function compararPersonagens(personagens) {
    for (let i = 0; i < personagens.length; i++) {
        for (let j = i + 1; j < personagens.length; j++) {
            let personagem1 = personagens[i];
            let personagem2 = personagens[j];

            console.log(`Comparando ${personagem1.nome} e ${personagem2.nome}:`);
            
            // Comparação de força

            if (personagem1.forca > personagem2.forca) {
                console.log(`${personagem1.nome} vence em força.`);
            } else if (personagem1.forca < personagem2.forca) {
                console.log(`${personagem2.nome} vence em força.`);
            } else {
                console.log("Eles têm a mesma força.");
            }

            // Comparação de velocidade

            if (personagem1.velocidade > personagem2.velocidade) {
                console.log(`${personagem1.nome} vence em velocidade.`);
            } else if (personagem1.velocidade < personagem2.velocidade) {
                console.log(`${personagem2.nome} vence em velocidade.`);
            } else {
                console.log("Eles têm a mesma velocidade.");
            }

            // Comparação de resistência

            if (personagem1.resistencia > personagem2.resistencia) {
                console.log(`${personagem1.nome} vence em resistência.`);
            } else if (personagem1.resistencia < personagem2.resistencia) {
                console.log(`${personagem2.nome} vence em resistência.`);
            } else {
                console.log("Eles têm a mesma resistência.");
            }

            console.log("----------------------------"); // para separar
        }
    }
}

// Exibir as comparações
compararPersonagens(vingadores);
