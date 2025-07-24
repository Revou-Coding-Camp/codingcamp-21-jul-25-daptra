console.log("Script loaded successfully!");

let tasks = [];


function addTask() {

    const taskInput = document.getElementById("todo-input");
    const dateInput = document.getElementById("date-input");

    if (taskInput.value === "" || dateInput.value === "") {
        alert("Please enter a task and date.");
    } else {

    tasks.push({
        title: taskInput.value,
        date: dateInput.value
    });

    console.log("Task added:", taskInput.value, "on", dateInput.value);
    console.log(tasks);

    renderTasks();
    }
}

function removeAllTask() {
    tasks = [];
    
    renderTasks();
}

function toggleFilter() {

}

function renderTasks() {
  // Function to render tasks on the page
  const taskList = document.getElementById("todo-list");
  taskList.innerHTML = ""; // Clear the current list

  tasks.forEach((task, index) => {
    taskList.innerHTML += `
      <li class="todo-item flex justify-between items-center bg-white p-4 mb-2">
        <span>${task.title}</span>
        <div>
          <button class="px-[10px] py-[2px] bg-green-500 text-white rounded-md">Edit</button>
          <button class="px-[10px] py-[2px] bg-red-500 text-white rounded-md" onclick="();">Delete</button>
        </div>
      </li>
    `;
  });
}