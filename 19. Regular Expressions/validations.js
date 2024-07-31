const passwordsToTest = [
  "abcd",
  "Password123",
  "password123",
  "password",
  "PASSWORD",
  "a@bcDe4",
  "P@ssw0rd",
  "P@ssw0rd1",
  "P@ssw0rd!",
];

// This regular expression checks for a password that satisfies the following conditions:
// 1. It has at least one lowercase letter (a-z)
// 2. It has at least one uppercase letter (A-Z)
// 3. It has at least one digit (0-9)
// 4. It has at least one special character (@$!%*?&)
// 5. It is at least 8 characters long
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

passwordsToTest.forEach((password) => {
  console.log(`${password}: ${passwordRegex.test(password)}`);
});
