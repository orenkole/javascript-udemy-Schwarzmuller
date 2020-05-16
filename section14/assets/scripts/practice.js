const button = document.querySelector('button');

const getUserPosition = () => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => resolve(success),
      error => reject(error),
    )
  });
  return promise;
}

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(resolve('Done!'), duration);
  });
  return promise;
}

const trackUserHandler = () => {
  let positionData;
  getUserPosition()
    .then(
      posData => {
        positionData = posData;
        return setTimer(2000);
      },
    )
    .then(
      data => console.log(data, positionData)
    )
  // executes first right away, without waiting for other promises
  console.log('getting postition ...');
}


(async function() {
  await setTimer(1000);
})();

// async function trackUserHandler() {
//   let posData;
//   let timerData;
//   try {
//     posData = await getUserPosition();
//   } catch (error) {
//     console.log(error);
//   }
//   timerData = await setTimer(2000);
//   console.log(timerData, posData);
//   this is wrapped in promise and waits for other promises
//   console.log('getting postition ...'); 
// }

button.addEventListener('click', trackUserHandler);

// Promise.all( [getUserPosition(), setTimer(5000)] ).then(
//   data => console.log(data)
// );

Promise.allSettled( [getUserPosition(), setTimer(5000)] )
  .then(promiseData => console.log(promiseData))

