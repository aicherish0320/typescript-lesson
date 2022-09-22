var Person = function Person(name_, age_, phone_) {
  this.name = 'noName'
  this.age = 0
  this.phone = '110120'
  this.name = name_
  this.age = age_
  this.phone = phone_
}
Person.prototype.doEat = function (who, address) {
  console.log(
    ''
      .concat(this.name, '\u548C')
      .concat(who, '\u5728')
      .concat(address, '\u5403\u996D')
  )
}

var p1 = new Person('jack', 25, '12345')

p1.doEat('rose', '牛家屯')
