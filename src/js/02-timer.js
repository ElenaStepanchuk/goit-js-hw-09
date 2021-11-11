import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
    input: document.querySelector('#datetime-picker'),
}
console.log('refs.input.value:', refs.input.value);

flatpickr('#datetime-picker', {
    // Включает сборщик времени
    enableTime: true,
    // Отображает указатель времени 
    // в 24-часовом режиме без выбора AM / PM, если он включен.
    time_24hr: true,
    // Устанавливает начальную выбранную дату (даты).
    defaultDate: new Date(),
    // Регулирует шаг ввода минут (включая прокрутку)
    minuteIncrement: 1,
    //Функция, срабатывающие каждый раз при закрытии календаря.
    onClose(selectedDates) {
        console.log('selectedDates[0]:', selectedDates[0]);
    },
});



// function handleAlertData() {
//     if (selectedDates[0] <= nowData)
//         window.alert()
//             // = 'Please choose a date in the future';
// }