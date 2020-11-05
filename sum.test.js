
const sum = require('./sum');

describe('sum', ()=> {
    test('Throws and error if NaN passed', ()=> {
        expect(()=> sum('a', 'b')).toThrow('Entry must be a number');
    });
    test('adds 1 + 2 to equal 3', ()=> {
        expect(sum(1, 2)).toBe(3);
    });
});
