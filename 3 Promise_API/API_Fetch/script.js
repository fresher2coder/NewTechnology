// script.js
document.getElementById('fetch-joke').addEventListener('click', () => {
    
    fetch('https://v2.jokeapi.dev/joke/Programming')
        .then(response => response.json())
        .then(data => {
            const setup = data.setup ? data.setup : 'No setup available';
            const delivery = data.delivery ? data.delivery : "No Joke";
            document.getElementById('setup').textContent = setup;
            document.getElementById('delivery').textContent = delivery;
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
});
