import footerTwig from './site-footer/site-footer.twig';
import siteHeader from './site-header/site-header.twig';

import footerSocial from '../menus/social/social-menu.yml';
import footerMenu from '../menus/inline/inline-menu.yml';
import breadcrumbData from '../menus/breadcrumbs/breadcrumbs.yml';
import mainMenuData from '../menus/main-menu/main-menu.yml';

import '../menus/main-menu/main-menu';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Site' };

export const footer = () => footerTwig({ ...footerSocial, ...footerMenu });

export const header = () =>
  siteHeader({
    ...breadcrumbData,
    ...mainMenuData,
  });
