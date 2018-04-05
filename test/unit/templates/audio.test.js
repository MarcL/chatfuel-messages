import Audio from '../../../src/templates/audio';

describe('Audio message', () => {
    it('should throw expected error if url is not passed', () => {
        const functionWrapper = () => new Audio().get();

        expect(functionWrapper).to.throw('Expected url parameter');
    });

    it('should return expected audio response', () => {
        const givenUrl = 'https://given.url';
        const imageMessage = new Audio(givenUrl)
            .get();

        expect(imageMessage).to.deep.equal({
            attachment: {
                type: 'audio',
                payload: {
                    url: givenUrl,
                },
            },
        });
    });
});
