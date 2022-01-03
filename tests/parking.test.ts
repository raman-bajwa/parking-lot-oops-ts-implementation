import { Parking } from '../src/classes/parking';

describe('Initiate Parking', () => {
    it('Park have all the properities defined', () => {
        const parking = new Parking(2);
        
        expect(parking).toBeDefined();
        expect(parking).toBeInstanceOf(Parking);
        expect(parking.capacity).toBe(2)
    })
})