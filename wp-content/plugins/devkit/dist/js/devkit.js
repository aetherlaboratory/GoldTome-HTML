/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/devkit.js ***!
  \**************************/
// bulk resize
let lastImageId = 0;
let totalImages = 0;
let resizedImages = 0;
jQuery(document).ready(function ($) {
  // ------------------------------------------------------------------------------------------------
  // CodeMirror - Marko Test for autocomplete
  // ------------------------------------------------------------------------------------------------
  var textarea = document.getElementById("custom-maintenance-template");
  var textarea_css = document.getElementById("custom-maintenance-template-css");
  // Check if wp.CodeMirror exists; if not, use the global CodeMirror
  var editorLibrary = typeof wp !== "undefined" && wp.CodeMirror ? wp.CodeMirror : typeof CodeMirror !== "undefined" ? CodeMirror : null;
  var customMaintenanceTemplateEditor = editorLibrary.fromTextArea(textarea, {
    lineNumbers: true,
    lineWrapping: true,
    autoRefresh: true,
    mode: "htmlmixed",
    matchBrackets: true,
    autoCloseTags: true,
    // Enables automatic closing of tags
    extraKeys: {
      "Ctrl-Space": "autocomplete" // Allow explicit autocomplete
    },
    hintOptions: {
      // Using CodeMirror's basic HTML schema
      schemaInfo: CodeMirror.htmlSchema
    }
  });
  var customMaintenanceTemplateCssEditor = editorLibrary.fromTextArea(textarea_css, {
    lineNumbers: true,
    lineWrapping: true,
    autoRefresh: true,
    mode: "css",
    matchBrackets: true,
    autoCloseTags: true,
    // Enables automatic closing of tags
    hintOptions: {
      // Using CodeMirror's basic HTML schema
      schemaInfo: CodeMirror.cssSchema
    }
  });
  customMaintenanceTemplateEditor.on("inputRead", function (cm, change) {
    // Prevent duplicate hints if one is already open.
    if (cm.state.completionActive) {
      return;
    }

    // Get the token at the current cursor.
    var cur = cm.getCursor();
    var token = cm.getTokenAt(cur);

    // Skip if within a string or comment.
    if (token.type && /string|comment/.test(token.type)) {
      return;
    }

    // Use inner mode if available (for more context awareness).
    var innerMode = editorLibrary.innerMode ? editorLibrary.innerMode(cm.getMode(), token.state).mode.name : cm.getOption("mode");

    // Get the character that was just typed.
    var char = change.text[0];

    // Determine when to trigger autocomplete based on the mode.
    var shouldAutocomplete = false;
    if (innerMode === "html" || innerMode === "xml") {
      // Trigger on "<", "/" or letters.
      if (char === "<" || char === "/" || /^[a-zA-Z]$/.test(char)) {
        shouldAutocomplete = true;
      }
      // Also trigger if an equals sign follows an attribute name.
      if (token.string === "=" && token.state && token.state.htmlState && token.state.htmlState.tagName) {
        shouldAutocomplete = true;
      }
    } else if (innerMode === "css") {
      // For CSS trigger on letters or colon.
      if (/^[a-zA-Z:]$/.test(char)) {
        shouldAutocomplete = true;
      }
    } else if (innerMode === "javascript") {
      // For JavaScript trigger on letters or period.
      if (/^[a-zA-Z.]$/.test(char)) {
        shouldAutocomplete = true;
      }
    }
    if (shouldAutocomplete) {
      cm.execCommand("autocomplete");
    }
  });

  // Add autocompletion for the CSS editor
  customMaintenanceTemplateCssEditor.on("inputRead", function (cm, change) {
    // Prevent showing duplicate hints if one is already open
    if (cm.state.completionActive) {
      return;
    }

    // Get the token at the current cursor and exit if in a string or comment
    var token = cm.getTokenAt(cm.getCursor());
    if (token.type && /string|comment/.test(token.type)) {
      return;
    }

    // Get the first character that was just typed
    var char = change.text[0];

    // Trigger autocompletion if the character is a letter or a colon
    if (/^[a-zA-Z:]$/.test(char)) {
      cm.execCommand("autocomplete");
    }
  });

  // ------------------------------------------------------------------------------------------------
  // End of CodeMirror - Marko Test for autocomplete
  // ------------------------------------------------------------------------------------------------

  // reset
  $("#type-reset").keyup(function () {
    if ($(this).val().trim().toLowerCase() == "reset") {
      $(".wp-reset").show().prop("disabled", false);
    } else {
      $(".wp-reset").hide().prop("disabled", true);
    }
  });

  // show/hide other admins checkbox
  $("#reset-form input[name='reset_database']").change(function () {
    if ($(this).is(":checked")) {
      $("#reset-form #other-admins").show();
    } else {
      $("#reset-form #other-admins").hide();
    }
  });

  // multi-select
  if ($("#DPDEV_plugin").length != 0) {
    $("#DPDEV_plugin").select2({
      multiple: true,
      allowClear: true,
      placeholder: "Select plugin(s)"
    });
  }
  if ($("#DPDEV_theme").length != 0) {
    $("#DPDEV_theme").select2({
      multiple: true,
      allowClear: true,
      placeholder: "Select theme(s)"
    });
  }

  // activate plugins
  $("#activate-plugins").click(function () {
    if ($(this).find("input[type='checkbox']").is(":checked")) {
      $("#activate-plugins #activate").val("yes");
    } else {
      $("#activate-plugins #activate").val("");
    }
  });

  // override theme
  $("#override-theme").click(function () {
    if ($(this).find("input[type='checkbox']").is(":checked")) {
      $("#themes_install #override").val("yes");
    } else {
      $("#themes_install #override").val("");
    }
  });

  // override plugin
  $("#override-plugin").click(function () {
    if ($(this).find("input[type='checkbox']").is(":checked")) {
      $("#plugins_install #override-plugin-install").val("yes");
    } else {
      $("#plugins_install #override-plugin-install").val("");
    }
  });

  //upload plugins
  $("#DPDEV-uploader").fineUploader({
    multiple: true,
    imagePreviews: false,
    validation: {
      allowedExtensions: ["zip"]
    },
    request: {
      //endpoint: DPDEV_ajax.ajaxurl,
      endpoint: DPDEV_ajax.ajaxurl
    },
    classes: {
      dropActive: "DPDEV-drop-active"
    },
    callbacks: {
      onSubmit: function (id, fileName) {
        var params = {
          activate: $("#activate-plugins #activate").val(),
          override: $("#override-plugin-install").val(),
          action: "DPDEV_install_plugins"
        };
        this.setParams(params);
      },
      onComplete: function (id, name, obj, xhr) {
        if (!obj.success) {
          if (obj.error.indexOf("Plugin is up to date") > -1) {
            $(".qq-upload-retryable .buttons-wrap").remove();
          }
          $(".qq-file-id-" + id).append("<p>" + obj.error + "</p>");
        } else {
          $(".qq-file-id-" + id).append("<p>" + obj.message + "</p>");
          setTimeout(function () {
            $(".qq-file-id-" + id).remove();
          }, 3000);
        }
      }
    }
  });

  // upload themes
  $("#DPDEV-uploader-theme").fineUploader({
    multiple: true,
    imagePreviews: false,
    validation: {
      allowedExtensions: ["zip"]
    },
    request: {
      //endpoint: DPDEV_ajax.ajaxurl,
      endpoint: DPDEV_ajax.ajaxurl
    },
    classes: {
      dropActive: "DPDEV-drop-active"
    },
    callbacks: {
      onSubmit: function (id, fileName) {
        var params = {
          action: "DPDEV_install_themes",
          override: $("#override").val()
        };
        this.setParams(params);
      },
      onComplete: function (id, name, obj, xhr) {
        if (!obj.success) {
          if (obj.error.indexOf("Theme is up to date") > -1) {
            $(".qq-upload-retryable .buttons-wrap").remove();
          }
          $(".qq-file-id-" + id).append("<p>" + obj.error + "</p>");
        } else {
          $(".qq-file-id-" + id).append("<p>" + obj.message + "</p>");
          setTimeout(function () {
            $(".qq-file-id-" + id).remove();
          }, 3000);
        }
      }
    }
  });

  // select all options

  // Click event on the whole li
  $(document).on("click", "#select-all-options, #select-all-options-remove", function (event) {
    if (!$(event.target).is('input[type="checkbox"]')) {
      let checkbox = $(this).find('input[type="checkbox"]');
      checkbox.prop("checked", !checkbox.prop("checked")).trigger("change");
    }
  });
  $(document).on("change", "#select-all-options input", function () {
    if ($(this).is(":checked")) {
      $("#db-options input[name='keep_options[]']").prop("checked", true);
      $("#add-to-list").show();
    } else {
      $("#db-options input[name='keep_options[]']").prop("checked", false);
      $("#add-to-list").hide();
    }
  });
  $(document).on("change", "#select-all-options-remove input", function () {
    if ($(this).is(":checked")) {
      $("#saved-options input[name='dont_keep_options[]']").prop("checked", true);
      $("#remove-from-list").show();
    } else {
      $("#saved-options input[name='dont_keep_options[]']").prop("checked", false);
      $("#remove-from-list").hide();
    }
  });

  // read options from options table
  $(document).on("keyup", "#options", function () {
    var entered_option = $(this).val();
    if (entered_option != "" && entered_option.length >= 3) {
      $.ajax({
        url: DPDEV_ajax.ajaxurl,
        type: "post",
        data: {
          action: "DPDEV_loadOptions",
          entered_option: entered_option,
          verify_nonce: DPDEV_ajax.DPDEV_nonce
        },
        async: true,
        success: function (data) {
          $("#db-options").html(data);
        }
      });
    } else {
      $("#db-options").html("");
    }
  });
  $(document).on("change", "input[name='keep_options[]']", function () {
    if ($("input[name='keep_options[]']:checked").length > 0) {
      $("#add-to-list").show();
    } else {
      $("#add-to-list").hide();
    }
  });
  $(document).on("change", "input[name='dont_keep_options[]']", function () {
    if ($("input[name='dont_keep_options[]']:checked").length > 0) {
      $("#remove-from-list").show();
    } else {
      $("#remove-from-list").hide();
    }
  });
  $(document).on("click", "#keep-options li.options", function (event) {
    if (event.target.tagName !== "INPUT") {
      $(this).find('input[type="checkbox"]').prop("checked", function (i, value) {
        return !value;
      });
    }
  });
  $(document).on("click", "#add-to-list", function (e) {
    e.preventDefault();
    var btn = $(this);
    $(btn).prop("disabled", true);
    let options_to_keep = [];
    $("#keep-status").text("Saving...").show();
    $("input[name='keep_options[]']").each(function () {
      if ($(this).is(":checked")) {
        options_to_keep.push($(this).val());
      }
    }).promise().done(function () {
      $.ajax({
        url: DPDEV_ajax.ajaxurl,
        type: "post",
        data: {
          action: "DPDEV_saveKeepOptions",
          options_to_keep: options_to_keep,
          verify_nonce: DPDEV_ajax.DPDEV_nonce
        },
        async: true,
        success: function (data) {
          $("#keep-status").text("Saved");
          $(btn).prop("disabled", false);
          $("#saved-options").html(data);
          setTimeout(() => {
            $("#keep-status").hide();
          }, 2000);
        }
      });
    });
  });
  $(document).on("click", "#remove-from-list", function (e) {
    e.preventDefault();
    var btn = $(this);
    $(btn).prop("disabled", true);
    let dont_keep_options = [];
    $("#not-keep-status").text("Removing...").show();
    $("input[name='dont_keep_options[]']").each(function () {
      if ($(this).is(":checked")) {
        dont_keep_options.push($(this).val());
        $(this).parents("li").remove();
      }
    }).promise().done(function () {
      if ($("input[name='dont_keep_options[]']").length < 1) {
        $("#saved-options").html("");
      }
      $.ajax({
        url: DPDEV_ajax.ajaxurl,
        type: "post",
        data: {
          action: "DPDEV_removeKeepOptions",
          dont_keep_options: dont_keep_options,
          verify_nonce: DPDEV_ajax.DPDEV_nonce
        },
        async: true,
        success: function (data) {
          $("#not-keep-status").text("Removed");
          $(btn).prop("disabled", false);
          setTimeout(() => {
            $("#not-keep-status").hide();
          }, 2000);
        }
      });
    });
  });

  // save wp-config settings
  $("#settings input.wp-config-settings").change(function () {
    var wp_config_settings = {};
    var setting;
    $("#settings input.wp-config-settings").each(function () {
      setting = $(this).attr("id");
      wp_config_settings[setting] = $(this).is(":checked") ? 1 : 0;
    }).promise().done(function () {
      $.ajax({
        url: DPDEV_ajax.ajaxurl,
        type: "post",
        data: {
          action: "DPDEV_wp_config_settings",
          wp_config_settings,
          verify_nonce: DPDEV_ajax.DPDEV_nonce
        },
        async: true,
        success: function (data) {
          console.log("WP Config Updated!");
        }
      });
    });
  });

  // save debug types
  $("#settings input.debug-types").change(function () {
    var devkit_debug_types = {};
    var setting;
    $("#settings input.debug-types").each(function () {
      setting = $(this).attr("id");
      devkit_debug_types[setting] = $(this).is(":checked") ? 1 : 0;
    }).promise().done(function () {
      $.ajax({
        url: DPDEV_ajax.ajaxurl,
        type: "post",
        data: {
          action: "DPDEV_devkit_debug_types",
          devkit_debug_types,
          verify_nonce: DPDEV_ajax.DPDEV_nonce
        },
        async: true,
        success: function (data) {
          console.log("Debug Types Updated!");
        }
      });
    });
  });

  // error log file path and name change
  $(".dpdevkit-change-path").click(function (e) {
    e.preventDefault();
    var currObj = $(this);
    var dpdevkit_epath = $("input[name=dpdevkit_epath]").val();
    var dpdevkit_ename = $("input[name=dpdevkit_ename]").val();
    if (dpdevkit_ename == "") {
      $("input[name=dpdevkit_ename]").addClass("empty");
    } else {
      $(currObj).prop("disabled", true);
      $.ajax({
        url: DPDEV_ajax.ajaxurl,
        type: "post",
        data: {
          action: "DPDEV_error_log_change",
          dpdevkit_epath: dpdevkit_epath,
          dpdevkit_ename: dpdevkit_ename,
          verify_nonce: DPDEV_ajax.DPDEV_nonce
        },
        async: true,
        success: function (data) {
          $(currObj).prop("disabled", false);
          console.log("Error log file path and name changed!");
          location.reload();
        }
      });
    }
  });

  // wp salt
  $(".dpdevkit-wpsalt").click(function (e) {
    e.preventDefault();
    var currObj = $(this);
    $(currObj).prop("disabled", true);
    $.ajax({
      url: DPDEV_ajax.ajaxurl,
      type: "post",
      data: {
        action: "DPDEV_wpsalt",
        verify_nonce: DPDEV_ajax.DPDEV_nonce
      },
      async: true,
      success: function (data) {
        $(currObj).prop("disabled", false);
        console.log("Salt regenerated!");
        $("#salt-regenerated").html(data).show();
        location.reload();
      }
    });
  });

  // hide images for non admins
  $("#thumbnails input.dpdevkit-hide-img").change(function () {
    var dpdevkit_hide_img = $(this).is(":checked") ? "yes" : "no";
    $.ajax({
      url: DPDEV_ajax.ajaxurl,
      type: "post",
      data: {
        action: "DPDEV_hide_img",
        dpdevkit_hide_img: dpdevkit_hide_img,
        verify_nonce: DPDEV_ajax.DPDEV_nonce
      },
      async: true,
      success: function (data) {
        console.log("Hide image updated!");
      }
    });
  });

  // Add new thumbnail size
  $("#add-new-size-form").on("submit", function (e) {
    e.preventDefault();
    var sizeName = $("#new-size-name").val();
    var width = $("#new-size-width").val();
    var height = $("#new-size-height").val();
    var crop = $("#new-size-crop").val();
    $.ajax({
      url: DPDEV_ajax.ajaxurl,
      type: "POST",
      data: {
        action: "DPDEV_add_new_thumbnail_size",
        size_name: sizeName,
        width: width,
        height: height,
        crop: crop,
        verify_nonce: DPDEV_ajax.DPDEV_nonce
      },
      dataType: "json",
      success: function (response) {
        $(".thumbnails tbody").append(response.content);
        $(".php-code").html(response.php_code);
        $(".add-size").prop("disabled", true);
        $("#add-new-size-form input.clear").val("");
      },
      error: function () {
        console.log("An error occurred while adding thumbnail size.");
        $(".add-size").prop("disabled", true);
      }
    });
  });

  // enable/disable add-size button
  $(document).on("change keyup keydown", "#add-new-size-form input", function () {
    var sizeName = $("#new-size-name").val();
    var width = $("#new-size-width").val();
    var height = $("#new-size-height").val();

    // Regular expression to check if there is at least one letter
    var hasLetter = /[a-zA-Z]/.test(sizeName);
    // Check if sizeName has at least 3 characters and contains at least one letter
    var isValidSizeName = sizeName.length >= 3 && hasLetter;
    if (isValidSizeName && width > 0 && height > -1 && height != "") {
      $(".add-size").prop("disabled", false);
    } else {
      $(".add-size").prop("disabled", true);
    }
  });

  // Remove thumbnail size
  $(document).on("click", ".remove-thumbnail-size", function () {
    var size = $(this).data("size");
    var parentTr = $(this).parents("tr");
    if (confirm("Are you sure you want to remove this size?")) {
      $.ajax({
        url: DPDEV_ajax.ajaxurl,
        type: "POST",
        data: {
          action: "DPDEV_remove_thumbnail_size",
          size: size,
          verify_nonce: DPDEV_ajax.DPDEV_nonce
        },
        dataType: "json",
        success: function (response) {
          $(parentTr).remove();
          $(".php-code").html(response.php_code);
        },
        error: function () {
          console.log("An error occurred while removing thumbnail size.");
        }
      });
    }
  });

  // AJAX request to delete images of a specific thumbnail size
  $(".delete-thumbnail-size").on("click", function () {
    var width = $(this).data("width");
    var height = $(this).data("height");
    if (confirm("Are you sure you want to remove images of this size?")) {
      $.ajax({
        url: ajaxurl,
        type: "POST",
        data: {
          action: "DPDEV_delete_thumbnail_images",
          width: width,
          height: height,
          verify_nonce: DPDEV_ajax.DPDEV_nonce
        },
        success: function (response) {
          console.log("Images deleted");
        },
        error: function () {
          console.log("Issue while deleting images");
        }
      });
    }
  });

  // save maintenance data
  $("select[name='dpdevkit_maintenance_page'], select[name='dpdevkit_maintenance_archive']").select2({
    placeholder: "Select an option",
    allowClear: true
  });
  $("#submit-maintenance").on("click", function () {
    // Save the content from CodeMirror back into the textareas for both editors
    customMaintenanceTemplateEditor.save();
    customMaintenanceTemplateCssEditor.save();
    var currObj = $(this);
    $(currObj).prop("disabled", true);
    var formData = $("#maintenance_mode_form").serializeArray();

    // Manually add the unchecked value if the checkbox is not checked
    if (!$("#dpdevkit_maintenance_enabled").is(":checked")) {
      formData.push({
        name: "dpdevkit_maintenance_enabled",
        value: 0
      });
    }
    $.ajax({
      url: DPDEV_ajax.ajaxurl,
      type: "POST",
      data: {
        action: "DPDEV_maintenance_settings",
        form_data: $.param(formData),
        verify_nonce: DPDEV_ajax.DPDEV_nonce
      },
      success: function (response) {
        $(currObj).prop("disabled", false);
      },
      error: function () {
        $(currObj).prop("disabled", false);
      }
    });
  });

  // Handle maintenance mode toggle
  $("#dpdevkit_maintenance_enabled").change(function () {
    var isEnabled = $(this).is(":checked") ? 1 : 0;
    $.ajax({
      url: DPDEV_ajax.ajaxurl,
      type: "POST",
      data: {
        action: "DPDEV_maintenance_settings",
        dpdevkit_maintenance_enabled: isEnabled,
        verify_nonce: DPDEV_ajax.DPDEV_nonce
      },
      success: function (response) {
        if (response.success) {
          console.log("Maintenance mode setting updated.");
        } else {
          console.log("Failed to update maintenance mode setting.");
        }
      },
      error: function () {
        console.log("An error occurred while updating maintenance mode setting.");
      }
    });
  });

  // image redirect url
  // show/hide redirect url field
  $(document).on("change", "#enable-image-redirect", function () {
    var image_url_redirect_enable = $("#enable-image-redirect").is(":checked") ? 1 : 0;
    if (image_url_redirect_enable === 1) {
      $("#img-redirect-url-form-fields").show();
      //$("#max-image-size-form-fields").show(); // Show the additional form fields
    } else {
      $("#img-redirect-url-form-fields").hide();
      //$("#max-image-size-form-fields").hide(); // Hide the additional form fields
    }
  });
  $(document).on("click", ".set-image-url-redirect", function (e) {
    e.preventDefault();
    var currObj = $(this);
    var image_url_redirect_enable = $("#enable-image-redirect").is(":checked") ? 1 : 0;
    var image_redirect_url = $("#dpdevkit_img_redirect_url").val();
    if (image_url_redirect_enable === 1 && image_redirect_url == "") {
      alert("Please fill Image Redirect URL field");
    } else {
      $(currObj).prop("disabled", true);
      $.ajax({
        url: DPDEV_ajax.ajaxurl,
        type: "POST",
        data: {
          action: "DPDEV_save_image_url_redirect",
          image_redirect_url: image_redirect_url,
          image_url_redirect_enable: image_url_redirect_enable,
          verify_nonce: DPDEV_ajax.DPDEV_nonce
        },
        dataType: "json",
        success: function (response) {
          $(currObj).prop("disabled", false);
          alert("Image URL Redirect settings saved!");
        },
        error: function () {
          console.log("An error occurred while saving image redirect url.");
          $(currObj).prop("disabled", false);
        }
      });
    }
  });

  // Resize on upload
  // enable/disable add-size button
  $(document).on("change keyup keydown", "#max-image-size-form input", function () {
    var width = $("#max-width").val();
    var height = $("#max-height").val();
    var max_size_enable = $("#enable-image-size").is(":checked") ? 1 : 0;
    if ((width > 0 || height > 0) && max_size_enable === 1) {
      $("#resize-old-images-form").show();
      //$("#max-image-size-form-fields").show(); // Show the additional form fields
    } else {
      $("#resize-old-images-form").hide();
      //$("#max-image-size-form-fields").hide(); // Hide the additional form fields
    }
  });
  function saveMaxImageSize(width, height, max_size_enable) {
    $(".set-max-image-size").prop("disabled", false);
    $.ajax({
      url: DPDEV_ajax.ajaxurl,
      type: "POST",
      data: {
        action: "DPDEV_set_max_image_size",
        width: width,
        height: height,
        max_size_enable: max_size_enable,
        verify_nonce: DPDEV_ajax.DPDEV_nonce
      },
      dataType: "json",
      success: function (response) {
        $(".set-max-image-size").prop("disabled", false);
        checkImagesToResize();
        alert("Resize images settings saved.");
      },
      error: function () {
        console.log("An error occurred while adding thumbnail size.");
        $(".set-max-image-size").prop("disabled", false);
      }
    });
  }

  // Add new thumbnail size
  $("#max-image-size-form").on("submit", function (e) {
    e.preventDefault();
    var width = $("#max-width").val();
    var height = $("#max-height").val();
    var max_size_enable = $("#enable-image-size").is(":checked") ? 1 : 0;
    if (max_size_enable === 1) {
      if (width < 1 && height < 1) {
        alert("Please fill width OR height field");
      } else {
        saveMaxImageSize(width, height, max_size_enable);
      }
    } else {
      saveMaxImageSize(width, height, max_size_enable);
    }
  });

  // On page load, check if there are any images to resize
  checkImagesToResize();
  $("#start-resize").on("click", function () {
    // Start the resizing process
    $(this).prop("disabled", true); // Disable the button during the process
    lastImageId = localStorage.getItem("lastResizedImageId") || 0;

    // Start resizing images in batches
    resizeNextImage();
  });
  function checkImagesToResize() {
    // Get total images that need resizing
    $.ajax({
      url: DPDEV_ajax.ajaxurl,
      type: "POST",
      data: {
        action: "DPDEV_get_total_images",
        last_image_id: lastImageId,
        verify_nonce: DPDEV_ajax.DPDEV_nonce
      },
      dataType: "json",
      success: function (response) {
        totalImages = response.data.total;
        $("#total-images").text(totalImages);
        if (totalImages > 0) {
          $("#start-resize").prop("disabled", false); // Enable the button if images are found
        } else {
          $("#progress-percentage").text("No images to resize.");
        }
      },
      error: function () {
        console.log("Error fetching images to resize.");
      }
    });
  }
  function resizeNextImage() {
    $.ajax({
      url: DPDEV_ajax.ajaxurl,
      type: "POST",
      data: {
        action: "DPDEV_resize_images",
        last_image_id: lastImageId,
        verify_nonce: DPDEV_ajax.DPDEV_nonce
      },
      dataType: "json",
      success: function (response) {
        resizedImages++;
        lastImageId = response.last_image_id;
        localStorage.setItem("lastResizedImageId", lastImageId);

        // Update the progress bar
        $("#resized-images").text(resizedImages);
        let progressPercentage = resizedImages / totalImages * 100;
        $("#progress-percentage").text(progressPercentage.toFixed(2) + "%");

        // Continue resizing if there are more images
        if (resizedImages < totalImages) {
          resizeNextImage();
        } else {
          $("#start-resize").prop("disabled", false); // Enable the button when done
          localStorage.removeItem("lastResizedImageId"); // Clear the record when done
          alert("All images resized successfully!");
          checkImagesToResize();
        }
      },
      error: function () {
        $("#start-resize").prop("disabled", false);
        alert("An error occurred during resizing. Please try again.");
      }
    });
  }

  // webp images
  function updateImageCount() {
    $.ajax({
      url: DPDEV_ajax.ajaxurl,
      type: "POST",
      data: {
        action: "DPDEV_get_image_count_for_conversion",
        verify_nonce: DPDEV_ajax.DPDEV_nonce
      },
      success: function (response) {
        if (response.success) {
          $("#total-webp-images").text(response.data.total_images);
          $("#start-webp").prop("disabled", response.data.total_images === 0);
        }
      }
    });
  }
  $("#webp-image-form").on("submit", function (e) {
    e.preventDefault();
    var enableCheckbox = $("#enable-image-webp").is(":checked") ? 1 : 0;
    $.ajax({
      url: DPDEV_ajax.ajaxurl,
      type: "POST",
      data: {
        action: "DPDEV_save_webp_settings",
        enable: enableCheckbox,
        verify_nonce: DPDEV_ajax.DPDEV_nonce
      },
      success: function (response) {
        alert(response.data);
        if (enableCheckbox === 1) {
          $("#convert-old-images-to-webp").show();
        } else {
          $("#convert-old-images-to-webp").hide();
        }
      },
      error: function () {
        alert("Failed to save settings.");
      }
    });
  });
  $("#svg-form").on("submit", function (e) {
    e.preventDefault();
    $("#svg-form .button-primary").prop("disabled", true);
    var svg_roles = [];
    var svg_inline_render = $("#svg_inline_render").is(":checked") ? 1 : 0;
    $("input[name='svg_roles[]']").each(function () {
      if ($(this).is(":checked")) {
        svg_roles.push($(this).val());
      }
    }).promise().done(function () {
      $.ajax({
        url: DPDEV_ajax.ajaxurl,
        type: "post",
        data: {
          action: "DPDEV_saveSVGSettings",
          svg_roles: svg_roles,
          svg_inline_render: svg_inline_render,
          verify_nonce: DPDEV_ajax.DPDEV_nonce
        },
        async: true,
        success: function (data) {
          $("#svg-form .button-primary").prop("disabled", false);
          alert("SVG Settings Saved!");
        }
      });
    });
  });
  $("#start-webp").on("click", function () {
    var offset = 0;
    var totalImages = 0;
    $("#start-webp").prop("disabled", true);
    function convertBatch() {
      $.ajax({
        url: DPDEV_ajax.ajaxurl,
        type: "POST",
        data: {
          action: "DPDEV_convert_images_to_webp",
          offset: offset,
          verify_nonce: DPDEV_ajax.DPDEV_nonce
        },
        success: function (response) {
          if (response.success) {
            offset = response.data.next_offset;
            totalImages = response.data.total_images;
            var convertedCount = response.data.converted_count;
            $("#total-webp-images").text(totalImages);
            $("#resized-webp-images").text(parseInt($("#resized-webp-images").text()) + convertedCount);
            $("#progress-webp-percentage").text(Math.min(100, offset / totalImages * 100).toFixed(2) + "%");
            if (offset < totalImages) {
              convertBatch();
            } else {
              alert("Conversion complete!");
              $("#start-webp").prop("disabled", false);
              updateImageCount();
            }
          }
        },
        error: function () {
          alert("An error occurred during conversion.");
          $("#start-webp").prop("disabled", false);
        }
      });
    }
    convertBatch();
  });
  updateImageCount();

  // Updated search/replace
  $("#search-repalce").on("submit", function (e) {
    e.preventDefault();
    $("#dry-run-results-rows").html();
    // Get form values
    const dryRun = $("#dry-run").is(":checked");
    const searchValue = $("#search").val();
    const replaceValue = $("#replace").val();
    $.ajax({
      url: DPDEV_ajax.ajaxurl,
      type: "post",
      data: {
        action: "DPDEV_search_replace",
        verify_nonce: DPDEV_ajax.DPDEV_nonce,
        dry_run: dryRun,
        // Add dry run flag
        search: searchValue,
        replace: replaceValue
      },
      dataType: "json",
      async: true,
      success: function (data) {
        if (dryRun) {
          // Display the results if it's a dry run
          if (data.success && data.data && data.data.results) {
            $("#dry-run-results").html(data.data.results);
          } else {
            alert("No results found or an error occurred.");
          }
        } else {
          // Display success message if replace is performed
          $("#dry-run-results").html("Replace operation completed successfully.");
          $("#dry-run-results-rows").html("");
          //alert("Replace operation completed successfully.");
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        alert("An error occurred: " + textStatus + " - " + errorThrown);
      }
    });
  });

  // Handle click on occurrences to show matched rows
  // Handle click on occurrences to show/hide matched rows
  $(document).on("click", ".view-rows", function (e) {
    e.preventDefault();

    // This handles the actual toggle logic
    const $this = $(this);
    const currentText = $this.text().trim(); // Ensure text is trimmed
    $this.text(currentText === "Show" ? "Hide" : "Show");
    const tableName = $(this).data("table");
    const searchValue = $(this).data("search");
    const existingRows = $("#dry-run-results-rows [data-table='" + tableName + "']");

    // Toggle visibility if rows are already displayed
    if (existingRows.length > 0) {
      const toggleLink = $(this);
      existingRows.toggle();
      toggleLink.text(existingRows.is(":visible") ? "Hide" : "Show");
      return;
    }
    $.ajax({
      url: DPDEV_ajax.ajaxurl,
      type: "post",
      data: {
        action: "DPDEV_get_matched_rows",
        verify_nonce: DPDEV_ajax.DPDEV_nonce,
        table: tableName,
        search: searchValue
      },
      async: true,
      success: function (data) {
        if (data.success && data.data && data.data.rows) {
          let rowsHtml = `<div data-table="${tableName}"><h3 class="mt-lg mb-md">Matched Rows in Table: ${tableName}</h3>`;
          rowsHtml += `<table class="matched-rows-table table-auto border-collapse border border-border-alt border-solid p-sm w-full"><thead class="bg-alt p-sm"><tr>`;
          // Add table headers from keys of the first row
          const headers = Object.keys(data.data.rows[0]);
          headers.forEach(header => {
            rowsHtml += `<th class="p-sm text-left">${header}</th>`;
          });
          rowsHtml += `</tr></thead><tbody>`;
          // Add table rows
          data.data.rows.forEach(row => {
            rowsHtml += `<tr class="p-sm">`;
            for (const [key, value] of Object.entries(row)) {
              let highlightedValue = typeof value === "string" ? value.replace(new RegExp(searchValue, "gi"), match => `<span class='highlight' style='background-color: yellow;'>${match}</span>`) : value;
              rowsHtml += `<td class="p-sm border-b border-border-alt">${highlightedValue}</td>`;
            }
            rowsHtml += `</tr>`;
          });
          rowsHtml += `</tbody></table></div>`;
          $("#dry-run-results-rows").append(rowsHtml);
          // Change link text to 'Hide'
          $(this).text("Hide");
        } else {
          alert("No matched rows found or an error occurred.");
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        alert("An error occurred: " + textStatus + " - " + errorThrown);
      }
    });
  });

  // Automatic login
  $(document).on("change", "#enable_automatic_login", function (e) {
    if ($(this).is(":checked")) {
      $("#automatic-login-box").show();
    } else {
      $("#automatic-login-box").hide();
    }
  });
  $(document).on("submit", "#automatic-login-form", function (e) {
    e.preventDefault();
    var isEnabled = $("#enable_automatic_login").is(":checked") ? 1 : 0;
    $("#automatic-login-form #submit").prop("disabled", true);
    // Remove any previous error messages and error classes
    $("#automatic-login-form .error-message").remove();
    $("#automatic-login-form input").removeClass("error");
    var valid = true;

    // Loop over each row's Allowed IP field
    $("#login-pairs-table tr").each(function () {
      var $ipInput = $(this).find("input[name*='[ip]']");
      if ($ipInput.val().trim() === "") {
        valid = false;
        // Mark the field with an error class
        $ipInput.addClass("error");
        // Append an inline error message
        $ipInput.after('<span class="error-message">Allowed IP is required</span>');
      }
    });

    // If validation fails, stop the AJAX submission
    if (!valid) {
      // Optionally, focus the first field with an error
      $("#automatic-login-form .error").first().focus();
      $("#automatic-login-form #submit").prop("disabled", false);
      return;
    }

    // Serialize form data for submission
    var formData = $(this).serialize();
    formData += "&action=DPDEV_automaticLogin";
    formData += "&devkit_automatic_login=" + isEnabled;
    formData += "&verify_nonce=" + DPDEV_ajax.DPDEV_nonce;

    // Send the AJAX request
    $.ajax({
      url: ajaxurl,
      // For WordPress, ajaxurl is provided in the admin area. Adjust accordingly if not.
      type: "POST",
      data: formData,
      success: function (response) {
        // Process the response (this could be JSON or HTML based on your implementation)
        // For example, show a success message:
        alert("Settings saved successfully!");
        $("#automatic-login-form #submit").prop("disabled", false);
      },
      error: function (xhr, status, error) {
        // Handle errors
        alert("An error occurred: " + error);
        $("#automatic-login-form #submit").prop("disabled", false);
      }
    });
  });
});

// Tab switching code
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Remove active class from all buttons
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  // Show the selected tab and add an active class to its button
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.addEventListener("DOMContentLoaded", function () {
  // Prefill the API key and folder link fields from localStorage if available.
  var savedApiKey = localStorage.getItem("googleApiKey");
  var savedFolderLink = localStorage.getItem("googleDriveFolderLink");
  if (savedApiKey) {
    document.getElementById("googleApiKey").value = savedApiKey;
  }
  if (savedFolderLink) {
    document.getElementById("googleDriveFolderLink").value = savedFolderLink;
  }
  // Google Drive Tab: When Enter is pressed on the API key or folder link input, trigger the "Fetch Plugins" button.
  var googleApiKeyInput = document.getElementById("googleApiKey");
  var googleFolderInput = document.getElementById("googleDriveFolderLink");
  [googleApiKeyInput, googleFolderInput].forEach(function (input) {
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("fetchDriveFilesBtn").click();
      }
    });
  });

  // Prefill the API key and folder link fields from localStorage if available.
  var savedUsername = localStorage.getItem("wpUsername");
  var savedSearchTerm = localStorage.getItem("wpSearcTerm");
  if (savedUsername) {
    document.getElementById("wpUsername").value = savedUsername;
  }
  if (savedSearchTerm) {
    document.getElementById("wpSearcTerm").value = savedSearchTerm;
  }

  // WP plugins tabs: When Enter is pressed on the API key or folder link input, trigger the "Fetch Plugins" button.
  var wpUsernameInput = document.getElementById("wpUsername");
  var wpSearcTermInput = document.getElementById("wpSearcTerm");
  [wpUsernameInput, wpSearcTermInput].forEach(function (input) {
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("fetchWPPluginsBtn").click();
      }
    });
  });

  // Global mapping of file IDs to file names
  var driveFilesMap = {};
  document.getElementById("defaultOpen").click();

  // Handle "Fetch Plugins" click
  document.getElementById("fetchDriveFilesBtn").addEventListener("click", function () {
    jQuery("#fetchDriveFilesBtn").prop("disabled", true);
    jQuery("#fetching-plugins").show();
    var apiKey = document.getElementById("googleApiKey").value.trim();
    var folderLink = document.getElementById("googleDriveFolderLink").value.trim();
    if (!apiKey || !folderLink) {
      alert("Please enter both your API key and the folder link.");
      return;
    }

    // Store the API key and folder link for future visits.
    localStorage.setItem("googleApiKey", apiKey);
    localStorage.setItem("googleDriveFolderLink", folderLink);
    // AJAX request to fetch the file list
    var data = new FormData();
    data.append("action", "dpdev_fetch_google_drive_files");
    data.append("api_key", apiKey);
    data.append("folder_link", folderLink);
    data.append("verify_nonce", DPDEV_ajax.DPDEV_nonce);
    fetch(ajaxurl, {
      method: "POST",
      credentials: "same-origin",
      body: data
    }).then(response => response.json()).then(result => {
      jQuery("#fetching-plugins").hide();
      jQuery("#fetchDriveFilesBtn").prop("disabled", false);
      if (result.success) {
        jQuery("#plugins-list-gdrive").show();
        var files = result.data;
        var container = document.getElementById("googleDriveFilesContainer");
        container.innerHTML = "";
        // Clear the previous mapping
        driveFilesMap = {};
        if (files.length === 0) {
          jQuery("#no-plugins").show();
          document.getElementById("installDrivePluginsBtn").style.display = "none";
          return;
        } else {
          jQuery("#no-plugins").hide();
        }
        // Create a checkbox list for each file
        files.forEach(function (file) {
          driveFilesMap[file.id] = file.name;
          var label = document.createElement("label");
          label.style.display = "block";
          var checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.value = file.id;
          checkbox.name = "drive_file_ids[]";
          label.appendChild(checkbox);
          label.insertAdjacentText("beforeend", " " + file.name);
          container.appendChild(label);
        });
        document.getElementById("installDrivePluginsBtn").style.display = "inline-block";
      } else {
        jQuery("#plugins-list-gdrive").hide();
        alert("Error: " + result.data);
      }
    }).catch(error => {
      console.error("Error fetching files:", error);
    });
  });

  // Handle "Install Selected Plugins" click
  document.getElementById("installDrivePluginsBtn").addEventListener("click", function () {
    jQuery("#installDrivePluginsBtn").prop("disabled", true);
    jQuery("#installing-plugins").show();
    var apiKey = document.getElementById("googleApiKey").value.trim();
    var folderLink = document.getElementById("googleDriveFolderLink").value.trim();
    var checkboxes = document.querySelectorAll("input[name='drive_file_ids[]']:checked");
    if (!apiKey || !folderLink) {
      alert("Please enter both your API key and the folder link.");
      return;
    }
    if (checkboxes.length === 0) {
      alert("Please select at least one file.");
      return;
    }
    var fileIds = [];
    checkboxes.forEach(function (cb) {
      fileIds.push(cb.value);
    });

    // AJAX request to install the selected plugins
    var data = new FormData();
    data.append("action", "dpdev_install_plugin_from_drive");
    data.append("api_key", apiKey);
    data.append("folder_link", folderLink);
    data.append("verify_nonce", DPDEV_ajax.DPDEV_nonce);
    fileIds.forEach(function (id) {
      data.append("file_ids[]", id);
    });
    fetch(ajaxurl, {
      method: "POST",
      credentials: "same-origin",
      body: data
    }).then(response => response.json()).then(result => {
      if (result.success) {
        var messages = "";
        for (var id in result.data) {
          // Look up the file name; fallback to the id if not found.
          var fileName = driveFilesMap[id] || id;
          //messages += "File ID " + id + ": " + result.data[id] + "\n";
          messages += fileName + ": " + result.data[id] + "\n";
        }
        alert(messages);
      } else {
        alert("Error: " + result.data);
      }
      jQuery("#installDrivePluginsBtn").prop("disabled", false);
      jQuery("#installing-plugins").hide();
    }).catch(error => {
      console.error("Error installing plugins:", error);
    });
  });

  // Global mapping for WordPress plugins (slug -> {name, download_link})
  var wpPluginsMap = {};

  // Handle "Fetch WP Plugins" click
  document.getElementById("fetchWPPluginsBtn").addEventListener("click", function () {
    var username = document.getElementById("wpUsername").value.trim();
    var searchTerm = document.getElementById("wpSearcTerm").value.trim();
    if (!username && !searchTerm) {
      alert("Please enter a username or search term.");
      return;
    }
    jQuery("#fetchWPPluginsBtn").prop("disabled", true);
    jQuery("#fetching-wp-plugins").show();

    // Store the API key and folder link for future visits.
    localStorage.setItem("wpUsername", username);
    localStorage.setItem("wpSearcTerm", searchTerm);
    // AJAX request to fetch the plugin list from WordPress.org
    var data = new FormData();
    data.append("action", "dpdev_fetch_wp_plugins");
    data.append("username", username);
    data.append("searchTerm", searchTerm);
    data.append("verify_nonce", DPDEV_ajax.DPDEV_nonce);
    fetch(ajaxurl, {
      method: "POST",
      credentials: "same-origin",
      body: data
    }).then(response => response.json()).then(result => {
      jQuery("#fetchWPPluginsBtn").prop("disabled", false);
      jQuery("#fetching-wp-plugins").hide();
      if (result.success) {
        jQuery("#plugins-list-wp").show();
        var plugins = result.data;
        var container = document.getElementById("wpPluginsContainer");

        // Reset mapping
        wpPluginsMap = {};
        if (plugins.length === 0) {
          container.innerHTML = "<p>No plugins found for this username.</p>";
          document.getElementById("installWPPluginsBtn").style.display = "none";
          return;
        }

        // Create a single HTML string for all plugins
        var html = "";
        plugins.forEach(function (plugin) {
          // Store plugin data in the mapping
          wpPluginsMap[plugin.slug] = plugin;

          // Add this plugin to the HTML string
          html += `
                <label class="!flex gap-sm group mb-lg cursor-pointer">
                 
                    <input type="checkbox" 
                        class="relative top-xsm"
                        value="${plugin.slug}" 
                        name="wp_plugin_slugs[]">
                    
                    <div class="flex gap-sm w-[600px] rounded-[4px] p-xsm border border-border group-hover:bg-surface">
                      ${plugin.icon ? `<img src="${plugin.icon}" 
                            alt="${plugin.name.replace(/"/g, "&quot;")}" 
                            class="w-[48px] h-[48px] inline-block rounded-[2px]"
                      >` : ""}
                      <div>${plugin.name}</div>
                    </div>
                </label>
              `;
        });

        // Set all HTML at once
        container.innerHTML = html;

        // Show the install button
        document.getElementById("installWPPluginsBtn").style.display = "inline-block";
      } else {
        jQuery("#plugins-list-wp").hide();
        alert("Error: " + result.data);
      }
    }).catch(error => {
      console.error("Error fetching WP plugins:", error);
    });
  });

  // Handle "Install Selected WP Plugins" click
  document.getElementById("installWPPluginsBtn").addEventListener("click", function () {
    var checkboxes = document.querySelectorAll("input[name='wp_plugin_slugs[]']:checked");
    if (checkboxes.length === 0) {
      alert("Please select at least one plugin.");
      return;
    }
    jQuery("#installWPPluginsBtn").prop("disabled", true);
    jQuery("#installing-wp-plugins").show();
    var selectedSlugs = [];
    checkboxes.forEach(function (cb) {
      selectedSlugs.push(cb.value);
    });
    // Send both the selected slugs and the full mapping as JSON strings.
    var data = new FormData();
    data.append("action", "dpdev_install_wp_plugins");
    data.append("selected_slugs", JSON.stringify(selectedSlugs));
    data.append("plugins_map", JSON.stringify(wpPluginsMap));
    data.append("verify_nonce", DPDEV_ajax.DPDEV_nonce);
    fetch(ajaxurl, {
      method: "POST",
      credentials: "same-origin",
      body: data
    }).then(response => response.json()).then(result => {
      jQuery("#installWPPluginsBtn").prop("disabled", false);
      jQuery("#installing-wp-plugins").hide();
      if (result.success) {
        var messages = "";
        for (var pluginName in result.data) {
          messages += pluginName + ": " + result.data[pluginName] + "\n";
        }
        alert(messages);
      } else {
        alert("Error: " + result.data);
      }
    }).catch(error => {
      console.error("Error installing WP plugins:", error);
    });
  });
});
/******/ })()
;
//# sourceMappingURL=devkit.js.map