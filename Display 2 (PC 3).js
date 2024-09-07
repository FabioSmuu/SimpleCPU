class Display {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.pixels = Array.from({ length: height }, () => Array(width).fill(0))
  }

  setPixel(x, y, value) {
    this.pixels[y][x] = value
  }

  render() {
    const display = this.pixels.map(row => row.map(pixel => (pixel ? "%c█" : "%c ")).join("")).join("\n")
    const styles = this.pixels.flat().map(pixel => pixel ? "color: green" : "color: black")
    console.clear()
    console.log(display, ...styles)
  }
}

// Atualiza o estado do jogo a cada intervalo de tempo
function gameLoop() {
  cpu.run()  // Executa o próximo ciclo de instrução da CPU
  display.render()  // Atualiza o display

  setTimeout(gameLoop, 100)  // Reexecuta o loop a cada 100ms
}
