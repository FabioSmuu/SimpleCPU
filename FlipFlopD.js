// Flip-Flop D (armazena 1 bit de memória)
class FlipFlopD {
  constructor() {
    this.state = 0 // Armazena o bit atual
  }

  // O flip-flop D segue a entrada e muda no clock
  clock(input) {
    this.state = input
  }

  getOutput() {
    return this.state
  }
}
