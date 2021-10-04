import { Slot } from './slot';
import { Car } from './car';

export class Parking {
    private slots: Slot[];
    public capacity: number;
    private parkedCars: number;

    constructor(length: number){
        this.slots = [];

        for(let i=0; i < length; i++){
            this.slots[i] = new Slot(i + 1);
        }

        this.capacity = length;
        this.parkedCars = 0;
    }

    public parkCar(slotNumber: number, car: Car): void{

        // get current slot
        let _slot = this.slots[slotNumber - 1];

        // check if any car is already parked
        if(_slot.getParkedCar()){
            // if yes throw an Error
            throw new Error(`Already occupied Slot`);
        }

        // park an car
        _slot.setCar(car);

        // increment the parked cars count
        this.parkedCars++;
    }

    public removeCar(slotNumber: number): void{
        this.slots[slotNumber - 1].removeCar();
    }

    public getNumberOfParkedCars(): number{
        return this.parkedCars;
    }

    public getNumberOfAvailbleSlots(): number{
        return this.capacity - this.parkedCars;
    }
}
