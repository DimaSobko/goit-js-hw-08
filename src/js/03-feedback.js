import throttle from 'lodash.throttle';
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
}

refs.textarea.addEventListener('input', onTextareaInput)

function onTextareaInput(event) {
    const value = event.Target.value
    console.log(value);
}

