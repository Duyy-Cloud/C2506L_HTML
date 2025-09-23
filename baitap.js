function getGrade(score) {
  if (score >= 85) {
    return "A";
  } else if (score >= 70) {
    return "B"; // 70–84
  } else if (score >= 50) {
    return "C"; // 50–69
  } else {
    return "D"; // <50
  }
}


console.log(getGrade(90)); // A
console.log(getGrade(75)); // B
console.log(getGrade(60)); // C
console.log(getGrade(40)); // D



function calculateElectricBill(kwh) {
  if (kwh <= 50) {
    return kwh * 1500;
  } else if (kwh <= 100) {
    return 50 * 1500 + (kwh - 50) * 2000;
  } else {
    return 50 * 1500 + 50 * 2000 + (kwh - 100) * 3000;
  }
}

console.log(calculateElectricBill(40));   // 60000
console.log(calculateElectricBill(75));   // 125000
console.log(calculateElectricBill(120));  // 220000
