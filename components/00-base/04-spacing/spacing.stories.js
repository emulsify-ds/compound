import spacingTwig from './spacing.twig';
import spacingData from './spacing.yml';

export default {
  title: 'Base/Spacing',
};

export const Spacing = () => spacingTwig(spacingData);
