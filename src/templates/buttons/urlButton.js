import BaseTemplate from '../baseTemplate';

class UrlButton extends BaseTemplate {
    constructor(title, url) {
        super();

        if (!title) {
            throw new Error('Expected title parameter');
        }

        if (!url) {
            throw new Error('Expected url parameter');
        }

        this.template = { type: 'web_url', title, url };
    }
}

export default UrlButton;
