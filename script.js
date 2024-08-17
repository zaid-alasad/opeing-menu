const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');
console.log(btnOpenModel);

//when we end up using using a linked list to d othe nodes we need to implement
//them in a loop to be able to modify them

const openModel = function () {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModel.length; i++) {
  btnOpenModel[i].addEventListener('click', openModel);
}

//create an annoynemas function as it will only be used once
const closeModel = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModel.addEventListener('click', closeModel);

overlay.addEventListener('click', closeModel);

//now lets add a keybord event to exit when we click esc

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    {
      closeModel();
    }
  }
});
