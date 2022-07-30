function QQUser(number_, mark_, age_) {
  this.number = number_
  this.mark = mark_
  this.age = age_

  this.commonFriends = ['jack', 'tom', 'mike']

  this.show = function () {
    console.log(`${this.number}-${this.mark}-${this.age}-${this.commonFriends}`)
  }
}

const u1 = new QQUser('10086', 'mary', 21)
const u2 = new QQUser('10010', 'peter', 25)
const u3 = new QQUser('10001', 'rose', 18)

console.log('u1 >>> ', u1.show())
console.log('u2 >>> ', u2.show())
console.log('u3 >>> ', u3.show())
