const button = document.querySelector('button');

const textParagraph = document.querySelector('p');
button.addEventListener('click', () => {
  // do something...
  const text = textParagraph.textContent;
  if(navigator.clipboard) {
    navigator.clipboard.writeText(text)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
  } else {
    alert('Feature not available. Please copy manually');
  }
});