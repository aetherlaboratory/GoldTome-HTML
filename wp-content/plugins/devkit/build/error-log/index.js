/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/error-log/index.js ***!
  \********************************/
jQuery(document).ready(function ($) {
  function show_hide_reloaded(inner_text, duration = 1500) {
    $(".reloaded").html(inner_text).removeClass("hidden");
    setTimeout(function () {
      $(".reloaded").addClass("hidden");
    }, duration);
  }

  // Auto-watch state
  let autoWatchInterval = null;
  let isAutoWatchActive = false;
  let lastModifiedTime = null;

  // Check if log file has been modified
  function checkLogModified() {
    $.ajax({
      url: DPDEV_ajax.ajaxurl,
      type: "post",
      data: {
        action: "DPDEV_checkLogModified",
        verify_nonce: DPDEV_ajax.DPDEV_nonce,
        last_modified: lastModifiedTime
      },
      async: true,
      success: function (response) {
        if (response.success && response.data.modified) {
          console.log("Log file modified, reloading...");
          lastModifiedTime = response.data.last_modified;
          reload_log("no", $, true); // true = silent reload (no notification)
        }
      },
      error: function (xhr, status, error) {
        console.error("Check log modified error:", status, error);
      }
    });
  }

  // Toggle auto-watch
  function toggleAutoWatch() {
    if (isAutoWatchActive) {
      // Stop watching
      clearInterval(autoWatchInterval);
      autoWatchInterval = null;
      isAutoWatchActive = false;
      $("#auto-reload-log").text("Auto-Reload: OFF").removeClass("button-primary").addClass("button-secondary");
      console.log("Auto-watch stopped");
    } else {
      // Start watching
      autoWatchInterval = setInterval(checkLogModified, 2000); // Check every 2 seconds
      isAutoWatchActive = true;
      $("#auto-reload-log").text("Auto-Reload: ON").removeClass("button-secondary").addClass("button-primary");
      console.log("Auto-watch started");

      // Initial check to get the current timestamp
      checkLogModified();
    }
  }

  // load error log on run time
  console.log("Error log script loaded, attempting to load log...");
  console.log("AJAX URL:", DPDEV_ajax.ajaxurl);
  console.log("Nonce:", DPDEV_ajax.DPDEV_nonce);
  $.ajax({
    url: DPDEV_ajax.ajaxurl,
    type: "post",
    data: {
      action: "DPDEV_loadLog",
      verify_nonce: DPDEV_ajax.DPDEV_nonce
    },
    async: true,
    success: function (response) {
      console.log("AJAX success, data received:", response);
      if (response.success) {
        $(".read-error-log .grid.grow").html(response.data.content);
        lastModifiedTime = response.data.last_modified;

        // Show page reload notification
        const reloadTime = new Date().toLocaleTimeString();
        console.log("📄 Page loaded at", reloadTime);
        show_hide_reloaded("📄 Page Reloaded at " + reloadTime, 5000);
      } else {
        $(".read-error-log .grid.grow").html(response.data || "<p style='color: red;'>Error loading log</p>");
      }
    },
    error: function (xhr, status, error) {
      console.error("AJAX error:", status, error);
      console.error("Response:", xhr.responseText);
      $(".read-error-log .grid.grow").html("<p style='color: red;'>Error loading log: " + error + "</p>");
    }
  });
  function reload_log(clear_log = "no", $, silent = false) {
    console.log("Reloading log, clear_log:", clear_log);
    $.ajax({
      url: DPDEV_ajax.ajaxurl,
      type: "post",
      data: {
        action: "DPDEV_clearLog",
        verify_nonce: DPDEV_ajax.DPDEV_nonce,
        clear_log: clear_log
      },
      async: true,
      success: function (response) {
        console.log("Reload AJAX success, data received:", response);
        if (response.success) {
          $(".read-error-log .grid.grow").html(response.data.content);
          lastModifiedTime = response.data.last_modified;

          // Only show notification if not silent
          if (!silent) {
            const reloadTime = new Date().toLocaleTimeString();
            console.log("📄 Log reloaded at", reloadTime);
            show_hide_reloaded("📄 Log Reloaded at " + reloadTime, 5000);
          }
        } else {
          $(".read-error-log .grid.grow").html(response.data || "<p style='color: red;'>Error reloading log</p>");
        }
      },
      error: function (xhr, status, error) {
        console.error("Reload AJAX error:", status, error);
        console.error("Response:", xhr.responseText);
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
  $("#reload-log").on("click", function () {
    console.log("Reload button clicked");
    // Same behavior as the keydown event
    reload_log("no", $);
    show_hide_reloaded("Reloaded");
  });

  // copy log on click event for button with id "copy-log"
  $("#copy-log").on("click", function () {
    console.log("Copy button clicked");
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
  $("#clear-log").on("click", function () {
    console.log("Clear button clicked");
    reload_log("yes", $);
  });

  // Auto-reload toggle button
  $("#auto-reload-log").on("click", function () {
    console.log("Auto-reload button clicked");
    toggleAutoWatch();
  });
});
/******/ })()
;
//# sourceMappingURL=index.js.map