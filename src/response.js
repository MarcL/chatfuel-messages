import BaseTemplate from './templates/baseTemplate';

class Response extends BaseTemplate {
    addMessage(message) {
        if (!this.template.messages) {
            this.template.messages = [];
        }

        this.template.messages = [...this.template.messages, message.get()];

        return this;
    }
}

export default Response;
