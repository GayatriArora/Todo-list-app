const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplete = (todo) => {
    
    const html = 
            `<li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="fas fa-trash-alt delete"></i>
            </li>`

    list.innerHTML += html

}

addForm.addEventListener('submit', event => {
    event.preventDefault();

    const todo = addForm.add.value.trim(); //trim trims extra white spaces before and after 
    if(todo.length){
    generateTemplete(todo);
    addForm.reset();  // to make the text disappear aftr it goes in the list-resets all input fields in form
    }
})

// delete todos

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

//Search todos

//function to filter
const filterTodos = (term) => {
	Array.from(list.children) //change to array to be able to use filter & forEach
	.filter((todo) => !todo.textContent.toLowerCase().includes(term))
	.forEach((todo) => todo.classList.add('filtered'))

	Array.from(list.children) //change to array to be able to use filter & forEach
	.filter((todo) => todo.textContent.toLowerCase().includes(term))
	.forEach((todo) => todo.classList.remove('filtered'))
}


//Keyup event
search.addEventListener('keyup', () => { 
  const term = search.value.trim().toLowerCase();
	filterTodos(term);
});
