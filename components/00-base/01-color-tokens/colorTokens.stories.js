import colors from './color-tokens.twig';

import colorsTokens from '../../../tokens/input.json';

const colorsData = { colors: colorsTokens.colors };

export default {
  title: 'Tokens/Colors',
};

export const Colors = () => colors(colorsData);
