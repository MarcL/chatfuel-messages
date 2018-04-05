import Image from '../../../src/templates/image';

describe('Image message', () => {
    it('should throw expected error if url is not passed', () => {
        const functionWrapper = () => new Image().get();

        expect(functionWrapper).to.throw('Expected url parameter');
    });

    it('should return expected image response', () => {
        const givenUrl = 'https://given.url';
        const imageMessage = new Image(givenUrl)
            .get();

        expect(imageMessage).to.deep.equal({
            attachment: {
                type: 'image',
                payload: {
                    url: givenUrl,
                },
            },
        });
    });
});
