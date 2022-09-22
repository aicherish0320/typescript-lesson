class Person {
  public name: string = 'noName'
  public age: number = 0
  public phone: string = '110120'

  public doEat(who: string, address: string): void {
    console.log(`${this.name}和${who}在${address}吃饭`)
  }

  constructor(name_: string, age_: number, phone_: string) {
    this.name = name_
    this.age = age_
    this.phone = phone_
  }
}

const p1 = new Person('jack', 25, '12345')
// p1.name = 'aic'
// p1.age = 25
// p1.phone = '12345678'

p1.doEat('rose', '牛家屯')

console.log(p1)
console.log(Person.prototype.constructor === Person)
