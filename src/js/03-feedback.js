import throttle from 'lodash.throttle';
const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}
const storageKey = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(storageKey)) || {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormCheck, 500));

render();

function onFormSubmit (e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(storageKey)));
    e.currentTarget.reset();
    localStorage.clear();
    formData = {};
};

function onFormCheck (e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(storageKey, JSON.stringify(formData));
};

function render () {
    const data = JSON.parse(localStorage.getItem(storageKey))
    if (data) {
        refs.input.value = data.email || '';
        refs.textarea.value = data.message || '';
}
};