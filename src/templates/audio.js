import BaseTemplate from './baseTemplate';
import attachment from './attachment';

class Audio extends BaseTemplate {
    constructor(url) {
        super();

        if (!url) {
            throw new Error('Expected url parameter');
        }

        this.template.attachment = attachment('audio', { url });
    }
}

export default Audio;
