const textInput = document.getElementById('text-Input');
const addBtn = document.getElementById('addBtn');
const output = document.getElementById('output');

addBtn.addEventListener('click' , () =>{
    const inputText = inputBox.value.trim();
    if(inputText.length  <= 0){
        alert('enter your value')
        return false;
    }
})