
const input = document.getElementById("task");
const button = document.getElementById("add");
const result = document.getElementById("result");
// let notShow = () => {
// 	result.classList.add('hide');
// 	result.classList.remove('show');
// }
result.addEventListener('click', (e) => {
     if(e.target.classList.contains('del')) {
         //remove element
         e.target.parentElement.remove();
         //remove From localStorage
         deleteTaskwith(e.target.parentElement.getAttribute("data-id"));
     }
});
function creatRemoveBtn() {
    const removeBtn = document.createElement('div');
    let txt = document.createTextNode('delete');
    removeBtn.classList.add('remove');
    removeBtn.id = i;
    return console.log(removeBtn);
//     removeBtn.appendChild(txt);
}
let array = [];

if(window.localStorage.list) {
    array = JSON.parse(window.localStorage.list);
}


const addTaskToarray = (input) => {
let task = {
    id:i,
    title : input
}
array.push(task);
addElementToPage(array);
saveInStorage(array);
}

const addElementToPage = (tasks) => {
    result.innerHTML = '';
    tasks.forEach((task) => {
    	const div = document.createElement('div');
        div.className = 'task';
        div.setAttribute('data-id', task.id);
        div.append(`${task.title}`);
        //add remove btn to div
        let span = document.createElement('span');
        span.className = 'del';
        span.appendChild(document.createTextNode('delete'));
        div.appendChild(span);
        // add to page
        result.appendChild(div);
    })

}

function saveInStorage(arrayOfTasks) {
    window.localStorage.list = JSON.stringify(arrayOfTasks);
}

function getFromStorage() {
    const data = window.localStorage.list;
//    result.innerHTML = tasks;
    if(data) {
    let tasks = JSON.parse(data);
        addElementToPage(tasks);
    }
}
getFromStorage()

function deleteTaskwith(taskId) {
//    for(let j=0;j<array.length;j+=1) {
//        console.log(`${array[j].id} === ${taskId}`);
//    }
    arrayOfTasks = array.filter((task) => {
        return task.id != taskId;  
    });
    saveInStorage(arrayOfTasks);
}

input.onclick = () => result.style.display = "";
let i =0;

button.onclick = () => {
        if(input.value != '') {
            i++;
            addTaskToarray(input.value);
            input.value = "";
        }
    }
//const txt = document.createTextNode(input.value);
//li.appendChild(txt);
//    creatRemoveBtn();
////li.appendChild(creatRemoveBtn());
//    saveInStorage();
//    console.log(li);
//// li.style.listStyle = "none";
//	result.classList.add('show2');
//	result.classList.remove('hide');

//result.appendChild(li);


//setTimeout(() => {
//	result.classList.add('hide');
//	result.classList.remove('show');
//}, 500);