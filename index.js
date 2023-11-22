
class Hero {

    // Contrução do personagem

    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    // Método do ataque

    heroAtack() {
        let atack = ""

        if(this.type === "mago") {
        atack = "magia"
        console.log(`O ${this.type} atacou usando ${atack}`);
        } else if(this.type === "guerreiro") {
        atack = "espada"
        console.log(`O ${this.type} atacou usando ${atack}`);
        } else if(this.type === "monge") {
        atack = "artes marciais"
        console.log(`O ${this.type} atacou usando ${atack}`);
        } else if(this.type === "ninja") {
        atack = "shuriken"
        console.log(`O ${this.type} atacou usando ${atack}`);
        }
    }

}

// Criação de novos personagens

let lord = new Hero("Gandalf", 74, "mago" )
let darkSoul = new Hero("Astoria", 30, "guerreiro")
let dragon = new Hero("kuririn", 25, "monge")
let naruto = new Hero("kakashi", 42, "ninja")

// Chamada do método para cada personagem

lord.heroAtack()
darkSoul.heroAtack()
dragon.heroAtack()
naruto.heroAtack()