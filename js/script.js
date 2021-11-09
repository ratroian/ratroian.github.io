const START_MESSAGE = 'Value not generated. Please click the generate button.';
const buttonGenerate = document.querySelector('#generate');
const buttonReset = document.querySelector('#reset');
const firstUserValue = document.querySelector('#firstValue');
const secondUserValue = document.querySelector('#secondValue');
const helpMessage = document.querySelector('.form__text-content');
let userValues = [];

const getRandomInteger = (first, second) => {
   const lower = Math.ceil(Math.min(first, second));
   const upper = Math.floor(Math.max(first, second));
   const result = Math.random() * (upper - lower + 1) + lower;

   return Math.floor(result);
};

const resetForm = () => {
   userValues.length = 0;
   firstUserValue.value = '';
   secondUserValue.value = '';
   buttonReset.setAttribute('disabled', 'disabled');
   buttonGenerate.removeAttribute('disabled', 'disabled');
   helpMessage.textContent = START_MESSAGE;
   firstUserValue.removeAttribute('readonly', 'readonly');
   secondUserValue.removeAttribute('readonly', 'readonly');
};

const generateApplicationLogic = () => {
   const resultValue = getRandomInteger(firstUserValue.value, secondUserValue.value);

   if (userValues.includes(resultValue) === false) {
      userValues.push(resultValue);
      helpMessage.textContent = `Generated value: ${resultValue}`;
      buttonReset.removeAttribute('disabled', 'disabled');
   } else {
      try {
         generateApplicationLogic();
      } catch (error) {
         helpMessage.textContent = `Oooops! All values are enumerated`;
         buttonGenerate.setAttribute('disabled', 'disabled');
      };
   };
   firstUserValue.setAttribute('readonly', 'readonly');
   secondUserValue.setAttribute('readonly', 'readonly');
};

buttonGenerate.addEventListener('click', generateApplicationLogic);
buttonReset.addEventListener('click', resetForm);
