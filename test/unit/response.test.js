import Response from '../../src/response';
import Text from '../../src/templates/text';

describe('Response message', () => {
    it('should return an empty object if nothing is added', () => {
        const response = new Response().get();

        expect(response).to.deep.equal({});
    });

    it('should return expected response is one message is added', () => {
        const response = new Response()
            .addMessage(new Text('test message'))
            .get();

        expect(response).to.deep.equal({
            messages: [
                { text: 'test message' },
            ],
        });
    });

    it('should return expected response is two messages are added', () => {
        const response = new Response()
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
