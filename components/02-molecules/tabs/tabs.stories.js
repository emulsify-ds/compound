import tabs from './tabs.twig';

import tabData from './tabs.yml';

import './tabs';

import './_tab.component.scss';
import './_tabs.component.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Tabs' };

export const JSTabs = () => tabs(tabData);
