// Portas lógicas básicas
const AND = (a, b) => a & b
const OR = (a, b) => a | b
const NOT = (a) => ~a & 1
const XOR = (a, b) => a ^ b

class ALU {
  constructor() {}

  add(a, b) {
    return a + b // Simulação de soma
  }

  and(a, b) {
    return AND(a, b)
  }

  or(a, b) {
    return OR(a, b)
  }

  xor(a, b) {
    return XOR(a, b)
  }
}

const fullAdder = (a, b, carryIn) => {
  const sum = XOR(a, XOR(b, carryIn))
  const carryOut = OR(AND(a, b), AND(XOR(a, b), carryIn))
  return { sum, carryOut }
}

const mux2to1 = (input1, input2, selector) => {
  return selector ? input2 : input1
}
