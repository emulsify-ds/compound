// Buttons Stories
import buttonTwig from './button.twig';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Buttons',
  component: 'Button',
  argTypes: {
    buttonSize: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      defaultValue: 'medium',
    },
    buttonText: {
      control: {
        type: 'text',
      },
      defaultValue: 'Button Text',
    },
    borderRadius: {
      control: {
        type: 'select',
        options: ['None', '4px', '8px', '100vmax'],
      },
      defaultValue: 'None',
    },
  },
};

export const buttonVariations = ({ buttonText, buttonSize, borderRadius }) => {
  const root = document.documentElement;
  root.style.setProperty('--border-radius', borderRadius);

  return `
    <p><strong>Primary</strong></p>
    ${buttonTwig({
      button__content: buttonText,
      button__size: buttonSize,
    })}<br />
    <p><strong>Secondary</strong></p>
    ${buttonTwig({
      button__content: buttonText,
      button__size: buttonSize,
      button__variation: 'secondary',
    })}<br />
    <p><strong>Tertiary</strong></p>
    ${buttonTwig({
      button__content: buttonText,
      button__size: buttonSize,
      button__variation: 'tertiary',
    })}
  `;
};
