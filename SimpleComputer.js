class SimpleComputer {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.memory = Array.from({ length: height }, () => Array(width).fill(0)) // Matriz de memória
  }

  // Método para desenhar um pixel
  setPixel(x, y, value) {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      this.memory[y][x] = value
    }
  }

  // Método para limpar a tela
  clearScreen() {
    this.memory = Array.from({ length: this.height }, () => Array(this.width).fill(0))
  }

  // Método para renderizar a tela no console
  render() {
    console.clear()
    const display = this.memory.map(row => 
      row.map(cell => (cell ? "%c█" : "%c ")).join("")
    ).join("\n")

    // Gera o estilo dos "pixels"
    const styles = this.memory.flat().map(cell => cell ? "color: green" : "color: black")

    console.log(display, ...styles)
  }

  // Executa o programa
  run(program) {
    program(this) // Passa a instância do computador para o programa
    this.render() // Renderiza a saída
  }
}

// Exemplo de programa que "desenha" no display
const program = (computer) => {
  computer.clearScreen()       // Limpa a tela
  computer.setPixel(1, 1, 1)   // Desenha um pixel no ponto (1, 1)
  computer.setPixel(2, 2, 1)   // Desenha um pixel no ponto (2, 2)
  computer.setPixel(3, 3, 1)   // Desenha um pixel no ponto (3, 3)
  computer.setPixel(4, 4, 1)   // Desenha um pixel no ponto (4, 4)
  computer.setPixel(5, 5, 1)   // Desenha um pixel no ponto (5, 5)
}

// Inicializa o computador e roda o programa
const computer = new SimpleComputer(10, 10)  // Computador com "tela" de 10x10
computer.run(program)
