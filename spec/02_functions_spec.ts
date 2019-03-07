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
            const answer = formatters.formatName('Han', 'Solo');
            expect(answer).toBe('Solo, Han');
            expect(formatters.PI).toBe(3.1415);

            expect(formatters.formatName('Han', 'Solo', (x) => x.toUpperCase())).toBe('SOLO, HAN');
            const wrapInStars = wrap('***');
            expect(wrapInStars('Tacos')).toBe('***Tacos***');
            expect(formatters.formatName('Han', 'Solo', wrapInStars)).toBe('***Solo, Han***');

            //const wrapInCarots: formatters.Transform = (x) => `^^^${x}^^^`;
            const wrapInCarots = wrap('^^^');
            expect(formatters.formatName('Han', 'Solo', wrapInCarots)).toBe('^^^Solo, Han^^^');

            // function wrapInStars(what: string): string {
            //     return `***${what}***`;
            // }

            function wrap(chars: string): formatters.Transform {
                //closure
                return (x) => `${chars}${x}${chars}`;
            }
        });
    });
    describe('array methods', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        it('taking a look at every member of an array', () => {
            numbers.forEach((x) => console.log(x));
        });
        describe('methods that return new arrays', () => {
            it('has a filter', () => {
                function isEven(n: number): boolean {
                    return n % 2 === 0;
                }
                const evens = numbers.filter(isEven)
                expect(evens).toEqual([2, 4, 6, 8]);
                expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            });
            it('map', () => {

                const doubled = numbers.map(n => n * 2);
                expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
            });

            it('do a practice', () => {
                interface Vehicle {
                    vin: string;
                    makeAndModel: string;
                    mileage: number;
                }
                const vehicles: Vehicle[] = [
                    { vin: '9999', makeAndModel: 'Chevy Tahoe', mileage: 182000 },
                    { vin: 'aka92', makeAndModel: 'Toyota Prius', mileage: 89999 },
                    { vin: 'kduwi', makeAndModel: 'Ford Explorer', mileage: 99998 }
                ];
                //Give jeff the makeAndModel of each vehicle with < 100,000 miles on it
                const lowMileageVehicles = vehicles
                    .filter(v => v.mileage < 100000)
                    .map(v => v.makeAndModel)
                    ;

                expect(lowMileageVehicles).toEqual(['Toyota Prius', 'Ford Explorer']);
            });
            describe('methods that produce a single (scalar) value', () => {
                it('has methods that check the mebership of an array', () => {
                    expect(numbers.some(n => n > 8)).toBe(true);
                    expect(numbers.every(n => n % 2 === 0)).toBe(false);
                    // function isEven(n: number): boolean {
                    //     return n % 2 === 0;
                    // }
                    // expect(numbers.every(isEven)).toBe(false); 
                });
                it('has reduce', () => {
                    expect(numbers.reduce((p, n) => p + n)).toBe(45);
                    expect(numbers.reduce((p, n) => p + n, 100)).toBe(145);
                });
            });
        });
    });
    describe('a demo', () => {
        it('using reduce for something "real"', () => {
            interface Vehicle {
                vin: string;
                makeAndModel: string;
                mileage: number;
            }
            const vehicles: Vehicle[] = [
                { vin: '9999', makeAndModel: 'Chevy Tahoe', mileage: 182000 },
                { vin: 'aka92', makeAndModel: 'Toyota Prius', mileage: 89999 },
                { vin: 'kduwi', makeAndModel: 'Ford Explorer', mileage: 99998 }
            ];

            interface HighestMileageVehicle {
                vin: string;
                mileage: number;
            }

            const seed: HighestMileageVehicle = {
                vin: null,
                mileage: -1
            };

            const answer = vehicles.reduce((p, n) => {
                if (n.mileage > p.mileage) {
                    return {
                        vin: n.vin,
                        mileage: n.mileage
                    };
                } else {
                    return p
                }

            }, seed);

            expect(answer).toEqual({
                vin: '9999',
                mileage: 182000
            });
        });
    });
});