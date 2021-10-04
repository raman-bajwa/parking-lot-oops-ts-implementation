import { Car } from './car';

export class Slot {
    public uid: number;
    private car: Car;

    constructor(uid: number){
        this.uid = uid;

        this.car = null;
    }

    public setCar(car: Car): void{
        this.car = car;
    }

    public removeCar(): void{
        this.car = null;
    }
}
