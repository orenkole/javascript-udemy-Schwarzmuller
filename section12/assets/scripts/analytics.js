const intervalId = setInterval(() => {
  console.log('sending analytics data');  
}, 2000);

clearInterval(intervalId);

const nyDate = new Date();

const customError = new Error('somethis went wrong!');
customError.code = 404;