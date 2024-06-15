document.addEventListener('DOMContentLoaded', () => {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const messageElement = document.getElementById('message');
    const celebrationElement = document.getElementById('celebration');

    // Set the date we're counting down to
    const countdownDate = new Date("June 14, 2024 24:00:00").getTime();

    // Update the countdown every 1 second
    const countdownFunction = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in the elements
        daysElement.innerHTML = days;
        hoursElement.innerHTML = hours;
        minutesElement.innerHTML = minutes;
        secondsElement.innerHTML = seconds;

        // If the countdown is over, write some text
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.querySelector('.countdown').innerHTML = "";
            messageElement.innerHTML = "The website has launched!";
            createCelebration();
        }
    }, 1000);

    const createCelebration = () => {
        celebrationElement.style.display = 'block';
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 5 + 's';
            celebrationElement.appendChild(confetti);
        }
    };
});
