class Counter {
  constructor(bits) {
    this.bits = bits
    this.state = Array(bits).fill(0)  // Array de bits
  }

  clock() {
    for (let i = 0; i < this.bits; i++) {
      if (this.state[i] === 0) {
        this.state[i] = 1
        break
      } else {
        this.state[i] = 0
      }
    }
  }

  getOutput() {
    return this.state.join('')
  }
}
