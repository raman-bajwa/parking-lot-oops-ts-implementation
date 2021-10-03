import { Parking } from './classes/parking';
import { Car } from './classes/car';

let parking = new Parking(10);

// park an car
parking.parkCar(1, new Car("xsd", "2007"));

// console.log(parking);
console.log(parking.parkedCars);
console.log(parking.getNumberOfParkedCars());
console.log(parking.getNumberOfAvailbleSlots());