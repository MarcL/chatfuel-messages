import ShareButton from '../../../../src/templates/buttons/shareButton';

describe.only('Share button', () => {
    it('should return expected button response', () => {
        const imageMessage = new ShareButton()
            .get();

        expect(imageMessage).to.deep.equal({
            type: 'element_share',
        });
    });
});
