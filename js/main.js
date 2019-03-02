document.addEventListener("DOMContentLoaded", () => {

    const emoji = document.querySelector('.emoji'),
          slider = document.querySelector('.slider'),
          tempOutput = document.querySelector('.temperature-output');

    slider.addEventListener('input', () => {

        const sliderValue = slider.value;

        //Display temperature
        tempOutput.textContent = slider.value;

        //Display emoji
        if (sliderValue >= 0 && sliderValue <= 8) {
            emoji.textContent = '🥶';
        } else if (sliderValue > 8 && sliderValue <= 16) {
            emoji.textContent = '😬';
        } else if (sliderValue > 16 && sliderValue <= 24) {
            emoji.textContent = '😊';
        } else if (sliderValue > 24 && sliderValue <= 32) {
            emoji.textContent = '😅';
        } else {
            emoji.textContent = '🥵';
        }
    });
});
