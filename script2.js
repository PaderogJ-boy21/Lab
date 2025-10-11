let todos = [];

const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// CREATE
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = { id: Date.now(), text: todoInput.value };
  todos.push(newTodo);
  todoInput.value = "";
  renderTodos();
});

// READ + DISPLAY
function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.textContent = todo.text;

    // Update button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => editTodo(todo.id);

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => deleteTodo(todo.id);

    li.appendChild(editBtn);
    li.appendChild(delBtn);
    todoList.appendChild(li);
  });
}

// UPDATE
function editTodo(id) {
  const newText = prompt("Edit your task:");
  if (newText) {
    todos = todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo);
    renderTodos();
  }
}

// DELETE
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
}

renderTodos();