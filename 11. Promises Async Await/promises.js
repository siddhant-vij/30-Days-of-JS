// Task 1: Create a promise that resolves after 2 seconds and logs the message to the console
const resolvePromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
};

resolvePromise()
  .then((data) => {
    console.log("data:", data);
    console.log("-".repeat(10));
  })
  .catch((err) => {
    console.log(err);
  });

// Task 2: Create a promise that rejects after 2 seconds and logs the error to the console
const rejectPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("rejected");
    }, 2000);
  });
};

rejectPromise()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("err:", err);
    console.log("-".repeat(10));
  });

// Task 3: Create a sequence of promises that simulates fetching data from an API and logs the message to the console - in sequence.
const getUserId = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const id = Math.floor(Math.random() * 5);
      resolve(id);
    }, 2000);
  });
};

const userNames = ["John", "Jane", "Bob", "Alice", "Mark"];

const getUserName = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userNames[id]);
    }, 2000);
  });
};

// Using Promises
// getUserId()
//   .then((id) => {
//     console.log("id:", id);
//     return getUserName(id);
//   })
//   .then((name) => {
//     console.log("name:", name);
//     console.log("-".repeat(10));
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Using async/await
const fetchData = async () => {
  try {
    const id = await getUserId();
    console.log("id:", id);
    const name = await getUserName(id);
    console.log("name:", name);
    console.log("-".repeat(10));
  } catch (err) {
    console.log(err);
  }
};

fetchData();