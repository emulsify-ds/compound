import template from './sizing.twig';

import tokens from '../../../tokens/input.json';

const data = { sizing: tokens.sizing };

export default {
  title: 'Tokens/Sizing',
};

export const Sizing = () => template(data);
