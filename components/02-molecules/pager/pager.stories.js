import pager from "./pager.twig";

import pagerData from "./pager.yml";
import pagerNextEllipsesData from "./pager-next-ellipses.yml";
import pagerPrevEllipsesData from "./pager-prev-ellipses.yml";
import pagerBothEllipsesData from "./pager-both-ellipses.yml";
import pagerFirstLastData from "./pager-first-last.yml";

/**
 * Storybook Definition.
 */
export default { title: "Molecules/Menus/Pager" };

export const basic = () => pager(pagerData);

export const withNext = () => pager({ ...pagerData, ...pagerNextEllipsesData });

export const withBoth = () => pager({ ...pagerData, ...pagerBothEllipsesData });

export const withPrevious = () =>
  pager({ ...pagerData, ...pagerPrevEllipsesData });

export const withFirstAndLast = () =>
  pager({ ...pagerData, ...pagerFirstLastData });
