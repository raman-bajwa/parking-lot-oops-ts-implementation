import { Car } from './car';

export class Slot {
    public uid: number;
    private car: Car;

    /** Sets uid of slot on creation. */
    constructor(uid: number) {
        this.uid = uid;

        this.car = null;
    }

    /**
     * Parks an car
     * @param {Car} car
     * @returns void
     */
    public setCar(car: Car): void {
        this.car = car;
    }

    /**
     * Removes parked car
     */
    public removeCar(): void {
        this.car = null;
    }

    /**
     * Returns currently parked car in it,
     * @returns {Car}
     */
    public getParkedCar(): Car {
        return this.car;
    }
}
