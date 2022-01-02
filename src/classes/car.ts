import { vechicle } from '../interfaces/vechicle';

export class Car implements vechicle {

    /** Stores Regsitration number of Car */
    regsitrationNumber: string;

    /** Stores Model of Car */
    model: string;

    constructor(regsitrationNumber: string, model: string){
        this.regsitrationNumber = regsitrationNumber;
        this.model = model;
    }

    /**
     * Shows the Regsitration Number and model of car.
     * @returns string
     */
    getVechicleDetails(): string {
        return `Registration Number: ${this.regsitrationNumber}, Model: ${this.model}.`
    }
}