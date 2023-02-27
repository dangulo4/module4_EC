let miles;
let gallons;
let mpg;
let again;

do {
  miles = parseFloat(prompt('Enter miles driven'));
  gallons = parseFloat(prompt("How many gallons does your car's tank hold"));
  if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
    mpg = miles / gallons;
    console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);
  } else {
    alert('One or both entries are invalid.');
  }
  again = prompt('Run application again? (y or n)', 'y').toLowerCase();
  // PROMPT USER UNTIL THE USER ENTERS A VALID ENTRY
  while (true) {
    if (again == 'y' || again == 'n') {
      break;
    } else {
      again = prompt('Run application again? (y or n)', 'y').toLowerCase();
    }
  }
} while (again === 'y');
console.log('Application has exited.');
