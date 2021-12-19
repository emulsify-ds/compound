import footerTwig from './site-footer/site-footer.twig';
import siteHeader from './site-header/site-header.twig';

import footerMenu from '../menus/footer/footer-menu.yml';
import breadcrumbData from '../menus/breadcrumbs/breadcrumbs.yml';
import mainMenuData from '../menus/main-menu/main-menu.yml';

import '../../02-molecules/menu/menu';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Site' };

export const footer = () => footerTwig({ ...footerMenu });

export const header = () =>
  siteHeader({
    ...breadcrumbData,
    ...mainMenuData,
  });
