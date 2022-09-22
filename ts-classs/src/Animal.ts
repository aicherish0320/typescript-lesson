class Animal {
  name: String
  constructor(name_: string) {
    this.name = name_
  }
  eat() {
    console.log('eat')
  }
}

class Dog extends Animal {
  public type: String
  constructor(name_: string, type: string) {
    super(name_)
    this.type = type
  }
  spark() {
    console.log('dog spark')
  }
}
