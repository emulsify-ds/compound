import grid from './grid.twig';

import gridData from './grid.yml';

import './_grid.component.scss';
import './_grid-item.component.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Grids' };

export const defaultGrid = () => grid(gridData);

// export const cardGrid = () => grid({ ...gridData, ...gridCardData });

// export const ctaGrid = () => grid({ ...gridData, ...gridCtaData });
