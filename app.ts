import { Parking } from './classes/parking';
import { Car } from './classes/car';

// create an parking with 10 slots for parking
let parking = new Parking(10);

// print the capacity of park
console.log('Park capacity: ', parking.capacity);
 
// create a car
const car1 = new Car("JH 40B 1762", "2007");

// create an another car
const car2 = new Car("JH 31T 4562", "2009");

// park an first car
parking.parkCar(1, car1);

// park second car
parking.parkCar(2, car2);

// print the number of parked cars
console.log('Parked Cars: ', parking.getNumberOfParkedCars());

// print the number of availble slots
console.log('Available slots: ', parking.getNumberOfAvailbleSlots());