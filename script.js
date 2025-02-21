const textInput = document.getElementById('text-Input');
const addBtn = document.getElementById('addBtn');
const output = document.getElementById('output');

addBtn.addEventListener('click' , () =>{
    const inputText = textInput.value.trim();
    if(inputText.length  <= 0){
        alert('enter your value')
        return false;
    }

    const li = document.createElement('li')
    li.classList.add("list-none" ,"bg-white" ,"mt-3" , "p-2","rounded" ,"flex" ,"w-full" ,"justify-between") 

    const div = document.createElement('div');
        div.innerHTML ='<input id="checkbox" onclick="checkBtn(this)" type="Checkbox">'
        li.appendChild(div)

    const p = document.createElement('p')
    p.innerHTML = inputText;
    li.appendChild(p);

    output.appendChild(li);
    textInput.value = ""
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