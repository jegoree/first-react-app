// This will create an object that will contain some details
// after promise is executed. new Promise tells that this object
// will eventually have value, either resolved/rejected.
//

const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve('Success');
    }, 1000);
  } else {
    reject('Failure');
  }
});

// Once the promise is executed the you define what you want
// the programm to do. You can also thain then, keeping in
// mon that it only runs after a resolved callback function.

myPromise
  .then((value) => (value = '!!!'))
  .then((newValue) => console.log(newValue))
  .catch((rejectValue) => console.log(rejectValue));
