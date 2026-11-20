/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/js/error-log.js ***!
  \*****************************/
jQuery(document).ready(function ($) {
  function show_hide_reloaded(inner_text) {
    $(".reloaded").html(inner_text).removeClass("hidden");
    setTimeout(function () {
      $(".reloaded").addClass("hidden");
    }, 1500); // 1.5 seconds
  }
  // load error log on run time
  $.ajax({
    url: DPDEV_ajax.ajaxurl,
    type: "post",
    data: {
      action: "DPDEV_loadLog",
      verify_nonce: DPDEV_ajax.DPDEV_nonce
    },
    async: true,
    success: function (data) {
      $(".read-error-log .grid.grow").html(data);
    }
  });
  function reload_log(clear_log = "no", $) {
    $.ajax({
      url: DPDEV_ajax.ajaxurl,
      type: "post",
      data: {
        action: "DPDEV_clearLog",
        verify_nonce: DPDEV_ajax.DPDEV_nonce,
        clear_log: clear_log
      },
      async: true,
      success: function (data) {
        $(".read-error-log .grid.grow").html(data);
      }
    });
  }

  // reload log
  document.addEventListener("keydown", function (event) {
    // Check if the key combination is Ctrl + R (Windows/Linux) or Command + R (Mac)
    if ((event.ctrlKey || event.metaKey) && event.key === "r") {
      // Prevent the default browser refresh behavior
      event.preventDefault();

      // Do something when Ctrl + R (Windows/Linux) or Command + R (Mac) is pressed
      reload_log("no", $);

      // Add 'active' class to elements with 'reloaded' class
      $(".reloaded").removeClass("hidden");

      // Remove 'active' class after 3 seconds
      setTimeout(function () {
        $(".reloaded").addClass("hidden");
      }, 1500); //  1.5 seconds
    }
  });

  // reload log on click event for button with id "reload-log"
  $("#reload-log").click(function () {
    // Same behavior as the keydown event
    reload_log("no", $);
    show_hide_reloaded("Reloaded");
  });

  // copy log on click event for button with id "copy-log"
  $("#copy-log").click(function () {
    // Same behavior as the keydown event
    // Select the <pre> element inside .error-log and get its text content
    const errorLogContent = document.querySelector(".error-log pre").innerText;
    // Check if Clipboard API is supported
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(errorLogContent).then(() => {
        show_hide_reloaded("Code copied to clipboard!");
      }).catch(err => {
        show_hide_reloaded("Failed to copy text. Please try manually.");
      });
    } else {
      // Fallback for older browsers
      // Create a temporary textarea element
      const textarea = document.createElement("textarea");
      textarea.value = errorLogContent;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        const successful = document.execCommand("copy");
        if (successful) {
          show_hide_reloaded("Code copied to clipboard!");
        } else {
          show_hide_reloaded("Failed to copy text. Please try manually.");
        }
      } catch (err) {
        show_hide_reloaded("Failed to copy text. Please try manually.");
      }

      // Clean up
      document.body.removeChild(textarea);
    }
  });

  // clear log
  $("#clear-log").click(function () {
    reload_log("yes", $);
  });
});
/******/ })()
;
//# sourceMappingURL=error-log.js.map