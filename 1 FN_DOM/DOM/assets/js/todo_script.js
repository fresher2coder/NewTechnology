document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Add a new task
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const newTask = input.value.trim();
        if (newTask === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            ${newTask}
            <button class="remove-btn">Remove</button>
        `;

        // Add event listener to the remove button
        li.querySelector('.remove-btn').addEventListener('click', () => {
            
            todoList.removeChild(li);
        });

        todoList.appendChild(li);
        input.value = ''; // Clear the input field
    });
});
