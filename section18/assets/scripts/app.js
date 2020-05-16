const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data) {
  return fetch(
    url,
    {
      method: method,
      // body: JSON.stringify(data),
      body: data,
    }
  ).then(response => {
    if(response.status >= 200 && response.status < 300) {
      response.json();
    } else {
      return response.json().then(
        errData => {
          console.log(errData);
          throw new Error(errData);
        }
      );
    }
  })
  .catch(
    error => console.log(error)
  );
  // const promise = new Promise((resolve, reject) => {
  //   const xhr = new XMLHttpRequest();
  //   xhr.setRequestHeader('Content-Type', 'application/json')
  //   xhr.open(method, url);
  //   xhr.responseType = 'json';
  //   xhr.onload = function() {
  //     if(xhr.status >= 200 && xhr.status < 300) {
  //       resolve(xhr.response);
  //     } else {
  //       xhr.response; // here we have access to response
  //       reject(new Error('Something went wrong'))
  //     }
  //   }
  //   xhr.onerror = function() {
  //     reject(new Error('Failed to send request'))
  //   }
  //   xhr.send(JSON.stringify(data));
  // })
  // return promise;
}

async function fetchPosts() {
  // try {
    const responseData = await sendHttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/pos'
    )
    for(const post of responseData) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.append(postEl);
    }
  // } catch(err) {
  //  alert(err);
  // }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId
  };

  const formData = new FormData(form);
  // formData.append('title', title);
  // formData.append('body', content);
  formData.append('userId', userId);

  sendHttpRequest(
    'POST',
    'https://jsonplaceholder.typicode.com/posts',
    formData,
  )
}

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', event => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;
  createPost(enteredTitle, enteredContent);
})

postList.addEventListener('click', event => {
  if(event.target.tagName === 'button') {
    const postId = event.target.closest('li').id;
    sendHttpRequest(
      'DELETE',
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    )
  }
})