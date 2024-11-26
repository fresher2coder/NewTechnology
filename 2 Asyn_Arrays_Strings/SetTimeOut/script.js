document.getElementById('start-timer').addEventListener('click', () => {
    // Get user input values
    const startDelay = parseInt(document.getElementById('start-delay').value, 10);
    const timerDuration = parseInt(document.getElementById('timer-duration').value, 10);
    
    // Validate inputs
    if (isNaN(startDelay) || startDelay < 0 || isNaN(timerDuration) || timerDuration <= 0) {
        document.getElementById('message').textContent = 'Please enter valid positive numbers for both delays and durations.';
        document.getElementById('message-container').classList.add('visible');
        return;
    }
    
    // Clear any previous messages
    document.getElementById('message').textContent = '';
    document.getElementById('countdown').textContent = '';
    document.getElementById('message-container').classList.remove('visible');
    document.getElementById('countdown-container').classList.remove('visible');

    // Convert start delay and timer duration from seconds to milliseconds
    const startDelayInMilliseconds = startDelay * 1000;

    // Notify the user that the timer will start after the delay
    document.getElementById('message').textContent = `Timer will start after ${startDelay} seconds and run for ${timerDuration} seconds.`;
    document.getElementById('message-container').classList.add('visible');

    // Set timeout to start the countdown after the start delay
    setTimeout(() => {
        // Make the countdown container visible with transition
        document.getElementById('countdown-container').classList.add('visible');
        document.getElementById('countdown').classList.add('blink');

        // Start the countdown timer
        let remainingTime = timerDuration;

        const countdownInterval = setInterval(() => {
            document.getElementById('countdown').textContent = `${remainingTime}`;
            remainingTime--;
            const counter = document.getElementById('countdown')
            if (remainingTime < 0) {
                clearInterval(countdownInterval);
                counter.textContent = 'Time is up!';
                counter.classList.remove('blink');
                counter.id='';
                counter.classList.add('end');
            }
        }, 1000);
    }, startDelayInMilliseconds);
});
