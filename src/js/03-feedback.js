import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const submitBtn = document.querySelector('button');

const onFormCheck = (e) => {
    e.preventDefault();
    localStorage.setItem('feedback-form-state', JSON.stringify(e.target.value));
};
const onSubmitClick = (e) => {
    localStorage.clear();
    form.reset();
    console.log(email)
};

form.addEventListener('input', throttle(onFormCheck, 500));
submitBtn.addEventListener('click', onSubmitClick);