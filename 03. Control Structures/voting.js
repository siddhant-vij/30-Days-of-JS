// Create a script that checks if a person is eligible to vote or not based on their age

const checkVotingEligibility = (age) => {
  if (age >= 18) {
    return "eligible";
  } else {
    return "ineligible";
  }
};

console.log(checkVotingEligibility(19)); // eligible
console.log(checkVotingEligibility(17)); // ineligible
