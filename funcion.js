
const form   = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const span  = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidade();
    emailValidade();
    mainPasswordValidade();
    comparePasswordValidade();
});

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    span[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '2px solid green';
    span[index].style.display = 'none';
}

function nameValidade(){
    if(campos[0].value.length < 3)
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
}

function emailValidade(){
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}

function mainPasswordValidade(){
    if(campos[2].value.length < 8)
    {
        setError(2);
    }
    else
    {
        removeError(2);
        comparePassword();
    }
}

function comparePasswordValidade(){
    if(campos[2].value == campos[3].value && campos[3].value.length >= 8)
    {
        removeError(3);
    }
    else
    {
        setError(3);
    }
}
