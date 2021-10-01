import accordionTwig from './accordion.twig';

import accordionData from './accordion.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Accordion',
  argTypes: {
    accordionLayout: {
      control: {
        type: 'select',
        options: ['stacked', 'tooltip'],
      },
      defaultValue: 'stacked',
    },
    accordionPosition: {
      control: {
        type: 'select',
        options: ['top', 'bottom'],
      },
      defaultValue: 'top',
    },
    accordionAlignment: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
      defaultValue: 'left',
    },
  },
};

export const accordion = ({
  accordionLayout,
  accordionPosition,
  accordionAlignment,
}) =>
  accordionTwig({
    ...accordionData,
    accordion__layout: accordionLayout,
    accordion__position: accordionPosition,
    accordion__alignment: accordionAlignment,
  });
