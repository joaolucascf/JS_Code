function person() {
  this.idade = 0
  self = this
  setInterval(function () {
    self.idade++
    console.log(self.idade)
  }, 1000)
}

new person;