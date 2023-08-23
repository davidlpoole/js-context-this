const myCar = {
  speed: 0,

  operate(speedLimit, callback) {
    callback(speedLimit)
    console.log(`operate(): myCar is driving at ${this.speed}`)
  },

  operateBound(speedLimit, callback) {
    boundCallback = callback.bind(this)
    boundCallback(speedLimit)
    console.log(`operateBound(): myCar is driving at ${this.speed}`)
  },
}

function drive(speedLimit) {
  this.speed = speedLimit
  console.log(`drive(): Start driving at ${this.speed} kph`)
}

// drive's `this` references the global scope, so it outputs `undefined`
myCar.operate(55, drive)

// to overcome this, bind the callback to the `this` context of the object
myCar.operateBound(65, drive)
