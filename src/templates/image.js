import BaseTemplate from './baseTemplate';
import attachment from './attachment';

class Image extends BaseTemplate {
    constructor(url) {
        super();

        if (!url) {
            throw new Error('Expected url parameter');
        }

        this.template.attachment = attachment('image', { url });
    }
}

export default Image;
