// Seletores
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const themeToggle = document.getElementById('theme-toggle');

// Alternar tema
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Adicionar tarefa
addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Digite uma tarefa!');
    return;
  }

  // Criar elemento da tarefa
  const li = document.createElement('li');
  li.textContent = taskText;

  // Botão de concluir
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Botão de excluir
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Excluir';
  deleteButton.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(deleteButton);
  taskList.appendChild(li);

  // Limpar input
  taskInput.value = '';
}
