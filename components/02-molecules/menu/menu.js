Drupal.behaviors.menuToggle = {
  attach(context) {
    const menu = context.querySelector('.menu-with-toggle');

    function toggleAria(el) {
      let x = el.getAttribute('aria-expanded');
      if (x === 'true') {
        x = 'false';
      } else {
        x = 'true';
      }
      el.setAttribute('aria-expanded', x);
    }

    function toggleMenu(el, menuName) {
      // Toggle aria or class for menu lists.
      if (el.parentElement.hasAttribute('aria-label')) {
        toggleAria(el.parentElement);
      }
      // Toggle open menu if expand/back button is clicked.
      else if (
        el.nextElementSibling &&
        el.nextElementSibling.classList.contains(`${menuName}__menu-list--sub`)
      ) {
        el.nextElementSibling.classList.toggle('sub--open');
      } else {
        el.parentElement.parentElement.classList.toggle('sub--open');
      }
    }

    // Toggle mobile menu classes when clicked.
    if (menu) {
      const toggleExpand = menu.getElementsByClassName(`${menu.id}__toggle`);

      Array.prototype.forEach.call(toggleExpand, (item) => {
        item.addEventListener('click', () => {
          toggleAria(item);
          toggleMenu(item, menu.id);
        });
      });
    }
  },
};
