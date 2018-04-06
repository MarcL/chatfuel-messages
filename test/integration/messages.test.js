import { MessageBuilder, Text } from '../../src/';

describe('Chatfuel messages', () => {
    it('should render expected messages', () => {
        const response = new MessageBuilder()
            .addMessage(new Text('Test message 1'))
            .addMessage(new Text('Test message 2'))
            .addMessage(new Text('Test message 3'))
            .get();

        const expectedMessage = {
            messages: [
                { text: 'Test message 1' },
                { text: 'Test message 2' },
                { text: 'Test message 3' },
            ],
        };

        expect(response).to.deep.equal(expectedMessage);
    });
});
