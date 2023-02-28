let inputTask = document.getElementById("writeTask");
const taskListContainer=document.getElementById("taskList");
const doneTaskList = document.getElementById("doneTaskList");
const buttonAdd=document.getElementById("buttonAdd");

function addTask() {
    if(inputTask.value){        
        const  task = document.createElement("div");
        task.classList.add("empty-new-task");

        const cb=document.createElement("input");
        cb.setAttribute("type", "checkbox");
        cb.classList.add("cbNew");

        const input = document.createElement("input");
        input.setAttribute("id", "description");
        input.setAttribute("placeholder", "task");
        input.setAttribute("disabled", "disabled");
        input.style.overflowX="auto";
        input.value=inputTask.value;
        input.classList.add("inputNew");

        const edit=document.createElement("button");
        edit.innerHTML = "Edit";
        edit.classList.add("editNew");

        const remove=document.createElement("button");
        remove.innerHTML = "Delete";
        remove.classList.add("deleteNew");

        task.appendChild(cb);
        task.appendChild(input);
        task.appendChild(edit);
        task.appendChild(remove);
        taskListContainer.appendChild(task);

        edit.addEventListener("click",function() {
            if(edit.innerHTML === "Edit"){
                edit.innerHTML = "Save";
                input.removeAttribute("disabled");
                edit.removeEventListener("click", editOrSave);
                edit.addEventListener("click",editOrSave);
            }
            else{
                input.setAttribute("disabled", "disabled");
                edit.innerHTML = "Edit";
                edit.removeEventListener("click", editOrSave);
                edit.addEventListener("click",editOrSave);
            }
        });

        function editOrSave(){
            input.setAttribute("disabled", "disabled");
            edit.innerHTML = "Edit";
            edit.removeEventListener("click", editOrSave);
            edit.addEventListener("click",editOrSave);
        }

        remove.addEventListener("click",function(){
            if(cb.checked){
                doneTaskList.removeChild(task);
            }
            else{
                taskListContainer.removeChild(task);
            }
        });

        cb.addEventListener("change",function(){
            if(cb.checked){
                doneTaskList.appendChild(task);
                input.setAttribute("disabled", "disabled");
                edit.setAttribute("disabled","disabled");
            }
            else{
                taskListContainer.appendChild(task);
                input.removeAttribute("disabled");
                edit.removeAttribute("disabled");
            }
        });
    }
    inputTask.value = "";
}

buttonAdd.addEventListener("click",addTask);

inputTask.addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        addTask();
    }
});