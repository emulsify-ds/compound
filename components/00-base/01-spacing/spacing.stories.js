import template from './spacing.twig';

import tokens from '../../../tokens/input.json';

const data = { spacing: tokens.spacing };

export default {
  title: 'Tokens/Spacing',
};

export const Spacing = () => template(data);
