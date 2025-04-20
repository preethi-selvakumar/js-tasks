const root1 = document.getElementById("root1");
const btn = document.getElementById("btn");
const todo = document.getElementById("todo");
console.log(todo);

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const taskText = todo.value.trim();
  if (taskText !== "") {
    // Create the task div
    const todo_values = document.createElement("div");
    todo_values.classList.add("task"); // Optional: Add a class for styling
    todo_values.innerHTML = `<p id="values">${taskText}</p> <button class="close">Remove</button>`;
    root1.appendChild(todo_values);
    console.log("Task div created:", todo_values);
    console.log("root1 after adding:", root1.innerHTML);

    // Find the remove button inside the task div
    const remove = todo_values.querySelector(".close");

    // Event listener for the remove button
    remove.addEventListener("click", (e) => {
      e.preventDefault();
      const taskToRemove = e.target.parentElement;
      const removedTaskText = taskToRemove.querySelector("#values").textContent;
      taskToRemove.remove();
      console.log(`Task Removed: ${removedTaskText}`);
      console.log("root1 after removing:", root1.innerHTML);
    });

    // Clear the input field after adding the task
    todo.value = "";
  } else {
    alert("Please enter a task!");
  }
});
