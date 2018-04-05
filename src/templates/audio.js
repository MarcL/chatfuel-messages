import BaseTemplate from './baseTemplate';
import attachment from './attachment';

const isValidAudioUrl = url => /\.(mp3|ogg|wav)$/.test(url);

class Audio extends BaseTemplate {
    constructor(url) {
        super();

        if (!url) {
            throw new Error('Expected url parameter');
        }

        if (!isValidAudioUrl(url)) {
            throw new Error('Url must point to a valid audio file (mp3, ogg or wav)');
        }

        this.template.attachment = attachment('audio', { url });
    }
}

export default Audio;
