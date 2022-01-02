import { Slot } from './slot';
import { Car } from './car';

export class Parking {
    /** Stores all slots
     * @private to abstract slots from 
     * unauthorized access.
     */
    private slots: Slot[];

    /** Stores the capacity of park */
    public capacity: number;

    /** Stores the number of parkedCars
     * @private to abstract inner functionalities.
     */
    private parkedCars: number;

    /** Creates an park of a specifed length */
    constructor(length: number){
        this.slots = [];

        // initialize all slots with an Id.
        for(let i=0; i < length; i++){
            this.slots[i] = new Slot(i + 1);
        }

        // sets the capacity of parking 
        this.capacity = length;

        // initialize number of parked Cars.
        this.parkedCars = 0;
    }

    /**
     * Parks an car on a provided slot number
     * @param {number} slotNumber
     * @param {Car} car
     * @returns void
     */
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

    /**
     * Removes an car of provided slot number
     * @param {number} slotNumber
     * @returns void
     */
    public removeCar(slotNumber: number): void{
        this.slots[slotNumber - 1].removeCar();
    }

    /**
     * Returns number of parked cars
     * @returns {number}
     */
    public getNumberOfParkedCars(): number{
        return this.parkedCars;
    }

    /**
     * Returns number of availble slots
     * @returns {number}
     */
    public getNumberOfAvailbleSlots(): number{
        return this.capacity - this.parkedCars;
    }
}
