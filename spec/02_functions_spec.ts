import * as formatters from "../src/formatters";
describe('functions', () => {
    describe('function literals', () => {
        it('has a couple of kinds', () => {
            //Named Function
            function add(a: number, b: number): number {
                return a + b;
            }
            expect(add(2, 2)).toBe(4);

            //Anonymous function
            const subtract = function (a: number, b: number) {
                return a - b;
            }
            expect(subtract(10, 2)).toBe(8);

            const multiply = (a: number, b: number) => a * b;
            expect(multiply(3, 3)).toBe(9);

            const divide = (a: number, b: number) => {
                if (b <= 0) {
                    throw new Error('You almost destroyed the universe');
                } else {
                    return a / b;
                }
            }
        });
        it('passing arguments to functions', () => {
            function formatName(first: string, last: string, mi?: string): string {
                let fullName = `${last}, ${first}`;
                if (mi) {
                    fullName += ` ${mi}.`;
                }
                return fullName;
            }
            expect("dog").toBeTruthy();
            expect(formatName('Han', 'Solo')).toBe('Solo, Han');
            expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');
        });

        it('using rest parameters', () => {
            function add(a: number, b: number, ...rest: number[]) {
                const firstTwo = a + b;
                return rest.reduce((s, n) => s + n, firstTwo);
            }

            expect(add(2, 1)).toBe(3);
            expect(add(2, 2, 2)).toBe(6);
        });
    });
    describe('higher order functions', () => {
        /*takes one or more functons as arguments, or returns a function as it's result*/
        it('takes a function as an argument', () => {

            const answer = formatters.formatName('ryan', 'adkins');
            expect(answer).toBe('adkins, ryan');
            expect(formatters.PI).toBe(3.141569);
        });
    });
});