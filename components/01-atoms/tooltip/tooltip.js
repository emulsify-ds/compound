Drupal.behaviors.tooltip = {
  attach(context) {
    const tooltips = context.querySelectorAll('.js-tooltip');

    /**
     * clickOutside
     *
     * @description Hides tooltip if clicked outside
     * @param {HTMLElement} tooltip The tooltip container
     * @param {HTMLElement} tip The tooltip content to close
     */
    function clickOutside(tooltip, tip) {
      document.addEventListener('click', (event) => {
        if (!tooltip.contains(event.target)) {
          tip.classList.remove('tooltip__content--visible');
        }
      });
    }

    /**
     * toggleTip
     *
     * @description Displays tooltip. Returns nothing.
     * @param {HTMLElement} tooltip The tooltip container
     * @param {HTMLElement} tooltipButton The button controlling display
     */
    function toggleTip(tooltip, tooltipButton) {
      const tip = tooltip.querySelector('.js-tooltip__content');
      const hasTip = tip.classList.contains('tooltip__content--visible');

      if (!hasTip) {
        tooltipButton.setAttribute('aria-expanded', 'true');
        tip.classList.add('tooltip__content--visible');
      } else {
        tooltipButton.setAttribute('aria-expanded', 'false');
        tip.classList.remove('tooltip__content--visible');
      }

      clickOutside(tooltip, tip);
    }

    /**
     * init
     *
     * @description Initializes the component by attaching event listeners
     *  to each of the tooltips.
     */
    tooltips.forEach((tip) => {
      const tipButton = tip.querySelector('.tooltip__icon');
      tipButton.addEventListener('click', () => {
        toggleTip(tip, tipButton);
      });

      // Keyboard controls for closing the modal
      tipButton.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') {
          toggleTip(tip, tipButton);
        }
      });
    });
  },
};
