import Text from '../../src/templates/text';

describe('Text message', () => {
    it('should throw expected error if text is not passed', () => {
        const functionWrapper = () => new Text().get();

        expect(functionWrapper).to.throw('Expected text parameter');
    });

    it('should return expected text response', () => {
        const givenText = 'given text';
        const textMessage = new Text(givenText)
            .get();

        expect(textMessage).to.deep.equal({
            text: givenText,
        });
    });
});
