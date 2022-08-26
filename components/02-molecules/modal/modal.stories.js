import modalTwig from './modal.twig';

import modalData from './modal.yml';

import './modal';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Modal',
};

export const modalButton = () => {
  return modalTwig({ ...modalData });
};

export const modalAjaxLink = () => {
  return modalTwig({
    ...modalData,
    modal__toggle:
      '<a href="http://localhost:6006/?path=/story/molecules-modal--modal-ajax-link">Ajax modal data</a>',
  });
};

export const modalText = () => {
  return modalTwig({
    ...modalData,
    modal__toggle: '<p>Plain Ol Text</p>',
  });
};

export const modalMedia = () => {
  return modalTwig({
    ...modalData,
    modal__toggle:
      '<img src="https://placeimg.com/320/180/any" alt="Example image to trigger the modal">',
  });
};
