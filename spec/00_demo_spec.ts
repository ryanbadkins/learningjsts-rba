describe('writing basic specs', () => {
    it('can add two numbers together', () => {
        //given
        const a = 10, b = 20;
        //when
        const answer = a + b;
        //then
        expect(answer).toBe(30);
    });
});