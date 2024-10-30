let tasks = [{name: "taskName", completed: false}]

function showTasks(){
    if(tasks.length === 0) {
        alert("У вас нет задач!");
    } else {
        const  result = tasks.reduce(
            (acc, item, index)=> acc + `${index+1}. ${item.name} (Выполнено: ${item.completed})\n`,
            "Ваши задачи:\n"
    );
    alert(result);
    }
}

function addTask() {
    const newTask = prompt("Введите задачу")
    if (newTask){
        tasks.push({name: newTask, completed: false});
        showTasks();
    } else{
        alert("Вы не ввели задачу!")
    }
}

function completeTask() {     
    if (tasks.length === 0){
        alert("У вас нет задач!");
        return ;
    }
    showTasks();
    const nuberTask = +prompt("Введите номер задачи для пометки") - 1;

    if (nuberTask < 0 || nuberTask > tasks.length || isNaN(nuberTask)){
        alert("Некорректный номер задачи")
        return ;
    }   

    tasks[nuberTask].completed = true;
    alert(`Задача ${tasks[nuberTask].name} выполнена!`);
    showTasks();      
}
function deleteTask(){

    if (tasks.length === 0){
        alert("У вас нет задач!");
        return ;
    }
    showTasks();
    const nuberTask = +prompt("Введите номер задачи для удаления") - 1;

    if (nuberTask < 0 || nuberTask >= tasks.length || isNaN(nuberTask)) {
        alert("Некорректный номер задачи")
        return ;
    }

    const deletedTask = tasks.splice(nuberTask, 1);
    alert(`Задача ${deletedTask[0].name} удалена!`);
    showTasks();
}

function main(){
    let choice = null;

    do{
    choice = +prompt("Выберите действие \n 1: Показать задачи \n 2: Добавить задачу \n 3: Пометить задачу как выполненную \n 4: Удалить задачу \n 0: Для выхода из программы"  
    );
        switch(choice){
            case 0:
                alert("Выход из программы");
                break
            case 1:
                showTasks();
                break;
            case 2:
                addTask();
                break;
            case 3:
                completeTask ();
                break;
            case 4:
                deleteTask();
                break;
                default:
                    alert("Некорректный выбор")
        }
    } while(choice !== 0)
}

main ();