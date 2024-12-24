// Toggle Password Visibility
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function () {
    // Toggle the input type
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;

    // Toggle the text of the button
    this.textContent = type === "password" ? "Show" : "Hide";
});

// Password Complexity Checker
const passwordForm = document.getElementById("passwordForm");
const message = document.getElementById("message");
const strength = document.getElementById("strength");

passwordForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const password = passwordInput.value;

    if (password.length === 0) {
        strength.textContent = "Empty";
        strength.style.color = "red";
        message.style.display = "block";
        return;
    }

    // Check password complexity
    let complexity = "Weak";
    let color = "red";
    setTimeout(
        () => alert("Use Minimum 8 characters, At least one uppercase letter, At least one lowercase letter, At least one number, At least one special character (e.g., !, @, #, $, etc.)"),
        300)

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[@$!%*?&#]/.test(password);
    const isLongEnough = password.length >= 8;

    if (isLongEnough && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars) {
        complexity = "Strong";
        color = "green";
    } else if (isLongEnough && (hasUpperCase || hasLowerCase) && (hasNumbers || hasSpecialChars)) {
        complexity = "Medium";
        color = "orange";
        setTimeout(
            () => alert("Use Minimum 8 characters, At least one uppercase letter, At least one lowercase letter, At least one number, At least one special character (e.g., !, @, #, $, etc.)"),
            300)
    }

    // Display complexity
    strength.textContent = complexity;
    strength.style.color = color;
    message.style.display = "block";
});
