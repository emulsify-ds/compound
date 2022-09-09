import textWithMediaTwig from './text-with-media.twig';

import textWithMediaData from './text-with-media.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Text With Media',
  argTypes: {
    position: {
      name: 'Positioning',
      type: 'select',
      options: ['left', 'right'],
      defaultValue: 'left',
    },
    textWithMediaContent: {
      name: 'Text With Media Content (optional)',
      type: 'string',
      defaultValue: textWithMediaData.text_with_media__content,
    },
    textWithMediaGroup: {
      name: 'Text With Media Group',
      type: 'string',
      defaultValue: textWithMediaData.text_with_media__group,
    },
  },
};

export const textWithMedia = ({
  position,
  textWithMediaContent,
  textWithMediaGroup,
}) =>
  textWithMediaTwig({
    ...textWithMediaData,
    text_with_media__position: position,
    text_with_media__content: textWithMediaContent,
    text_with_media__group: textWithMediaGroup,
  });
