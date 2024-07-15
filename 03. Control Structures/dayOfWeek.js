// Write a script that uses a switch statement to print the day of the week

const dayOfWeek = (day) => {
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid day");
  }
};

dayOfWeek(0); // Invalid day
dayOfWeek(1); // Monday
dayOfWeek(4); // Thursday
dayOfWeek(7); // Sunday
dayOfWeek(8); // Invalid day
