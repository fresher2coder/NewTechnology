// Function to fetch user data
function fetchUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("User not found");
            }
            return response.json();
        });
}

// Function to fetch user posts
function fetchUserPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Posts not found");
            }
            return response.json();
        });
}

// Function to clear displayed data
function clearData() {
    document.getElementById('userName').innerText = '';
    document.getElementById('postsList').innerHTML = '';
    document.getElementById('userData').classList.add('hidden');
    document.getElementById('userPosts').classList.add('hidden');
}

// Handle form submit event
document.getElementById('fetchForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting the traditional way
    
    const userId = document.getElementById('userId').value;

    if (!userId) {
        alert("Please enter a user ID");
        return;
    }

    // Fetch user data and then fetch user posts
    fetchUser(userId)
        .then(userData => {
            // Show user data
            document.getElementById('userName').innerText = `Name: ${userData.name}, Email: ${userData.email}`;
            document.getElementById('userData').classList.remove('hidden');
            
            // Fetch posts for the user
            return fetchUserPosts(userData.id);
        })
        .then(userPosts => {
            // Show user posts
            const postsList = document.getElementById('postsList');
            postsList.innerHTML = ""; // Clear any previous posts
            userPosts.forEach(post => {
                const listItem = document.createElement('li');
                listItem.innerText = post.title;
                postsList.appendChild(listItem);
            });
            document.getElementById('userPosts').classList.remove('hidden');
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred: " + error.message);
            // Optionally hide data sections
            clearData();
        });
});

// Handle remove data button click event
document.getElementById('removeButton').addEventListener('click', () => {
    clearData();
});
