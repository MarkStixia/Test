document.getElementById('showNotification').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const notification = document.getElementById('notification');

    if (inputText.trim() !== '') {
        notification.innerText = inputText;
        notification.style.display = 'block';

        // Очистка поля ввода
        document.getElementById('inputText').value = '';

        // Скрыть уведомление через 3 секунды
        setTimeout(function() {
            notification.style.display = 'none';
        }, 3000);
    }
});
