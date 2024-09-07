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
