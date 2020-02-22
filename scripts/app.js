const addForm = document.querySelector('.add');
const todos = document.querySelector('.todos');
const search = document.querySelector('.search input');

addForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addForm.add.value.trim();
    if (todo.length) {
        generateTodoTemplate(todo);
        addForm.reset();
    }
});

const generateTodoTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    todos.innerHTML += html;
}

todos.addEventListener('click', e => {
    console.log(e.target);
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// keyup event

const filterTodos = find => {
    Array.from(todos.children)
        .forEach(todo => {
            const text = todo.textContent.toLowerCase();
            if (!text.includes(find)) {
                todo.classList.add('filtered');
            } else {
                todo.classList.remove('filtered');
            }
        });
}

search.addEventListener('keyup', () => {
    const find = search.value.trim().toLowerCase();
    filterTodos(find);
});
