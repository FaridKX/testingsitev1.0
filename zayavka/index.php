<?php
session_start();
$errors = isset($_SESSION['errors']) ? $_SESSION['errors'] : [];
?>

<!DOCTYPE html>
<html lang="UTF-8">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Запись</title>
    <link rel="stylesheet" href="Styles/style.css">
</head>
<body>
    <form id="registerForm" action="authorize.php" method="post" class="container">
        <img src="assets/MainLoginPhoto.jpeg" alt="Barber Photo">
        <h2>ЗАЯВКА НА УЧАСТИЕ</h2>
        <h2 class="double">В ПРОБНОМ ЗАНЯТИИ</h2>

        <label for="username" style="color: #fff;">ВАШЕ ИМЯ</label>
        <input type="text" id="username" name="username" placeholder="Введите имя" value="<?php echo isset($_POST['username']) ? htmlspecialchars($_POST['username']) : ''; ?>" required>
        <span id="usernameError" class="error" style="color: red;"><?php echo isset($errors['username']) ? $errors['username'] : ''; ?></span><br><br>

        <label for="phone" style="color: #fff;">ВАШ ТЕЛЕФОН</label>
        <input type="tel" id="phone" name="phone" value="<?php echo isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : '+7'; ?>" required>
        <span id="phoneError" class="error" style="color: red;"><?php echo isset($errors['phone']) ? $errors['phone'] : ''; ?></span><br><br>

        <button type="submit"><b>ЗАПИСАТЬСЯ</b></button>
    </form>

    <script>
        document.getElementById('registerForm').onsubmit = function(event) {
            event.preventDefault(); // Предотвратить отправку формы

            let username = document.getElementById('username').value;
            let phone = document.getElementById('phone').value;
            let hasError = false;

            // Очистить предыдущие ошибки
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
            if (!trimmedPhone.startsWith('+79')) {
                return "Ошибка: номер телефона должен начинаться с +79.";
            }
            return true;
        }
    </script>
</body>
</html>

<?php
unset($_SESSION['errors']);
?>
