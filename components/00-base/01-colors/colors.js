Drupal.behaviors.displayColorDefinitions = {
  attach() {
    /**
     * Converts a number to a two-digit hexadecimal string.
     *
     * @param {number} x The number to convert.
     * @returns {string} Two-digit hexadecimal representation of the number.
     */
    function hex(x) {
      return `0${parseInt(x, 10).toString(16)}`.slice(-2);
    }

    /**
     * Converts an rgb color string to a hex color string.
     *
     * @param {string} color The RGB color string (e.g., 'rgb(255, 255, 255)').
     * @returns {string} The hexadecimal color string (e.g., '#ffffff').
     */
    function rgb2hex(color) {
      const rgb = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      return `#${hex(rgb[1])}${hex(rgb[2])}${hex(rgb[3])}`;
    }

    const swatches = document.querySelectorAll('.cl-colors__item');
    if (swatches) {
      swatches.forEach((swatch) => {
        const color = window
          .getComputedStyle(swatch.querySelector('.cl-colors__swatch'), null)
          .getPropertyValue('background-color');

        const definition = swatch.querySelector('.cl-colors__definition');
        definition.textContent = rgb2hex(color);
      });
    }
  },
};
