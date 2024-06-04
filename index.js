
const form = document.querySelector('form');
function handleFormSubmit(event) {
  event.preventDefault();
  const amount = event.target.ExpanseAmount.value;
  const description = event.target.description.value;
  const category = event.target.category.value;

  const Expanse = {
    amount,
    description,
    category
  }
  localStorage.setItem(Expanse.amount, JSON.stringify(Expanse));
  displayUser(Expanse);
}

function displayUser(Expanse) {
  const ul = document.getElementById("list");
  const li = document.createElement('li');
  li.textContent = Expanse.amount + " - " + Expanse.description + " - " + Expanse.category;

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.addEventListener('click', delFun);
  
  function delFun() {
    ul.removeChild(li);
    localStorage.removeItem(Expanse.amount);
  }
  const editBtn = document.createElement('button');
  editBtn.textContent = "Edit";

  editBtn.addEventListener('click', editFun);

  function editFun() {
    ul.removeChild(li);
    localStorage.removeItem(Expanse);

    document.getElementById('ExpanseAmount').value = Expanse.amount;
    document.getElementById('description').value = Expanse.description;
    document.getElementById('category').value = Expanse.category;
  }
  li.appendChild(delBtn);
  li.appendChild(editBtn);
  ul.appendChild(li);
}
