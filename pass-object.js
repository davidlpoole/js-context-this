const myTruck = {
  speed: 0,
}

const myCar = {
  speed: 0,
}

function drive(vehicle, speedLimit) {
  vehicle.speed = speedLimit
  console.log(`Driving at ${vehicle.speed} kph`)
}

// pass the object to the function - this mutates the object
drive(myCar, 100)
drive(myTruck, 45)
