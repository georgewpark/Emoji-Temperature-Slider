document.addEventListener("DOMContentLoaded", () => {

    const emoji = document.querySelector('.emoji'),
        slider = document.querySelector('.slider'),
        tempOutput = document.querySelector('.temperature-output'),
        displayTemp = temperature => {
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
        }

    slider.addEventListener('input', () => displayTemp(slider.value));

    //CodePen preview window
    if (location.pathname.includes('fullcpgrid')) {

        let temperature = 0;

        const interval = setInterval(() => {

            //Remove interval if max temperature is reached
            if (temperature === 40) clearInterval(interval);

            //Update slider value
            slider.value = temperature;

            //Display temperature and emoji
            displayTemp(temperature);

            //Increase temperature
            temperature++;

        }, 95);
    }
});
