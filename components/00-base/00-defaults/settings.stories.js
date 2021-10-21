import {
  borderRadiusControl,
  colorControl,
} from '../../../.storybook/sharedControls';

/**
 * Storybook Definition.
 */
export default {
  title: 'Base/Site Settings',
  argTypes: {
    borderRadius: borderRadiusControl,
    color: colorControl,
  },
};

export const radiusAndColor = ({ borderRadius, color }) => {
  const root = document.documentElement;
  root.style.setProperty('--border-radius', borderRadius);
  root.style.setProperty('--c-primary', color);

  return `
    <p>You can define your site-wide settings on this page, and they will take effect throughout Storybook. Choose your site settings in the "Controls" tab.</p>
    <h2>Primary Color</h2>
    <div style="background: var(--c-primary); height: 100px; width: 100px;"></div>
    <h2>Border Radius</h2>
    <div style="padding: 2rem; display: inline-block; border: 1px solid; border-radius: var(--border-radius);">Check out my border radius!</div>
  `;
};
