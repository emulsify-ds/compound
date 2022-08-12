import listTwig from './list.twig';

import listData from './list.yml';

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
export const InlineListUL = () => `
<div class="text-field">
  ${listTwig({
    list__items: listData.inline__list__items,
    list__type: 'ul',
    list__base_class: 'inline-ul',
  })}
</div>
`;
export const InlineListOL = () => `
<div class="text-field">
  ${listTwig({
    list__items: listData.inline__list__items,
    list__type: 'ol',
    list__base_class: 'inline-ol',
  })}
</div>
`;
