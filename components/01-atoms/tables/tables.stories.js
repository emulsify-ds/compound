import tableTwig from './tables.twig';
import tableData from './tables.yml';

import './_tables.component.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Tables' };

export const tables = () => tableTwig(tableData);
