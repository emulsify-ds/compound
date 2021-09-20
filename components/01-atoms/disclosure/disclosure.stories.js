import disclosureTwig from './disclosure.twig';

import disclosureData from './disclosure.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Disclosure',
  argTypes: {
    disclosureLayout: {
      control: {
        type: 'select',
        options: ['stacked', 'tooltip'],
      },
      defaultValue: 'stacked',
    },
    disclosurePosition: {
      control: {
        type: 'select',
        options: ['top', 'bottom'],
      },
      defaultValue: 'top',
    },
    disclosureAlignment: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
      defaultValue: 'left',
    },
    disclosureSummary: {
      control: {
        type: 'text',
      },
      defaultValue: disclosureData.disclosure_summary,
    },
    disclosureContent: {
      control: {
        type: 'text',
      },
      defaultValue: disclosureData.disclosure_content,
    },
  },
};

/**
 * Storybook Definition.
 */
export const disclosure = ({
  disclosureLayout,
  disclosurePosition,
  disclosureAlignment,
  disclosureSummary,
  disclosureContent,
}) =>
  disclosureTwig({
    ...disclosureData,
    disclosure__position: disclosurePosition,
    disclosure__layout: disclosureLayout,
    disclosure__alignment: disclosureAlignment,
    disclosure__summary: disclosureSummary,
    disclosure_content: disclosureContent,
  });
