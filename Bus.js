class Bus {
  constructor() {
    this.data = 0
  }

  read(source) {
    this.data = source.getValue()
  }

  write(dest) {
    dest.setValue(this.data)
  }
}
