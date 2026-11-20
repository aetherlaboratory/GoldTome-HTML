document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".username-display").forEach(function (element) {
    element.addEventListener("click", function () {
      var form = this.nextElementSibling;
      this.style.display = "none";
      form.style.display = "block";
    });
  });

  document.querySelectorAll(".role-display").forEach(function (element) {
    element.addEventListener("click", function () {
      var form = this.nextElementSibling;
      this.style.display = "none";
      form.style.display = "block";
    });
  });

  document.querySelectorAll(".email-display").forEach(function (element) {
    element.addEventListener("click", function () {
      var form = this.nextElementSibling;
      this.style.display = "none";
      form.style.display = "block";
    });
  });

  document.querySelectorAll(".cancel-button").forEach(function (button) {
    button.addEventListener("click", function () {
      var form = this.closest("form");
      var displayElement = form.previousElementSibling;
      form.style.display = "none";
      displayElement.style.display = "block";
    });
  });

  document.getElementById("select-all").addEventListener("change", function () {
    var checkboxes = document.querySelectorAll(
      'input[name="selected_users[]"]'
    );
    for (var checkbox of checkboxes) {
      checkbox.checked = this.checked;
    }
    saveSelectedUsers();
  });

  document
    .querySelectorAll('input[name="selected_users[]"]')
    .forEach(function (checkbox) {
      checkbox.addEventListener("change", function () {
        saveSelectedUsers();
      });
    });

  function saveSelectedUsers() {
    var selectedUsers = [];
    document
      .querySelectorAll('input[name="selected_users[]"]:checked')
      .forEach(function (checkbox) {
        selectedUsers.push(checkbox.value);
      });

    var data = {
      action: "save_selected_users",
      selected_users: JSON.stringify(selectedUsers), // Encode as JSON string
      _ajax_nonce: userSwitcher.nonce,
    };

    fetch(userSwitcher.ajaxurl, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data).toString(),
    })
      .then((response) => response.text())
      .then((text) => {
        console.log("Response text:", text);
        return JSON.parse(text);
      })
      .then((data) => {
        if (data.success) {
          console.log("Selected users saved successfully.");
        } else {
          console.error("Error saving selected users:", data.data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
