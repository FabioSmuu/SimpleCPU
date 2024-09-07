class SimpleCPU {
  constructor() {
    this.ram = new RAM(256)  // Memória de 256 bytes
    this.regA = new Register(8)  // Registrador A
    this.regB = new Register(8)  // Registrador B
    this.alu = new ALU()
    this.pc = 0  // Program Counter (Contador de Instruções)
  }

  // Busca a próxima instrução da RAM
  fetch() {
    const instruction = this.ram.read(this.pc)
    this.pc++
    return instruction
  }

  // Decodifica e executa a instrução
  execute(instruction) {
    switch (instruction) {
      case 0x01:  // ADD A, B
        const result = this.alu.add(this.regA.getValue(), this.regB.getValue())
        this.regA.setValue(result)
        break
      case 0xFF:  // HALT
        return false
    }
    return true
  }

  // Roda o ciclo de instrução
  run() {
    let running = true
    while (running) {
      const instruction = this.fetch()
      running = this.execute(instruction)
    }
  }
}

// Exemplo de um programa simples
const cpu = new SimpleCPU()
cpu.ram.write(0, 0x01)  // Instrução ADD A, B
cpu.ram.write(1, 0xFF)  // HALT
cpu.regA.setValue(10)
cpu.regB.setValue(20)
cpu.run()
console.log(cpu.regA.getValue())  // Resultado da soma: 30
