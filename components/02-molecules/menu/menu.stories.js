import menuTwig from './menu.twig';

import menuData from './menu.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Menu' };

export const menu = () => menuTwig(menuData);
