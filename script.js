// Your JavaScript code goes here


function fetchTodos() {
    fetch('http://localhost:9090/todos')
        .then(response => response.json())
        .then(todos => {
            const list = document.getElementById('todoList');
            list.innerHTML = '';
            todos.forEach(todo => {
                const item = document.createElement('div');
                item.innerHTML = `${todo.item} - Completed: ${todo.completed} 
                                  <button onclick="toggleTodoStatus('${todo.ID}')">Toggle</button>`;
                list.appendChild(item);
            });
        })
        .catch(error => console.error('Error:', error));
}




function handleAddTodo() {
    const newTodoItem = document.getElementById('newTodoItem').value;
    const newTodo = { item: newTodoItem, completed: false };
    addTodo(newTodo);
}

function addTodo(newTodo) {
    fetch('http://localhost:9090/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
    })
        .then(response => response.json())
        .then(todo => {
            const list = document.getElementById('todoList');
            const item = document.createElement('div');
            item.textContent = `${todo.item} - Completed: ${todo.completed}`;
            list.appendChild(item);
            // Clear the input field
            document.getElementById('newTodoItem').value = '';
        })
        .catch(error => console.error('Error:', error));
}




function toggleTodoStatus(id) {
    fetch(`http://localhost:9090/todos/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(updatedTodo => {
            fetchTodos(); // Re-fetch todos to update the list
        })
        .catch(error => console.error('Error:', error));
}


// Attach this function to a click event on the checkbox or button associated with each todo

// Example: Add item to basket
function addToBasket(itemId, itemName, itemPrice) {
    // Logic to add item to the basket
}

// Example: Remove item from basket
function removeFromBasket(itemId) {
    // Logic to remove item from the basket
}

// Example: Checkout
function checkout() {
    // Logic to process the checkout
}

document.getElementById('menu-button').addEventListener('click', function () {
    var nav = document.getElementById('nav');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});
