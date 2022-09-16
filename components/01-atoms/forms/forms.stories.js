import checkbox from './checkbox/checkbox.twig';
import radio from './radio/radio.twig';
import select from './select/select.twig';
import textfields from './textfields/textfields.twig';

import checkboxData from './checkbox/checkbox.yml';
import radioData from './radio/radio.yml';
import selectOptionsData from './select/select.yml';

import './checkbox/_checkbox.component.scss';
import './radio/_radio.component.scss';
import './select/_select.component.scss';
import './textfields/_textfields.component.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Forms' };

export const checkboxes = () => checkbox(checkboxData);

export const radioButtons = () => radio(radioData);

export const selectDropdowns = () => select(selectOptionsData);

export const textfieldsExamples = () => textfields();
