import MessageBuilder from '../../src/messageBuilder';
import Text from '../../src/templates/text';

describe('MessageBuilder', () => {
    it('should return an empty object if nothing is added', () => {
        const response = new MessageBuilder().get();

        expect(response).to.deep.equal({});
    });

    describe('addMessage()', () => {
        it('should return expected response is one message is added', () => {
            const response = new MessageBuilder()
                .addMessage(new Text('test message'))
                .get();

            expect(response).to.deep.equal({
                messages: [
                    { text: 'test message' },
                ],
            });
        });

        it('should return expected response if two messages are added', () => {
            const response = new MessageBuilder()
                .addMessage(new Text('test message'))
                .addMessage(new Text('test message 2'))
                .get();

            expect(response).to.deep.equal({
                messages: [
                    { text: 'test message' },
                    { text: 'test message 2' },
                ],
            });
        });
    });

    describe('addTextMessage()', () => {
        it('should return expected response if added', () => {
            const givenTextMessage = 'given text message';

            const response = new MessageBuilder()
                .addTextMessage(givenTextMessage)
                .get();

            expect(response).to.deep.equal({
                messages: [
                    { text: givenTextMessage },
                ],
            });
        });
    });

    describe('addImageMessage()', () => {
        it('should return expected response if added', () => {
            const givenUrl = 'https://given.url';

            const response = new MessageBuilder()
                .addImageMessage(givenUrl)
                .get();

            expect(response).to.deep.equal({
                messages: [
                    {
                        attachment: {
                            type: 'image',
                            payload: {
                                url: givenUrl,
                            },
                        },
                    },
                ],
            });
        });
    });
});
