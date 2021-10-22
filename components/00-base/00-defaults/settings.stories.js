import gridTwig from '../../03-organisms/grid/grid.twig';
import gridData from '../../03-organisms/grid/grid.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Base/Site Settings',
  argTypes: {
    borderRadius: {
      type: 'select',
      options: ['None', 'Some', 'More', 'A lot'],
      mapping: {
        None: '0px',
        Some: '0.5rem',
        More: '1rem',
        'A lot': '100vmax',
      },
      defaultValue: 'None',
    },
    color: {
      type: 'select',
      options: ['Yale', 'Forest', 'Beach'],
      mapping: {
        Yale: '#000f9f',
        Forest: '#136740',
        Beach: '#e9bf16',
      },
      defaultValue: 'Yale',
    },
    spacing: {
      type: 'select',
      options: ['Cozy', 'Compact'],
      mapping: {
        Cozy: '2rem',
        Compact: '1rem',
      },
      defaultValue: 'Cozy',
    },
  },
};

export const radiusAndColor = ({ borderRadius, color, spacing }) => {
  const root = document.documentElement;
  root.style.setProperty('--border-radius', borderRadius);
  root.style.setProperty('--c-primary', color);
  root.style.setProperty('--grid-gutter', spacing);

  return `
    <p>You can define your site-wide settings on this page, and they will take effect throughout Storybook. Choose your site settings in the "Controls" tab.</p>
    <h2>Primary Color</h2>
    <div style="background: var(--c-primary); height: 100px; width: 100px;"></div>
    <h2>Border Radius</h2>
    <div style="padding: 2rem; display: inline-block; border: 1px solid; border-radius: var(--border-radius);">Check out my border radius!</div>
    <h2>Spacing</h2>
    ${gridTwig(gridData)}
  `;
};
