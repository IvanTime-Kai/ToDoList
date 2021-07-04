function ToDoList(){
    this.arrToDo = []
}

ToDoList.prototype.themToDo = function(toDo){
    this.arrToDo.push(toDo)
}
ToDoList.prototype.xoaToDo = function(id){
    let index = this.arrToDo.findIndex(p => p.id == id)
    if(index !== -1){
        this.arrToDo.splice(index,1)
    }
}
ToDoList.prototype.checkToDo = function(id){
    let index = this.arrToDo.findIndex(p => p.id == id)
    if(index !== -1){
        this.arrToDo[index].status = true;
    }
}
ToDoList.prototype.checkCompleted = function(id){
    let index = this.arrToDo.findIndex(p => p.id == id)
    if(index !== -1){
        this.arrToDo[index].status = false;
    }
}