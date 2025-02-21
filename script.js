const textInput = document.getElementById('text-Input');
const addBtn = document.getElementById('addBtn');
const output = document.getElementById('output');

let editTodo = null;

addBtn.addEventListener('click' , () =>{
    const inputText = textInput.value.trim();
    if(inputText.length  <= 0){
        alert('enter your value')
        return false;
    }
    if(addBtn.value === "Update"){
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = 'Add';
        textInput.value = '';
    }
    else{
        const li = document.createElement('li')
        li.classList.add("list-none" ,"bg-white" ,"mt-3" , "p-2","rounded" ,"flex" ,"w-full" ,"justify-between" ,"items-center") 

        const div = document.createElement('div');
            div.innerHTML ='<input id="checkbox" onclick="checkBtn(this)" type="Checkbox">'
            li.appendChild(div)

        const p = document.createElement('p')
        p.innerHTML = inputText;
        li.appendChild(p);

        const editbtn = document.createElement('button');
        editbtn.innerText = 'Edit';
        editbtn.classList.add("bg-blue-400" ,"px-4","py-1" ,"rounded")
        li.appendChild(editbtn);

        output.appendChild(li);
        textInput.value = ""
    }
})

output.addEventListener('click' , (e) =>{
    if(e.target.innerHTML === 'Edit'){
        textInput.value = e.target.previousElementSibling.innerHTML;
        textInput.focus();
        addBtn.value = "Update";
        editTodo = e;
    }
})




const checkBtn = (check) => {
    const checkbox = document.getElementById('checkbox');
    const text = check.parentNode.nextElementSibling; 
    checkbox.type = 'checkbox';
    if(checkbox.checked){
        text.style.textDecoration = "line-through";
    }
    else{
        text.style.textDecoration = 'none';
    }
    
}