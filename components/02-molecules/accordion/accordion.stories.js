import accordionTwig from './accordion.twig';

import accordionData from './accordion.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Accordion' };

export const accordion = () => accordionTwig(accordionData);
