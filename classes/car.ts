import { vechicle } from '../interfaces/vechicle';

export class Car implements vechicle {

    regsitrationNumber: string;
    model: string;

    constructor(regsitrationNumber: string, model: string){
        this.regsitrationNumber = regsitrationNumber;
        this.model = model;
    }

    getVechicleDetails(): string {
        return `Registration Number: ${this.regsitrationNumber}, Model: ${this.model}.`
    }
}