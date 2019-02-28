import { PhoneNumberPipe } from './phone-number.pipe';


describe('PhoneNumberPipe', () => {

    it('should format 10 digit number into phone number convention', () => {
        const pipe = new PhoneNumberPipe();

        expect(pipe.transform('1112223333')).toBe('(111) 222-3333');
    });

    it('should format non 10 digit number into empty string', () => {
        const pipe = new PhoneNumberPipe();

        expect(pipe.transform('111222333')).toBe('');
    });
});
