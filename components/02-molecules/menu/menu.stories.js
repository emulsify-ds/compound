import menuTwig from './menu.twig';

import menuData from './menu.yml';

import './menu';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Menu',
  argTypes: {
    menuLayout: {
      control: {
        type: 'select',
        options: ['inline', 'stacked'],
      },
      defaultValue: 'inline',
    },
    menuAlignment: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
      defaultValue: 'left',
    },
    menuToggle: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    menuLevelToggle: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
};

export const menu = ({
  menuLayout,
  menuAlignment,
  menuToggle,
  menuLevelToggle,
}) =>
  menuTwig({
    ...menuData,
    menu__layout: menuLayout,
    menu__alignment: menuAlignment,
    menu__toggle: menuToggle,
    menu__level_toggle: menuLevelToggle,
  });
