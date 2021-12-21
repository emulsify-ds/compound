import accordionTwig from './accordion.twig';

import accordionData from './accordion.yml';

import './accordion';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Accordion',
  argTypes: {
    accordionFocus: {
      control: {
        type: 'select',
        options: ['all', 'single'],
      },
      defaultValue: 'single',
    },
  },
};

export const accordion = ({ accordionFocus }) =>
  accordionTwig({
    ...accordionData,
    accordion__focus: accordionFocus,
  });
