document.addEventListener("DOMContentLoaded", () => {

    const emoji = document.querySelector('.emoji'),
          slider = document.querySelector('.slider'),
          tempOutput = document.querySelector('.temperature-output');

    slider.addEventListener('input', () => {

        const temperature = slider.value;

        //Display temperature
        tempOutput.textContent = temperature;

        //Display emoji
        if (temperature >= 0 && temperature <= 8) {
            emoji.textContent = '🥶';
        } else if (temperature > 8 && temperature <= 16) {
            emoji.textContent = '😬';
        } else if (temperature > 16 && temperature <= 24) {
            emoji.textContent = '😊';
        } else if (temperature > 24 && temperature <= 32) {
            emoji.textContent = '😅';
        } else {
            emoji.textContent = '🥵';
        }
    });
});
