class SimpleCPU {
  constructor() {
    this.ram = new RAM(256)  // Memória de 256 bytes
    this.regA = new Register(8)  // Registrador A
    this.regB = new Register(8)  // Registrador B
    this.alu = new ALU()
    this.pc = 0  // Program Counter (Contador de Instruções)
    this.flagZero = 0  // Bandeira Zero
    this.controlUnit = new ControlUnit(this)  // Unidade de Controle
  }

  fetch() {
    const instruction = this.ram.read(this.pc)
    this.pc++
    return instruction
  }

  run() {
    let running = true
    while (running) {
      const instruction = this.fetch()
      running = this.controlUnit.execute(instruction)
    }
  }
}
