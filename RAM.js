class RAM {
  constructor(size) {
    this.memory = Array(size).fill(0)  // Memória de tamanho fixo
  }

  read(address) {
    return this.memory[address]
  }

  write(address, value) {
    this.memory[address] = value
  }
}

// Exemplo
// Definir endereços importantes na memória
const snakeHeadXAddr = 0 // Endereço da posição X da cabeça da cobra
const snakeHeadYAddr = 1 // Endereço da posição Y da cabeça da cobra
const foodXAddr = 2      // Endereço da posição X da comida
const foodYAddr = 3      // Endereço da posição Y da comida
const directionAddr = 4  // Endereço da direção da cobra
