import menu from './menu.twig';

import menuData from './menu.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Menu' };

export const baseMenu = () => menu(menuData);
