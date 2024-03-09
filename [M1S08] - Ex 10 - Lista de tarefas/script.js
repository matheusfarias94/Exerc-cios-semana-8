// função para adicionar nova tarefa
function addTask() {
    let input = document.getElementById('taskInput');
    let taskText = input.value.trim();

    if (taskText === '') {
        alert('Insira uma tarefa.');
        return;
    }

    // criando um novo item da lista
    let novaTarefa = document.createElement('li');
    novaTarefa.classList = 'task-item';

    // adiciona o texto da nova tarefa
    novaTarefa.textContent = taskText;

    // Adicionar botao de conclusao
    let completeButton = document.createElement('button');
    completeButton.classList = 'button-complete';
    completeButton.textContent = 'Concluir';
    completeButton.onclick = function () {
        toggleTaskComplete(novaTarefa);
    }
    novaTarefa.appendChild(completeButton);


    // botao de exclusão
    let deleteButton = document.createElement('button')
    completeButton.classList = 'button-delete';
    deleteButton.textContent = 'Excluir';
    deleteButton.onclick = function () {
        deleteTask(novaTarefa);
    }

    novaTarefa.appendChild(deleteButton);

    // adicionando novo item de lista a lista de tarefas
    document.getElementById('tarefas').appendChild(novaTarefa)


    // limpar campo de entrada apos adicionar tarefa
    input.value = '';
}

// função para marcar uma tarefa como concluida ou não concluida
function toggleTaskComplete(task) {
    task.classList.toggle('completed');

}

// funçao para excluir uma tarefa
function deleteTask(task) {
    task.remove();
}




