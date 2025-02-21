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
    li.classList.add("list-none" ,"bg-white" ,"mt-3" , "p-2","rounded")

    const p = document.createElement('p')
    p.innerHTML = inputText;
    li.appendChild(p);

    output.appendChild(li);
    textInput.value = ""
})