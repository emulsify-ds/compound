Drupal.behaviors.responsiveEmbeddedVideos={attach:function(t){var e=t.querySelectorAll('iframe[src*="youtube.com"]','iframe[src*="vimeo.com"]');e&&Array.from(e).forEach((function(t){var e=t.getAttribute("width"),r=t.getAttribute("height"),o="".concat(e," / ").concat(r);t.parentNode.style.aspectRatio=o,t.removeAttribute("height"),t.removeAttribute("width")}))}};