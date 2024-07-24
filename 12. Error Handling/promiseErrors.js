// Error Handling in Promises

// A promise that randomly resolves/rejects. Use .catch() to handle the error and log it to the console

const promise = new Promise((resolve, reject) => {
  const random = Math.random();
  if (random < 0.5) {
    resolve("success");
  } else {
    reject("error");
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Use try ... catch to handle the error for the promise

async function handlePromise() {
  try {
    const data = await promise;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

handlePromise();
