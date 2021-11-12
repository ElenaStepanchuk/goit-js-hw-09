import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
}

let delay = 0;
let position = 0;

// console.log(refs.form);
refs.form.addEventListener('submit', handleSubmitBtn);

function handleSubmitBtn(event) {
  event.preventDefault();
  console.log(event.currentTarget.elements);
  const elementForm = event.currentTarget.elements;
  const firstDelay = Number(elementForm.delay.value);
  const step = Number(elementForm.step.value);
  const amount = Number(elementForm.amount.value);

  promises(firstDelay, step, amount)
}

function promises(firstDelay, step, amount) {
  for (let i = 1; i <= amount; i += 1) {
    if (i === 1) {
      delay = firstDelay
    } else {
      delay += step
    }
    position = i

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
        console.log(`❌ Rejected promise ${position} in ${delay}ms`)
      })
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay })
      } else {
        // Reject
        reject({ position, delay })
      }
    }, delay)

})
}
