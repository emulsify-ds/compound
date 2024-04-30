Drupal.behaviors.accordion = {
  attach(context) {
    // Selectors
    const items = context.querySelectorAll(".js-accordion-sdc-item");
    const controls = context.querySelectorAll(".js-accordion_sdc__controls");
    // Classes
    const itemToggle = ".js-accordion-sdc-item__toggle";
    const itemState = "data-accordion-sdc-expanded";
    const buttonState = "aria-expanded";

    // Function to expand an accordion item.
    const expand = (item, button) => {
      item.setAttribute(itemState, "true");
      button.setAttribute(buttonState, "true");
    };

    // Function to collapse an accordion item.
    const collapse = (item, button) => {
      item.setAttribute(itemState, "false");
      button.setAttribute(buttonState, "false");
    };

    // Toggle accordion content when toggle is activated.
    items.forEach((item) => {
      const button = item.querySelector(itemToggle);

      // Hide all accordion content sections if JavaScript is enabled.
      collapse(item, button);

      button.addEventListener("click", () => {
        // Toggle the item's state.
        return button.getAttribute(buttonState) === "true"
          ? collapse(item, button)
          : expand(item, button);
      });
    });

    controls.forEach((control) => {
      // Get all items relevant to the control.
      const allItems = control.parentNode.querySelectorAll(
        ".js-accordion-sdc-item",
      );
      // Add click listener on the parent <ul>
      control.addEventListener("click", (e) => {
        // Determine which control was activated. `action` will re turn a
        // boolean. `true` if the expand control was clicked, otherwise false.
        const action = e.target.classList.contains(
          "js-accordion_sdc__toggle-all--expand",
        );

        // Iterate over
        allItems.forEach((item) => {
          const button = item.querySelector(itemToggle);

          if (action === false) {
            collapse(item, button);
          } else {
            expand(item, button);
          }
        });
      });
    });
  },
};
