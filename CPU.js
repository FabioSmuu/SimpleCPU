class CPU {
  constructor() {
    this.memory = new Uint8Array(256) // Memória de 256 bytes
    this.registers = { A: 0, B: 0 }  // Registradores A e B
    this.pc = 0  // Program Counter (Apontador de Instrução)
    this.running = false
  }

  loadProgram(program) {
    this.memory.set(program, 0)  // Carrega o programa na memória
    this.pc = 0  // Define o PC para o início do programa
  }

  fetch() {
    return this.memory[this.pc++]  // Busca a próxima instrução
  }

  execute(opcode) {
    switch (opcode) {
      case 0x01:  // MOV A, valor
        this.registers.A = this.fetch()
        break
      case 0x02:  // MOV B, valor
        this.registers.B = this.fetch()
        break
      case 0x03:  // ADD A, B
        this.registers.A += this.registers.B
        break
      case 0xFF:  // HALT
        this.running = false
        break
      default:
        console.error("Instrução desconhecida: " + opcode)
    }
  }

  run() {
    this.running = true
    while (this.running) {
      let opcode = this.fetch()
      this.execute(opcode)
    }
  }
}

// Exemplo de programa: MOV A, 10; MOV B, 20; ADD A, B; HALT
const program = [0x01, 10, 0x02, 20, 0x03, 0xFF]

const cpu = new CPU()
cpu.loadProgram(program)
cpu.run()
console.log(cpu.registers.A)  // Saída: 30
