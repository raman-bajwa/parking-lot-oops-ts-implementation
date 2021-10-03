import { Slot } from './slot';
import { Car } from './car';

export class Parking {
    slots: Slot[];
    capacity: number;
    parkedCars: number;

    constructor(length: number){
        this.slots = [];

        for(let i=0; i < length; i++){
            this.slots[i] = new Slot(i + 1);
        }

        this.capacity = length;
        this.parkedCars = 0;
    }

    parkCar(slotNumber: number, car: Car): void{
        this.slots[slotNumber - 1].setCar(car);

        this.parkedCars++;
    }

    removeCar(slotNumber: number): void{
        this.slots[slotNumber - 1].removeCar();
    }

    getNumberOfParkedCars(): number{
        return this.parkedCars;
    }

    getNumberOfAvailbleSlots(): number{
        return this.capacity - this.parkedCars;
    }
}
