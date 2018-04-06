import MessageBuilder from '../../src/messageBuilder';
import Text from '../../src/templates/text';

describe('MessageBuilder', () => {
    it('should return an empty object if nothing is added', () => {
        const response = new MessageBuilder().get();

        expect(response).to.deep.equal({});
    });

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

    it('should return expected response is two messages are added', () => {
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
