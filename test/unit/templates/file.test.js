import File from '../../../src/templates/file';

describe('Audio message', () => {
    it('should throw expected error if url is not passed', () => {
        const functionWrapper = () => new File().get();

        expect(functionWrapper).to.throw('Expected url parameter');
    });

    it('should return expected file response', () => {
        const givenUrl = 'https://given.url/file.pdf';
        const imageMessage = new File(givenUrl)
            .get();

        expect(imageMessage).to.deep.equal({
            attachment: {
                type: 'file',
                payload: {
                    url: givenUrl,
                },
            },
        });
    });
});
