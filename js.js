//task 1
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}


function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}


console.log(`${60}°C is ${celsiusToFahrenheit(60)} °F.`);
console.log(`${45}°F is ${fahrenheitToCelsius(45)}°C.`);

//task 2
function displayDayAndTime() {
  const now = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let period = hours >= 12 ? 'PM' : 'AM';

  
  hours = hours % 12;
  hours = hours ? hours : 12; 

  let time = `${hours} ${period} : ${minutes} : ${seconds}`;

  console.log(`Today is : ${day}.`);
  console.log(`Current time is : ${time}`);
}

displayDayAndTime();

//task 3
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return `${year} is a leap year.`;
  } else {
      return `${year} is not a leap year.`;
  }
}

console.log(isLeapYear(2000));
console.log(isLeapYear(2016));
console.log(isLeapYear(1800));

//task 4
function januaryFirstOnSunday() {
  let count = 0;
  let years = [];
  
  for (let year = 2014; year <= 2050; year++) {
      let date = new Date(year, 0, 1);
      if (date.getDay() === 0) {
          years.push(year);
          count++;
      }
  }
  
  console.log(`${count} times 1st January is being a Sunday.`);
  console.log(years.join('\n'));
}

januaryFirstOnSunday();

//task 5
function removeCharacter(str, position) {
  return str.slice(0, position) + str.slice(position + 1);
}

console.log(removeCharacter("Python", 0)); 
console.log(removeCharacter("Python", 3)); 
console.log(removeCharacter("Python", 5)); 