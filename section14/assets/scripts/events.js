// const button = document.querySelector('button');
const buttonClickHandler = (event) => {
  event.target.disabled = true;
  console.log(event);
}
// const boundFn = buttonClickHandler.bind(this);
// button.addEventListener('click', boundFn);

// setTimeout(() => {button.removeEventListener('click', buttonClickHandler)})

// const buttons = document.querySelectorAll('button');
// buttons.forEach(btn => {
//   btn.addEventListener('mouseenter', buttonClickHandler)
// })

// window.addEventListener('scroll', event => {
//   console.log(new Date().getMilliseconds());
// })

// let curElementNumber = 0;

// function scrollHandler() {
//     const distanceToBottom = document.body.getBoundingClientRect().bottom;

//     if (distanceToBottom < document.documentElement.clientHeight + 150) {
//         const newDataElement = document.createElement('div');
//         curElementNumber++;
//         newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
//         document.body.append(newDataElement);
//     }
// }

// window.addEventListener('scroll', scrollHandler);

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
})

const div = document.querySelector('div');
const button = document.querySelector('button');
div.addEventListener(
  'click',
  () => {
    console.log('clicked div'.toUpperCase());
    console.log(event);
  },
)
button.addEventListener('click', function(event) {
  event.stopImmediatePropagation();
  console.log('clicked button'.toUpperCase());
  console.log(event);
})

// const listItems = document.querySelectorAll('li');
// listItems.forEach(listItem => {
//   listItem.addEventListener('click', event => {
//     event.target.classList.toggle('highlight');
//   })
// })


const list = document.querySelector('ul');
list.addEventListener('click', event => {
  event.target.closest('li').classList.toggle('highlight');
  form.submit();
})