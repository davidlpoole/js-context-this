// set the context of a function using call(), apply(), or bind()

const myTruck = {
  speed: 0,
}

const myCar = {
  speed: 0,
}

function drive(speedLimit) {
  this.speed = speedLimit
  console.log(`Driving at ${this.speed} kph`)
}

// acts as though drive() was defined inside of myCar
drive.call(myCar, 65)

// same as call() but takes an array of args
drive.apply(myTruck, [55])

// bind() is the same as call() but returns a new function
const driveMyTruckOnTheHighway = drive.bind(myTruck, 90)
driveMyTruckOnTheHighway()

// or
const driveMyCar = drive.bind(myCar)
driveMyCar(100)
