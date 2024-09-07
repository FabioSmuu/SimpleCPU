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

// Exemplo de uso:
const display = new Display(10, 10)
display.setPixel(1, 1, 1)  // Desenha um pixel
display.render()
