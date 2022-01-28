// Calculate the given age (year) of a person as age (days)

function calcAge(age) {
    if (age < 0) return 'Age must be bigger than 0';
    if (typeof age !== 'number') return 'Enter a number';
    const ageInDays = age * 365;
    return Math.floor(ageInDays);
}
console.log(calcAge(8743));
console.log(calcAge(43));
