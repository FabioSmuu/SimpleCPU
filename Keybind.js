document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case 'ArrowUp':
      cpu.regIO.setValue(1)  // Sinaliza "cima"
      break
    case 'ArrowDown':
      cpu.regIO.setValue(2)  // Sinaliza "baixo"
      break
    case 'ArrowLeft':
      cpu.regIO.setValue(3)  // Sinaliza "esquerda"
      break
    case 'ArrowRight':
      cpu.regIO.setValue(4)  // Sinaliza "direita"
      break
  }
})
