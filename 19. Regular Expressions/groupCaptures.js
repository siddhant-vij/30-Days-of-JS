const phoneNumber = "(123) 456-7890";

const phoneRegex = /\((\d{3})\) (\d{3})-(\d{4})/;
const match = phoneNumber.match(phoneRegex);

console.log(`Area code: ${match[1]}`);
console.log(`Central office code: ${match[2]}`);
console.log(`Line number: ${match[3]}`);

const emailAddress = "abc@example.com";

const emailRegex = /(\w+)@(\w+)\.(\w+)/;
const match2 = emailAddress.match(emailRegex);

console.log(`Username: ${match2[1]}`);
console.log(`Domain: ${match2[2]}`);
console.log(`Extension: ${match2[3]}`);