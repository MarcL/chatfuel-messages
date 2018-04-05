import Audio from '../../../src/templates/audio';

describe('Audio message', () => {
    it('should throw expected error if url is not passed', () => {
        const functionWrapper = () => new Audio().get();

        expect(functionWrapper).to.throw('Expected url parameter');
    });

    ['mp3', 'ogg', 'wav'].forEach((audioExtension) => {
        it(`should not throw expected error if url is a valid audio format (${audioExtension})`, () => {
            const invalidUrl = `https://invalid.url/test.${audioExtension}`;
            const functionWrapper = () => new Audio(invalidUrl).get();

            // eslint-disable-next-line no-unused-expressions
            expect(functionWrapper).to.not.throw;
        });
    });

    it('should throw expected error if url is an invalid audio format', () => {
        const invalidUrl = 'https://invalid.url/test.mp4';
        const functionWrapper = () => new Audio(invalidUrl).get();

        expect(functionWrapper).to.throw('Url must point to a valid audio file (mp3, ogg or wav)');
    });

    it('should return expected audio response', () => {
        const givenUrl = 'https://given.url/test.mp3';
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
