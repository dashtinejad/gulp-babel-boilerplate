class HelloWorld {
  constructor(name) {
    this.name = name
  }

  sayHello() {
    return `Hello ${this.name}`
  }
}

const person = new HelloWorld('Mojtaba')
console.log(person.sayHello())