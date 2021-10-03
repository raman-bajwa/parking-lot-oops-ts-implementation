import { Car } from './car';

export class Slot {
    uid: number;
    car: Car;

    constructor(uid: number){
        this.uid = uid;

        this.car = null;
    }

    setCar(car: Car): void{
        this.car = car;
    }

    removeCar(): void{
        this.car = null;
    }
}
