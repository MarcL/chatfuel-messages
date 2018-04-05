import Video from '../../../src/templates/video';

describe('Video message', () => {
    it('should throw expected error if url is not passed', () => {
        const functionWrapper = () => new Video().get();

        expect(functionWrapper).to.throw('Expected url parameter');
    });

    it('should throw expected error if url is not an mp4', () => {
        const invalidUrl = 'https://invalid.url/test.mp3';
        const functionWrapper = () => new Video(invalidUrl).get();

        expect(functionWrapper).to.throw('Url must point to an MP4 file');
    });

    it('should not throw an error if url is an mp4', () => {
        const invalidUrl = 'https://invalid.url/test.mp4';
        const functionWrapper = () => new Video(invalidUrl).get();

        // eslint-disable-next-line no-unused-expressions
        expect(functionWrapper).to.throw;
    });

    it('should return expected video response', () => {
        const givenUrl = 'https://given.url/test.mp4';
        const imageMessage = new Video(givenUrl)
            .get();

        expect(imageMessage).to.deep.equal({
            attachment: {
                type: 'video',
                payload: {
                    url: givenUrl,
                },
            },
        });
    });
});
