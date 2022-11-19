import throttle from 'lodash.throttle';
const refs = {
    form: document.querySelector('.feedback-form'),
    submitBtn: document.querySelector('button'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}

const onFormCheck = () => {
    localStorage.setItem('feedback-form-state',
    JSON.stringify({ email: refs.input.value, message: refs.textarea.value }));
};

const onSubmitClick = (e) => {
    e.preventDefault();
    const formObj = {
        email: refs.input.value,
        message: refs.textarea.value,
    };
    localStorage.clear();
    refs.form.reset();
    console.log(formObj);
};

refs.form.addEventListener('input', throttle(onFormCheck, 500));
refs.submitBtn.addEventListener('click', onSubmitClick);