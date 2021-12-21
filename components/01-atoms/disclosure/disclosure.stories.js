import disclosureTwig from './disclosure.twig';

import disclosureData from './disclosure.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Disclosure',
  argTypes: {
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
export const disclosure = ({ disclosureSummary, disclosureContent }) =>
  disclosureTwig({
    ...disclosureData,
    disclosure__summary: disclosureSummary,
    disclosure_content: disclosureContent,
  });
