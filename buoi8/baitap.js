
function getGrade(score) {
    if (score >= 85) return "A";
    else if (score >= 70) return "B";
    else if (score >= 50) return "C";
    else return "D";
  }
  
  
  
  console.log("Score 92 → Grade:", getGrade(92)); // A
  console.log("Score 75 → Grade:", getGrade(75)); // B
  console.log("Score 55 → Grade:", getGrade(55)); // C
  console.log("Score 30 → Grade:", getGrade(30)); // D
  
 
  function calculateElectricBill(kwh) {
    let bill = 0;
    if (kwh <= 50) {
      bill = kwh * 1500;
    } else if (kwh <= 100) {
      bill = 50 * 1500 + (kwh - 50) * 2000;
    } else {
      bill = 50 * 1500 + 50 * 2000 + (kwh - 100) * 3000;
    }
    return bill;
  }
  

  console.log("30 kWh →", calculateElectricBill(30).toLocaleString(), "VND");  
  console.log("75 kWh →", calculateElectricBill(75).toLocaleString(), "VND");  
  console.log("120 kWh →", calculateElectricBill(120).toLocaleString(), "VND");  