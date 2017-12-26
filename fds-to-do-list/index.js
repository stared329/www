const addButtonEl = document.querySelector('#add-button');
const toDoInputEl = document.querySelector('#todo-input');
const toDoDiv = document.querySelector('.list-wrap');

addButtonEl.addEventListener('click', e => {
  const todoText = toDoInputEl.value;
  const newDiv = document.createElement('div');
  const delBtn = document.createElement('button');
  toDoInputEl.value = "";
  newDiv.textContent = todoText;
  delBtn.textContent = 'x';
  delBtn.addEventListener('click', e => {
    const item = e.target.parentNode;
    item.parentNode.removeChild(item);
  });
  newDiv.addEventListener('click', e => {
    if (newDiv.classList.contains('complete')) {
      newDiv.classList.remove('complete');
    } else {
      newDiv.classList.add('complete');
    }
  });
  newDiv.appendChild(delBtn);
  toDoDiv.appendChild(newDiv);
});