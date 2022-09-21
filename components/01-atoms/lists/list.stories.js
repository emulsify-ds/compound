import listTwig from './list.twig';
import dlTwig from './dl.twig';

import listData from './list.yml';
import dlData from './dl.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Lists' };

export const UnorderedList = () => `
  <div class="text-field">
    ${listTwig({ list__items: listData.unordered__list__items })}
  </div>
`;
export const OrderedList = () => `
<div class="text-field">
  ${listTwig({ list__items: listData.ordered__list__items, list__type: 'ol' })}
</div>
`;
export const DescriptionList = () => `
<div class="text-field">
  ${dlTwig({
    dl__items: dlData.dl__items,
    list__type: 'dl',
    list__base_class: 'description',
  })}
</div>
`;
