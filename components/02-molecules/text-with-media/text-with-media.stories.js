import textWithMedia from './text-with-media.twig';

import textWithMediaData from './text-with-media.yml';

export default { title: 'Molecules/Text With Media' };

export const textWithMediaExample = () => textWithMedia(textWithMediaData);
