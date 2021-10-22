import cta from './cta.twig';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/CTA',
  argTypes: {
    ctaHeading: {
      control: {
        type: 'text',
      },
      defaultValue: 'This is a reason to act',
    },
    buttonText: {
      control: {
        type: 'text',
      },
      defaultValue: 'Click Here',
    },
  },
};

export const ctaExample = ({ ctaHeading, buttonText }) =>
  cta({ cta__heading: ctaHeading, cta__button__text: buttonText });
