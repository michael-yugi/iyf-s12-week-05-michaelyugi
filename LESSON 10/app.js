// ============================================
// LESSON 10 — CLASSWORK EXERCISE: To-Do List (the Week 5 deliverable)
// index.html and styles.css are GIVEN. You write this file.
// All three go at the ROOT of iyf-s12-week-05-{username}.
//
// THE RULE: the array is the truth, the page is a picture of it.
//   Every action = (1) change `todos`  (2) call render()
//   Never change the page directly in one place and the array in another.
//
// textContent for task text · ONE click listener on the list · const/let only
// ============================================

// ---------- DOM elements (given) ----------
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const formError = document.getElementById("form-error");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

// ---------- State (given) ----------
let todos = [];            // [{ id, text, completed }]
let currentFilter = "all"; // "all" | "active" | "completed"
let nextId = 1;


// ============================================
// STEP 1 — render the list from the array
// ============================================

// TODO 1a: createTodoElement(todo) returns an <li class="todo-item" data-id="…"> containing:
//   - <input type="checkbox" class="toggle">  (checked if completed)
//   - <span class="todo-text">  ← text via textContent, NOT innerHTML
//   - <button type="button" class="delete">✕</button>  with aria-label `Delete "…"`
//   and the class "completed" on the li when todo.completed is true
function createTodoElement(todo) {
}

// TODO 1b: visibleTodos() returns todos filtered by currentFilter
function visibleTodos() {
}

// TODO 1c: render() — replace the list's children with the visible todos, then updateStats()
//   hint: todoList.replaceChildren(...visibleTodos().map(createTodoElement))
function render() {
}

// TODO 1d: updateStats() — "1 item left" / "3 items left" (watch the plural)
function updateStats() {
}


// ============================================
// STEP 2 — add a task
// ============================================

// TODO 2a: addTodo(text) — push { id: nextId++, text, completed: false }, then render()
function addTodo(text) {
}

// TODO 2b: listen for SUBMIT on the form (so Enter works too)
//   - event.preventDefault()   (why? try it without)
//   - trim the value; if empty, show "Type a task first." in formError and stop
//   - otherwise clear the error, addTodo, empty the input, focus it
// form.addEventListener("submit", (event) => { });

// ✅ Commit:  git commit -m "Add: add tasks to the list"


// ============================================
// STEP 3 — toggle and delete with ONE delegated listener
// ============================================

// TODO 3a: toggleTodo(id) and deleteTodo(id) — change the array, then render()
function toggleTodo(id) {
}
function deleteTodo(id) {
}

// TODO 3b: ONE click listener on todoList:
//   - const item = event.target.closest(".todo-item");  if (!item) return;
//   - const id = Number(item.dataset.id);               ← dataset gives strings!
//   - if the click was inside .delete → deleteTodo(id) and return   (check delete FIRST)
//   - otherwise → toggleTodo(id)
// todoList.addEventListener("click", (event) => { });
//
// TEST: add a task AFTER the page loaded and click it. Does it toggle? That's delegation.

// ✅ Commit:  git commit -m "Add: toggle and delete with event delegation"


// ============================================
// STEP 4 — filters, stats, clear completed
// ============================================

// TODO 4a: filterTodos(filter) — set currentFilter; give the matching .filter button the
//          class "active" and aria-pressed="true" (others: remove / "false"); render()
// TODO 4b: a click listener on each filter button → filterTodos(btn.dataset.filter)
// TODO 4c: clearCompleted() — keep only !completed; render(). Wire it to clearCompletedBtn.

// ✅ Commit:  git commit -m "Add: filters, stats and clear completed"


// ============================================
// STEP 5 — BONUS: double-click to edit
//   dblclick on .todo-text → show an <input class="edit"> with the text
//   Enter saves (trimmed; empty keeps the old text) · Escape cancels
//   hint: keep an `editingId` in state and let createTodoElement draw the input
// ✅ Commit:  git commit -m "Add: edit a task by double-click"
// ============================================


// ---------- Initialize ----------
// render();

// ============================================
// FINALLY: Settings → Pages → main / root. Your to-do list is the live site.
// Put the URL in your README under "Live Demo". git push.
// ============================================
