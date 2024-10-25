document.getElementById('registerForm').onsubmit = function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let phone = document.getElementById('phone').value;
    let hasError = false;

    document.getElementById('usernameError').textContent = "";
    document.getElementById('phoneError').textContent = "";

    if (username.trim() === "") {
        document.getElementById('usernameError').textContent = "Имя пользователя не может быть пустым";
        hasError = true;
    }

    let phoneValidationResult = validatePhoneNumber(phone);
    if (phoneValidationResult !== true) {
        document.getElementById('phoneError').textContent = phoneValidationResult;
        hasError = true;
    }

    if (!hasError) {
        document.getElementById('registerForm').submit();
    }
};

function validatePhoneNumber(phone) {
    let trimmedPhone = phone.trim();
    if (trimmedPhone.length <= 11) {
        return "Ошибка: Номер телефона должен содержать более 10 символов.";
    }
    if (!trimmedPhone.startsWith('+79')) {
        return "Ошибка: Номер телефона должен начинаться с +79.";
    }
    return true;
}
window.onload = function() {
    const pole = document.querySelector('.pole');
    pole.style.opacity = '1';
    
    setTimeout(() => {
        pole.style.display = 'none';
    }, 2024);
};
