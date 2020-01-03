const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const clearAll = document.querySelector('.clearAll');
const checkAll = document.querySelector('.checkAll');

function addItem(e){
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

// Populate added items
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

// Check items
function toggleDone(e) {
  if(!e.target.matches('input')) return; // skip this unless its an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

// Clear all items and localStorage
function clearAllItems() {
  // Clear localStorage
  localStorage.clear();
  // Clear Items array
  while(items.length > 0) {
    items.pop();
  }
}

// Check All
function checkAllItems(e) {
  e.preventDefault();
  for(let i = 0; i < items.length; i++) {
    items[i].done = true;
    document.getElementById(`item${i}`).checked = items[i].done;
  }
  console.log("did it work?")
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
clearAll.addEventListener('click', clearAllItems);
checkAll.addEventListener('click', checkAllItems);

populateList(items, itemsList);

console.log(items);
