import gridTwig from './grid.twig';

import gridData from './grid.yml';
import gridCardData from './grid-cards.yml';
import gridCtaData from './grid-ctas.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Grids' };

export const defaultGrid = () => gridTwig(gridData);

export const cardGrid = () => gridTwig({ ...gridData, ...gridCardData });

export const ctaGrid = () => gridTwig({ ...gridData, ...gridCtaData });
