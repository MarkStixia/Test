// script.js
document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("task-form");
    const taskNameInput = document.getElementById("task-name");
    const startDateInput = document.getElementById("start-date");
    const endDateInput = document.getElementById("end-date");
    const addTaskButton = document.getElementById("add-task");
    const calendar = document.getElementById("calendar");

    // Массив для хранения задач
    const tasks = [];

    // Обработчик нажатия кнопки "Добавить"
    addTaskButton.addEventListener("click", function() {
        const taskName = taskNameInput.value;
        const startDate = startDateInput.value;
        const endDate = endDateInput.value;

        // Проверка на правильность введенных данных
        if (!taskName || !startDate || !endDate) {
            alert("Пожалуйста, заполните все поля");
            return;
        }

        if (new Date(startDate) > new Date(endDate)) {
            alert("Дата окончания не может быть раньше даты начала");
            return;
        }

        // Создаем объект задачи и добавляем в массив
        const task = {
            name: taskName,
            start: startDate,
            end: endDate,
        };
        tasks.push(task);

        // Очищаем поля формы
        taskNameInput.value = "";
        startDateInput.value = "";
        endDateInput.value = "";

        // Обновляем календарь
        updateCalendar();
    });

    // Функция для обновления календаря
    function updateCalendar() {
        calendar.innerHTML = "";

        for (const task of tasks) {
            const taskElement = document.createElement("div");
            taskElement.className = "task";
            taskElement.innerHTML = `<h3>${task.name}</h3><p>${task.start} - ${task.end}</p>`;

            // Добавляем задачу на соответствующую дату
            calendar.appendChild(taskElement);
        }
    }

    // Вызываем функцию для первоначальной отрисовки календаря
    updateCalendar();
});
