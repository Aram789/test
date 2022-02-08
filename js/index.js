let button = document.querySelector('button');
let input = document.querySelector('input');
let invalid_text = document.querySelector('.invalid_text')

button.addEventListener('click', () => {
    ValidateEmail(input)
})

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        input.style.border = '2px solid #F3CE00';
        invalid_text.textContent = '';
        return true;
    } else {
        input.style.border = '2px solid red';
        invalid_text.textContent = 'Пожалуйста, введите действительный адрес электронной почты';
        return false;
    }
}
