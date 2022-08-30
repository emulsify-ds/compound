import alertTwig from './alert.twig';
import buttonTwig from '../../01-atoms/buttons/button.twig';

import alertData from './alert.yml';

import './alert';

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

export const Alert = ({ type, heading, content, linkContent }) => `
<script>
  const resetAlerts = () => {
    Object.keys(localStorage).forEach((key) => {
      if (key.substring(0, 12) === 'ys-alert-id-') {
        localStorage.removeItem(key);
      }
    });

    location.reload();
  };
</script>
${alertTwig({
  alert__type: type,
  alert__heading: heading,
  alert__content: content,
  alert__link__content: linkContent,
  alert__link__url: alertData.alert__link__url,
  alert__id: '123',
})}<br /><h2>Resetting Alerts in Storybook</h2><p>Once you've closed a dismissible alert, they will not show up again, even after page reloads. In order to see them again, here in storybook, click this reset button, and all alerts will be reset to their initial state.</p>
${buttonTwig({
  button__content: 'Reset dismissed alerts',
  button__attributes: { onClick: 'resetAlerts();' },
})}
`;
Alert.argTypes = {
  type: {
    name: 'Alert Type',
    type: 'select',
    options: ['crisis', 'announcement', 'today'],
    defaultValue: 'announcement',
  },
};

export const AlertExamples = ({ heading, content, linkContent }) => `
<script>
  const resetAlerts = () => {
    Object.keys(localStorage).forEach((key) => {
      if (key.substring(0, 12) === 'ys-alert-id-') {
        localStorage.removeItem(key);
      }
    });

    location.reload();
  };
</script>
${alertTwig({
  alert__type: 'crisis',
  alert__heading: heading,
  alert__content: content,
  alert__link__content: linkContent,
  alert__link__url: alertData.alert__link__url,
  alert__id: '234',
  alert__icon: 'emergency',
})}
${alertTwig({
  alert__type: 'announcement',
  alert__heading: heading,
  alert__content: content,
  alert__link__content: linkContent,
  alert__link__url: alertData.alert__link__url,
  alert__id: '345',
})}
${alertTwig({
  alert__type: 'today',
  alert__heading: heading,
  alert__content: content,
  alert__link__content: linkContent,
  alert__link__url: alertData.alert__link__url,
  alert__id: '456',
})}<br />
<h2>Resetting Alerts in Storybook</h2><p>Once you've closed a dismissible alert, they will not show up again, even after page reloads. In order to see them again, here in storybook, click this reset button, and all alerts will be reset to their initial state.</p>
${buttonTwig({
  button__content: 'Reset dismissed alerts',
  button__attributes: { onClick: 'resetAlerts();' },
})}
`;
