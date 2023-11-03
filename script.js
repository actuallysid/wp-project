document.addEventListener("DOMContentLoaded", function () {
    const passwordField = document.getElementById("passwordField");
    const showPasswordCheckbox = document.getElementById("showPassword");

    showPasswordCheckbox.addEventListener("change", function () {
        passwordField.type = this.checked ? "text" : "password";
    });
});
