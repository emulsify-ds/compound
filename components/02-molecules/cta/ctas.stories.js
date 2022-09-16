import cta from './cta.twig';

import ctaData from './cta.yml';

import './_cta.component.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/CTA' };

export const ctaExample = () => cta(ctaData);
