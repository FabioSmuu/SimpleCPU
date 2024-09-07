class ControlUnit {
  constructor(cpu) {
    this.cpu = cpu
  }

  execute(instruction) {
    switch (instruction) {
      case 0x01:  // MOV A, B
        this.cpu.regA.setValue(this.cpu.regB.getValue())
        break
      case 0x02:  // ADD A, B
        const result = this.cpu.alu.add(this.cpu.regA.getValue(), this.cpu.regB.getValue())
        this.cpu.regA.setValue(result)
        break
      case 0x03:  // JMP addr
        const addr = this.cpu.ram.read(this.cpu.pc)  // Endereço após o opcode
        this.cpu.pc = addr
        break
      case 0x04:  // CMP A, B
        this.cpu.flagZero = (this.cpu.regA.getValue() === this.cpu.regB.getValue()) ? 1 : 0
        break
      case 0x05:  // JZ addr (Jump if Zero)
        if (this.cpu.flagZero) {
          this.cpu.pc = this.cpu.ram.read(this.cpu.pc)
        } else {
          this.cpu.pc++
        }
        break
      case 0xFF:  // HALT
        return false  // Para a CPU
    }
    return true
  }
}
