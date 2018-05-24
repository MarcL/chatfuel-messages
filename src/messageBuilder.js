import BaseTemplate from './templates/baseTemplate';
import Text from './templates/text';
import Image from './templates/image';

class MessageBuilder extends BaseTemplate {
    addMessage(message) {
        if (!this.template.messages) {
            this.template.messages = [];
        }

        this.template.messages = [...this.template.messages, message.get()];

        return this;
    }

    addTextMessage(text) {
        this.addMessage(new Text(text));

        return this;
    }

    addImageMessage(url) {
        this.addMessage(new Image(url));

        return this;
    }
}

export default MessageBuilder;
