const   engInput = document.getElementById('input-eng'),
        rusInput = document.getElementById('input-rus'),
        btnSave = document.querySelector('.btn-save'),
        inputs = document.querySelectorAll('input'),
        tableWords = document.querySelector('.table-words');
        
let     words,
        engValue,
        rusValue;
const activateBtnDelete = () => { 
    btnDeleteWord = document.querySelectorAll('.btn-del');
    btnDeleteWord.forEach(function (btn,i){
        btn.addEventListener('click', function(){
            words.splice(i,1);
            localStorage.setItem('words', JSON.stringify(words));
            setWordsInTable();    
        });
    });
};
const setWordsInTable = () => { 
    if (!localStorage.words) {
        words = [];
    } else {
        words = JSON.parse(localStorage.getItem('words'));
        tableWords.innerHTML = '';
        words.forEach( (el,i) =>{
            addWord(i);
        });
        activateBtnDelete();
    };
};
const addWord = index => {
    tableWords.innerHTML += `
    <tr class="table-row">
        <td class="table__col">${words[index].english}</td>
        <td class="table__col">${words[index].russian}</td>
        <td class="table__col-del"><button class="btn-del"><i class="fas fa-trash-alt"></i></button></td>
    </tr>
    `;
};
class CreateWord { 
    constructor (english, russian){
        this.english = english;
        this.russian = russian;
    };
};
setWordsInTable();
btnSave.addEventListener('click', () => { 
    engValue = engInput.value,
    rusValue = rusInput.value;
    const checkInputs = (value, input) => {
        if (value.length < 2 || !isNaN(value)) {
            input.classList.add('error');
            return false;
        } else {
            input.classList.remove('error');
            return true;
        } 
    }
    const checkEngValue = () =>{
        if (/[a-zA-Z]/.test(engValue)){
            return checkInputs(engValue, engInput);
        } else {
            engInput.classList.add('error');
            return false;
        }
    }
    const checkRusValue = () =>{
        if (/[а-яА-ЯёЁ]/.test(rusValue)){
            return checkInputs(rusValue, rusInput)
        } else {
            rusInput.classList.add('error');
            return false;
        } 
    }
    if (checkEngValue() && checkRusValue()) {
        words.push(new CreateWord(engValue, rusValue));
        localStorage.setItem('words', JSON.stringify(words));
        addWord(words.length - 1);
        activateBtnDelete();
    }      
});
