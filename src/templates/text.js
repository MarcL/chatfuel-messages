import BaseTemplate from './baseTemplate';

class Text extends BaseTemplate {
    constructor(text) {
        super();

        if (!text) {
            throw new Error('Expected text parameter');
        }

        this.template.text = text;
    }
}

export default Text;
