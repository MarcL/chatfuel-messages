import BaseTemplate from './baseTemplate';
import attachment from './attachment';

class File extends BaseTemplate {
    constructor(url) {
        super();

        if (!url) {
            throw new Error('Expected url parameter');
        }

        this.template.attachment = attachment('file', { url });
    }
}

export default File;
