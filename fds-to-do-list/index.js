const addButtonEl = document.querySelector('#add-button');
const toDoInputEl = document.querySelector('#todo-input');
const toDoDiv = document.querySelector('.list-wrap');

addButtonEl.addEventListener('click', addBtnEvent);
addButtonEl.addEventListener('keyDown', addBtnEvent);
toDoInputEl.addEventListener('keyDown', addBtnEvent);

function addBtnEvent(e) {
  e.preventDefault();
  const todoTextArr = toDoInputEl.value.split(';');
  if (todoTextArr.length === 0) return;
  console.log(e);
  if ((typeof e === KeyboardEvent && e.key === "Enter") || e) {
    for (let item of todoTextArr) {
      if (item.length === 0) continue;
      toDoInputEl.value = "";
      const newDiv = document.createElement('div');
      const delBtn = document.createElement('button');
      newDiv.textContent = item;
      newDiv.setAttribute('tabindex', 0);
      delBtn.className = 'btn-remove';
      delBtn.textContent = 'x';
      delBtn.addEventListener('click', e => {
        const node = e.target.parentNode;
        node.parentNode.removeChild(node);
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
    }
  }
}