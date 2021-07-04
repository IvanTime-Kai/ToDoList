let toDoList = new ToDoList();
let validator = new Validator();

// lay the element
let getEle = function(id){
    return document.getElementById(id)
}


// render toDo
var renderToDo = function(toDoList){
    let content = '';
    toDoList.forEach(function(toDo, index){
        if(toDo.status == false){
            content += `
            <li> 
                ${toDo.taskName} 
                <div>
                <button id="btnXoa" onClick="xoaToDo(${toDo.id})"><i class="fa fa-trash-alt"></i></button>
                <button id="btnCheck" onClick="checkToDo(${toDo.id})"><i class="fa fa-check"></i></button>
                </div>               
            </li>
        `
        }        
    })
    getEle('todo').innerHTML = content;
}
var renderToDoCompleted = function(toDoList){
    let content = '';
    toDoList.forEach(function(toDo, index){
        if(toDo.status == true){
            content += `
            <li> 
                ${toDo.taskName} 
                <div>
                <button id="btnXoa" onClick="xoaToDo(${toDo.id})"><i class="fa fa-trash-alt"></i></button>
                <button id="btnCheck" onClick="checkCompleted(${toDo.id})"><i class="fa fa-check"></i></button>
                </div>               
            </li>
        `
        }        
    })
    getEle('completed').innerHTML = content;
}



// them todo
getEle('addItem').addEventListener('click', function(){
    let id = Math.random();
    let taskName = getEle('newTask').value;
    let status = false;

    let isValid = true;
    isValid &= validator.KiemTraRong(taskName,'notiInput','Vui lòng không để trống') && validator.KiemTraTrung(toDoList.arrToDo,taskName,false,'notiInput', "Thông tin đã tồn tại") && validator.KiemTraTrung(toDoList.arrToDo,taskName,true,'notiInput', "Thông tin đã hoàn thành")
    if(!isValid) return;

    let toDo = new ToDo(id, taskName, status);
    
    toDoList.themToDo(toDo);
    getEle('newTask').value = ''
    renderToDo(toDoList.arrToDo)
})

// xoa todo
function xoaToDo(id){
    toDoList.xoaToDo(id)
    renderToDo(toDoList.arrToDo)
    renderToDoCompleted(toDoList.arrToDo)
}
// check toDo
function checkToDo(id){
    toDoList.checkToDo(id)
    renderToDo(toDoList.arrToDo)
    renderToDoCompleted(toDoList.arrToDo)
}

function checkCompleted(id){
    toDoList.checkCompleted(id)
    renderToDo(toDoList.arrToDo)
    renderToDoCompleted(toDoList.arrToDo)
}