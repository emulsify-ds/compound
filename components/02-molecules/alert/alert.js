Drupal.behaviors.alert = {
  attach(context) {
    // Selectors
    const alerts = context.querySelectorAll('.alert');
    const alertToggle = '.alert__toggle';
    // Classes and States
    const alertId = 'data-alert-id';
    const alertState = 'data-alert-state';
    const buttonState = 'aria-expanded';

    // Function to expand an alert.
    const expand = (item, toggle, id) => {
      item.setAttribute(alertState, 'expanded');
      toggle.setAttribute(buttonState, 'true');
      localStorage.setItem(id, 'expanded');
    };

    // Function to collapse an alert.
    const collapse = (item, toggle, id) => {
      item.setAttribute(alertState, 'collapsed');
      toggle.setAttribute(buttonState, 'false');
      localStorage.setItem(id, 'collapsed');
    };

    // Function to dismiss an alert.
    const dismiss = (item, id) => {
      item.setAttribute(alertState, 'dismissed');
      localStorage.setItem(id, 'dismissed');
    };

    // Function to remove old alerts from storage.
    const resetAlerts = () => {
      Object.keys(localStorage).forEach((key) => {
        if (key.includes('alert-id-')) {
          localStorage.removeItem(key);
        }
      });
    };

    // Function to check whether localStorage is both supported and available.
    // See: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#testing_for_availability
    const storageAvailable = (type) => {
      let storage;
      try {
        storage = window[`${type}`];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
      } catch (e) {
        return (
          e instanceof DOMException &&
          // everything except Firefox
          (e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          storage &&
          storage.length !== 0
        );
      }
    };

    if (storageAvailable('localStorage')) {
      alerts.forEach((alert) => {
        const id = alert.getAttribute(alertId);
        const type = alert.getAttribute('data-alert-type');
        const toggle = alert.querySelector(alertToggle);

        // Get the alert state if previously interacted with by the user.
        const state = localStorage.getItem(id);

        // If the current alert has no state, clear other values from storage.
        if (state == null) {
          resetAlerts();
        }

        // If the alert was dismissed, keep it dismissed.
        if (state === 'dismissed') {
          dismiss(alert, id);
          // If the alert was collapsed, load it in the collapsed state.
        } else if (state === 'collapsed') {
          collapse(alert, toggle, id);
        }

        // Toggle alert state
        toggle.addEventListener('click', () => {
          if (type === 'emergency') {
            // For emergency alerts, toggle the "expanded/collapsed" state.
            return alert.getAttribute(alertState) === 'expanded'
              ? collapse(alert, toggle, id)
              : expand(alert, toggle, id);
          }

          // For all other alert types, dismiss the alert.
          return dismiss(alert, id);
        });
      });
    }
  },
};
