import alertTwig from './alert.twig';
import paragraphTwig from '../../01-atoms/text/text/01-paragraph.twig';
import buttonTwig from '../../01-atoms/buttons/button.twig';

import alertData from './alert.yml';

import './alert';
console.log(alertData);
/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Alert',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    heading: {
      name: 'Alert Heading',
      type: 'string',
      defaultValue: alertData.alert__heading,
    },
    content: {
      name: 'Alert Content',
      type: 'string',
      defaultValue: alertData.alert__content,
    },
    linkContent: {
      name: 'Alert Link Text',
      type: 'string',
      defaultValue: alertData.alert__link__content,
    },
  },
};

const alertResetInstructions = `
<h2>Resetting Alerts in Storybook</h2><p>Once you've closed a dismissible alert, they will not show up again, even after page reloads. In order to see them again, here in storybook, click this reset button, and all alerts will be reset to their initial state.</p>
${buttonTwig({
  button__content: 'Reset dismissed alerts',
  button__attributes: { onClick: 'resetAlerts();' },
})}
`;

export const Alert = ({ type, heading, content, linkContent }) => `
<script>
  const resetAlerts = () => {
    Object.keys(localStorage).forEach((key) => {
      if (key.includes('alert-id-')) {
        localStorage.removeItem(key);
      }
    });

    location.reload();
  };
</script>
${alertTwig({
  alert_type: type,
  alert__heading: heading,
  alert__content: content,
  alert__link__content: linkContent,
  alert__link__url: alertData.alert__link__url,
  alert_id: '123',
})}<br />
${paragraphTwig({
  paragraph_content: alertResetInstructions,
})}`;
Alert.argTypes = {
  type: {
    name: 'Alert Type',
    type: 'select',
    options: ['emergency', 'announcement', 'marketing'],
    defaultValue: 'announcement',
  },
};

export const AlertExamples = ({ heading, content, linkContent }) => `
<script>
  const resetAlerts = () => {
    Object.keys(localStorage).forEach((key) => {
      if (key.includes('alert-id-')) {
        localStorage.removeItem(key);
      }
    });

    location.reload();
  };
</script>
${alertTwig({
  alert_type: 'emergency',
  alert_heading: heading,
  alert_content: content,
  alert_link__content: linkContent,
  alert_link__url: alertData.alert_link__url,
  alert_id: '234',
})}
${alertTwig({
  alert_type: 'announcement',
  alert_heading: heading,
  alert_content: content,
  alert_link__content: linkContent,
  alert_link__url: alertData.alert_link__url,
  alert_id: '345',
})}
${alertTwig({
  alert_type: 'marketing',
  alert_heading: heading,
  alert_content: content,
  alert_link__content: linkContent,
  alert_link__url: alertData.alert_link__url,
  alert_id: '456',
})}<br />
${paragraphTwig({
  paragraph_content: alertResetInstructions,
})}`;
