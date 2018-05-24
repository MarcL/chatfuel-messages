import UrlButton from '../../../../src/templates/buttons/urlButton';

describe('URL button', () => {
    const defaultText = 'defaultText';

    it('should throw expected error if title is not passed', () => {
        const functionWrapper = () => new UrlButton().get();

        expect(functionWrapper).to.throw('Expected title parameter');
    });

    it('should throw expected error if url is not passed', () => {
        const functionWrapper = () => new UrlButton(defaultText).get();

        expect(functionWrapper).to.throw('Expected url parameter');
    });

    it('should return expected button response', () => {
        const givenTitle = 'given title';
        const givenUrl = 'https://given.url';
        const imageMessage = new UrlButton(givenTitle, givenUrl)
            .get();

        expect(imageMessage).to.deep.equal({
            type: 'web_url',
            title: givenTitle,
            url: givenUrl,
        });
    });
});
