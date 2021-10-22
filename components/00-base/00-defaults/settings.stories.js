import gridTwig from '../../03-organisms/grid/grid.twig';
import gridData from '../../03-organisms/grid/grid.yml';
import buttonTwig from '../../01-atoms/buttons/button.twig';

/**
 * Storybook Definition.
 */
export default {
  title: 'Base/Site Settings',
  argTypes: {
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
    borderRadius: {
      type: 'select',
      options: ['None', 'Some', 'More', 'A lot'],
      mapping: {
        None: 'var(--border-radius-none)',
        Some: 'var(--border-radius-some)',
        More: 'var(--border-radius-more)',
        'A lot': 'var(--border-radius-a-lot)',
      },
      defaultValue: 'None',
    },
    spacing: {
      type: 'select',
      options: ['Cozy', 'Compact'],
      mapping: {
        Cozy: 'var(--space-cozy)',
        Compact: 'var(--space-compact)',
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
    <h1>Site Settings</h1>
    <p>You can define "site-wide" settings on this page, and they will take effect throughout Storybook. Make your selections in the "Controls" tab.</p>
    ${/* Primary Color */ ''}
    <h2>Primary Color</h2>
    <div style="background: var(--c-primary); height: 100px; width: 100px;"></div>
    ${/* Border Radius */ ''}
    <h2>Border Radius</h2>
    ${buttonTwig({
      button__content: 'Check out my border radius!',
    })}
    ${/* Spacing */ ''}
    <h2>Spacing</h2>
    ${gridTwig(gridData)}
  `;
};
