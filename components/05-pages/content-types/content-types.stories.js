import '../../03-organisms/menus/main-menu/main-menu';

import articleTwig from './article.twig';

import mainMenuData from '../../03-organisms/menus/main-menu/main-menu.yml';
import breadcrumbData from '../../03-organisms/menus/breadcrumbs/breadcrumbs.yml';
import socialMenuData from '../../03-organisms/menus/social/social-menu.yml';
import footerMenuData from '../../03-organisms/menus/inline/inline-menu.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Pages/Content Types',
  parameters: {
    layout: 'fullscreen',
  },
};

export const article = () =>
  articleTwig({
    page_layout_modifier: 'contained',
    ...mainMenuData,
    ...breadcrumbData,
    ...socialMenuData,
    ...footerMenuData,
    card__link__text: 'Click here',
  });
