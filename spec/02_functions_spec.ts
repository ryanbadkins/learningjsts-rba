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

        });
    });
});