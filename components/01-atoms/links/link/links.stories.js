import link from './link.twig';

import linkData from './link.yml';

import './_link.component.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Links' };

export const links = () => link(linkData);
