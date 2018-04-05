import BaseTemplate from './baseTemplate';
import attachment from './attachment';

const isValidVideoUrl = url => /\.(mp4)$/.test(url);

class Video extends BaseTemplate {
    constructor(url) {
        super();

        if (!url) {
            throw new Error('Expected url parameter');
        }

        if (!isValidVideoUrl(url)) {
            throw new Error('Url must point to an MP4 file');
        }

        this.template.attachment = attachment('video', { url });
    }
}

export default Video;
