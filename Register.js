class Register {
  constructor(bits) {
    this.bits = bits
    this.value = 0
  }

  setValue(value) {
    this.value = value & ((1 << this.bits) - 1) // Limita o valor ao tamanho do registrador
  }

  getValue() {
    return this.value
  }
}
