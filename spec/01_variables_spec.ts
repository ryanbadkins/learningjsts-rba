describe('variables and constants', () => {
    describe('declaring variables', () => {
        it('has a let keyword', () => {
            let x: number | string = 12;

            expect(x).toBe(12);

            x = 13;

            expect(x).toBe(13);

            let y;
            y = 18;
            expect(y).toBe(18);

            y = 'tacos';
            expect(y).toBe('tacos');

            interface Food {
                name: string;
                calories: number;
            }
            let z: number | string | Food; //union type
        });
        it('using the const keyword', () => {
            const MIN_AGE = 13;

            const FAVORITE_NUMBERS = [3, 5, 9];
            FAVORITE_NUMBERS[1] = 6;

            const ACTOR = {
                name: 'Peter Mayhew',
                role: 'Chewbacca'
            };

            ACTOR.role = 'Chewie';
        });
        it('still has var but it is bad and you should feed bad if you use it', () => {
            const age = 22;
            if (age >= 21) {
                var oldEnough = true; //when you use var it doesn't care about scope, but if you used let instead of var it would be smart and the oldEnough variable wouldn't exist outside of the if statement
            }
            expect(oldEnough).toBe(true);
        });
        describe('literals', () => {
            it('has numeric literals', () => {
                let first = 10;
                let second = 3.12;
                let salary = 10_001_800; //can use underscores and not commas in typescript, but not javascript
                let hexNumber = 0xff;
                let binary = 0b1010;
                let octal = 0o744;
            });
            it('has string literals', () => {
                let firstString = 'Hello worlds';
                expect(firstString).toBe("Hello worlds");

                let quotesRules = 'you can use "double quotes" within a string if you use single quotes';
                let quotesRulesToo = "Flanner O'Connel";

                expect("hi").toBe(`hi`);
                let backTicksHaveSuperPower = true;
                let backTicksCanBeMultiLine = `it all happened so quickly
                
                there I was smokin ganj wit snoop doggy dog
                the end`;

                let name = 'Ryan', age = 23;
                let info = `His name is ${name} and he is ${age} years old`; //you can only do this in line syntax with backticks
                console.log(info);

            });
            it('has array literals', () => {
                const things = [];
                things[0] = 'Hello';
                things[1] = 42;
                things[999] = 'You went this far';
                things[1000] = things; //dumb but works, arrays are not typed by default, you can put anything in it
                expect(things[4]).toBeUndefined();

                const friends: string[] = [];
                friends[0] = 'David';
                friends[1] = 'Stacey';
                // friends[2] = 1; // this wont work because it is an only string array

                const luckyNumbers: Array<number | string> = [];
                luckyNumbers[0] = 'three';
                luckyNumbers[1] = 2;
            });
        });
    });
});