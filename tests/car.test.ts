import { Car } from '../src/classes/car';

describe('Create Car', () => {
    it('Car have all the properities defined', () => {
        const car = new Car("JH 40B 1762", "2007");
        
        expect(car).toBeDefined();
        expect(car).toBeInstanceOf(Car);
        expect(car.regsitrationNumber).toBe("JH 40B 1762")
        expect(car.model).toBe("2007")
    })
})