import tooltip from './tooltip.twig';
import tooltipData from './tooltip.yml';
import './tooltip';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Tooltip',
  argTypes: {
    direction: {
      name: 'Direction',
      options: ['top', 'right', 'bottom', 'left'],
      type: 'select',
      defaultValue: tooltipData.tooltip__direction,
    },
  },
};

export const tooltipExample = ({ direction }) => `
  <div style="min-height: 100vh; transform: translateY(50%)">  
    ${tooltip({
      tooltip__icon: tooltipData.tooltip__icon,
      tooltip__content: tooltipData.tooltip__content,
      tooltip__direction: direction,
    })}
  </div>
`;
