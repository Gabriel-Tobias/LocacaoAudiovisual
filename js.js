class Animal {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    fazerSom() {
      console.log("O animal está fazendo um som.");
    }
  
    mover() {
      console.log("O animal está se movendo.");
    }
  }
  
  class Cachorro extends Animal {
    constructor(nome, idade, raca) {
      super(nome, idade);
      this.raca = raca;
    }
  
    fazerSom() {
      console.log("O cachorro está latindo.");
    }
  
    correr() {
      console.log("O cachorro está correndo.");
    }
  }
  
  // Função que recebe um objeto Animal como parâmetro e chama o método fazerSom()
  function ouvirSom(animal) {
    animal.fazerSom();
  }
  
  // Exemplo de uso do polimorfismo:
  
  // Criando uma instância da classe Animal
  const animal = new Animal("Animal", 3);
  
  // Criando uma instância da classe Cachorro que herda de Animal
  const cachorro = new Cachorro("Cachorro", 2, "Labrador");
  
  ouvirSom(animal); // Output: "O animal está fazendo um som."
  ouvirSom(cachorro); // Output: "O cachorro está latindo."
  