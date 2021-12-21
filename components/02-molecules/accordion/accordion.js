Drupal.behaviors.accordionToggle = {
  attach(context) {
    const accordion = context.querySelector('.accordion');

    // Toggle aria-expanded attribute.
    function toggleAria(el) {
      let x = el.getAttribute('aria-expanded');
      if (x === 'true') {
        x = 'false';
      } else {
        x = 'true';
      }
      el.setAttribute('aria-expanded', x);
    }

    function getSiblings(el) {
      const siblings = [];
      // Exit if siblings are grouped.
      if (!el.parentNode) {
        return siblings;
      }
      // First child of the parent.
      let sibling = el.parentNode.firstChild;

      // Add siblings to array.
      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== el) {
          siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
      }
      return siblings;
    }

    // Toggle mobile menu classes when clicked.
    if (accordion) {
      const toggleExpand = accordion.getElementsByClassName('disclosure');

      Array.prototype.forEach.call(toggleExpand, (item) => {
        item.addEventListener('click', () => {
          toggleAria(item);
          if (
            item.parentNode.getAttribute('data-accordion-focus') === 'single'
          ) {
            getSiblings(item).forEach((sibling) => {
              sibling.removeAttribute('open');
              sibling.setAttribute('aria-expanded', 'false');
            });
          }
        });
      });
    }
  },
};
