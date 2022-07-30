class Person {
  public name: string = 'noName'
  public age: number = 0
  public phone: string = '110120'

  public doEat(who: string, address: string): void {
    console.log(`${this.name}和${who}在${address}吃饭`)
  }
}

const p1 = new Person()
p1.name = 'aic'
p1.age = 25
p1.phone = '12345678'

p1.doEat('jack', '牛家屯')
