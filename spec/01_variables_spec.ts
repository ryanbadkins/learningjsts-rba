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
            describe('tuples', () => {
                it('just the syntax first', () => {
                    // public string FormatName(string first, string last) {}
                    // interface NameResult {
                    //     fullname: string;
                    //     numberOfLetters: number;
                    // }
                    function add(a: number, b: number): number {
                        return a + b;
                    }

                    interface NameFormattingResult { fullName: string, numberOfLetters: number };
                    function formatName(first: string, last: string): NameFormattingResult {
                        const fullName = `${last}, ${first}`;

                        return {
                            fullName: fullName,
                            numberOfLetters: fullName.length
                        }
                    }

                    const result = formatName('Han', 'Solo');
                    expect(result.fullName).toBe('Solo, Han');
                    expect(result.numberOfLetters).toBe(9);
                });
                it('the syntax', () => {
                    let warren: [string, string, number];
                    warren = ['hey', 'yo', 3];

                    // let first = warren[0];
                    // let age = warren[2];

                    let [first, , age] = warren;
                    expect(first).toBe('hey');
                    expect(age).toBe(3);
                });
                it('reformattingNameFunctionToUseTuples', () => {
                    // type ThingWithLetters = string;
                    // let word: ThingWithLetters;

                    function formatNameWithTuples(nameTuple: [string, string, number]): [string, number] {
                        const fullname = `${nameTuple[0]}, ${nameTuple[1]}`;
                        return [fullname, fullname.length];
                    }

                    let NameFormattingInput: [string, string, number];
                    NameFormattingInput = ['Ryan', 'Adkins', 23];

                    const [name, len] = formatNameWithTuples(NameFormattingInput);
                    expect(name).toBe('Ryan, Adkins');
                    expect(len).toBe(12);
                });

                it('using sestrcturing on an array', () => {
                    const friends = ['Reggie', 'Susan', 'Neil'];
                    const [first, , last] = friends;
                    expect(first).toBe('Reggie');

                    const [firstFriend, ...restOfMyFriends] = friends;
                    expect(firstFriend).toBe('Reggie');
                    expect(restOfMyFriends).toEqual(['Susan', 'Neil']);
                });
                it('using the spread operator', () => {
                    const friends = ['Susan', 'Neil'];
                    const newFriends = ['Reggie', ...friends];
                    expect(newFriends).toEqual(['Reggie', 'Susan', 'Neil']);
                });
            });
        });
    });
});