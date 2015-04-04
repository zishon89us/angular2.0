/**
 * Created by Zeeshan on 4/4/2015.
 */

export class TodoStore {
    constructor(){
        this.todoList = [];
    }
    add(item){
        this.todoList.unshift({text:item,done:false});
    }
}