import logo from './logo.twig';

import logoData from './logo.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Logo' };

export const logoExample = () => logo(logoData);
