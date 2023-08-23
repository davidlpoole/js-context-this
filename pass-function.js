const myCar = {
  speed: 0,
  operate(speedLimit, callback) {
    callback(speedLimit)
    console.log(`myCar is driving at ${this.speed}`)
  },
}

function drive(speedLimit) {
  this.speed = speedLimit
  console.log(`Start driving at ${this.speed} kph`)
}

// drive's `this` references the global scope, so it outputs `undefined`
myCar.operate(55, drive)
