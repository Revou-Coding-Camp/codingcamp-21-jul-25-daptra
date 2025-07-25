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
        date: dateInput.value,
        completed: false,
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
    const filter = document.getElementById("filter-select").value;
    if (filter === "") return;
    renderTasks(filter);
}

function completedTask(index) {
    // Function to toggle the completion status of a task
    tasks[index].completed = true;
    renderTasks();
}
function renderTasks(filter = "all") {
    const taskList = document.getElementById("todo-list");
    taskList.innerHTML = "";

    let filteredTasks = tasks;
    if (filter === "completed") {
        filteredTasks = tasks.filter(task => task.completed);
    } else if (filter === "uncompleted") {
        filteredTasks = tasks.filter(task => !task.completed);
    }

    if (filteredTasks.length === 0) {
        taskList.innerHTML = "<p>No tasks available</p>";
        return;
    }

    filteredTasks.forEach((task, index) => {
        taskList.innerHTML += `
            <li class="todo-item flex justify-between items-center bg-white p-4 mb-2">
                <span>${task.title}</span>
                <div>
                    <button type="button" class="px-[10px] py-[2px] bg-green-500 text-white rounded-md" onclick="uncompletedTask(${index});">Uncompleted</button>
                    <button class="px-[10px] py-[2px] bg-red-500 text-white rounded-md" onclick="removeAllTask(${index});">Delete</button>
                </div>
            </li>
        `;
    });
}