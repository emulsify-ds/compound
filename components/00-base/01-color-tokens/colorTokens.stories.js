import template from './color-tokens.twig';

import tokens from '../../../tokens/input.json';

const data = { colors: tokens.colors };

export default {
  title: 'Tokens/Colors',
};

export const Colors = () => template(data);
