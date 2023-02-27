// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
// VALIDATE - INVESTMENT SHOULD BE NUMERIC,
while (true) {
  if (investment > 0) {
    break;
  } else {
    investment = parseFloat(prompt('Investment amount as xxxx.xx must be greater than 0'));
  }
}
// RATE SHOULD BE BETWEEN 0% AND 6%,
rate = parseFloat(prompt('Enter interest rate as xx.x'));
while (true) {
  if (rate > 0 && rate <= 6) {
    break;
  } else {
    rate = parseFloat(prompt('Enter interest rate as xx.x between 0 and 6'));
  }
}
// YEARS SHOULD BE NUMBER BETWEEB 1 and 30.
years = parseInt(prompt('Enter the number of years you want to invest for'));
while (true) {
  if (years >= 1 && years <= 30) {
    break;
  } else {
    years = parseInt(prompt('Enter the number of years you want to invest for'));
  }
}

//CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
  futureValue = futureValue + (futureValue * rate) / 100;
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);
