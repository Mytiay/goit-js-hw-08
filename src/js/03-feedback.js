import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const submitBtn = document.querySelector('button');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const onFormCheck = (e) => {
    
    localStorage.setItem('feedback-form-state', JSON.stringify(e.target.value));
};
const onSubmitClick = (e) => {
    e.preventDefault();
    const formObj = {
        email: input.value,
        message: textarea.value,
    };
    localStorage.clear();
    form.reset();
    console.log(formObj);
};

form.addEventListener('input', throttle(onFormCheck, 500));
submitBtn.addEventListener('click', onSubmitClick);