Drupal.behaviors.modal = {
  attach(context) {
    // Variables
    const modals = context.querySelector('.modal');
    let activeModal = context.querySelector('.modal--active');
    const focusableElements =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    // Check if an element is completely empty.
    function isEmpty(node) {
      return node.innerHTML.trim() === '';
    }

    // Toggle aria-[anything] attribute from true / false.
    function toggleAria(el, aria) {
      let x = el.getAttribute(`aria-${aria}`);
      if (x === 'true') {
        x = 'false';
      } else {
        x = 'true';
      }
      el.setAttribute(`aria-${aria}`, x);
    }

    // Traps keyboard focus when modal is open for ADA compliance
    function trapKeyboard(modal) {
      const firstFocusableElement =
        modal.querySelectorAll(focusableElements)[0];
      const focusableContent = modal.querySelectorAll(focusableElements);
      const lastFocusableElement =
        focusableContent[focusableContent.length - 1];

      modal.addEventListener('keydown', (e) => {
        const isTabPressed = e.key === 'Tab' || e.keyCode === 9;

        if (!isTabPressed) {
          return;
        }

        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      });

      firstFocusableElement.focus();
    }

    // Toggle tabindex focus attribute.
    function toggletabIndex(el) {
      let x = el.getAttribute('tabindex');
      if (x === '-1') {
        x = '1';
      } else {
        x = '-1';
      }
      el.setAttribute('tabindex', x);
    }

    // Toggle Modal
    function toggleModal(modal) {
      const overlay = modal.querySelector('.modal__overlay');
      const modalModalPane = modal.querySelector('.modal__pane');
      if (overlay) {
        overlay.classList.toggle('modal__overlay--active');
      }
      modal.classList.toggle('modal--active');
      activeModal = context.querySelector('.modal--active');
      toggleAria(modalModalPane, 'hidden');
      toggleAria(modal, 'expanded');
      trapKeyboard(modalModalPane);
      toggletabIndex(modalModalPane);
    }

    // AJAX Request data from url + CSS selector.
    function ajaxRequest(request, url, selector) {
      let response = '';
      request.onreadystatechange = function processResponse() {
        if (request.status === 200) {
          const resp = request.responseText;
          const parser = new DOMParser();
          const htmlDoc = parser.parseFromString(resp, 'text/html');
          const remoteselector = htmlDoc.querySelectorAll(selector);

          response = remoteselector[0].innerHTML;
        } else {
          response = `<p>Could not process request. Error code: ${request.status}</p>`;
        }
      };
      request.open('GET', url, false);
      request.send();

      return response;
    }

    if (modals) {
      [modals].forEach((modal) => {
        const modalToggle = modal.querySelectorAll('.modal__toggle');
        const modalModalContent = modal.querySelector('.modal__content');
        const modalOverlay = modal.querySelector('.modal__overlay');

        modalToggle.forEach((toggle) => {
          toggle.addEventListener('click', (e) => {
            const toggleChild = toggle.children[0];
            e.preventDefault();

            // First check if the child of toggle is a link.
            // Attempt to request the <main> from the link's href.
            if (
              typeof toggleChild !== 'undefined' &&
              toggleChild.tagName === 'A' &&
              toggleChild.getAttribute('href') !== null
            ) {
              e.preventDefault();
              const request = new XMLHttpRequest();
              const url = toggleChild.getAttribute('href');
              const response = ajaxRequest(
                request,
                url,
                '#storybook-preview-iframe',
              );
              modalModalContent.innerHTML = response;
            }
            // On trigger the modal if content is present.
            if (isEmpty(modalModalContent) === false) {
              toggleModal(modal);
            }
          });
        });
        [modalOverlay].forEach((overlay) => {
          overlay.addEventListener('click', () => {
            toggleModal(modal);
          });
        });
      });
    }

    // Keyboard controls for closing the modal
    context.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        toggleModal(activeModal);
      }
    });
  },
};
