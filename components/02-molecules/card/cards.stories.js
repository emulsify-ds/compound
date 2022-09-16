import card from './card.twig';

import cardData from './card.yml';
import cardBgData from './card-bg.yml';

import './_card.component.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Cards' };

export const cardExample = () => card(cardData);

export const cardWithBackground = () => card({ ...cardData, ...cardBgData });
