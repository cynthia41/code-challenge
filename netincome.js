let basicsalary =prompt("enter your basic salary")
let nhif =prompt("enter nhif deduction")
let nssf =prompt("enter nssf deduction")
let paye =prompt("enter paye")
let netIncome = prompt("enter basicsalary -(nhif+nssf+paye)")

let basicSalary = 40000;
let oldNSSFRates = true;

if (basicSalary == null || basicSalary == "") {
  alert("Please give your gross pay.");
} else {
  function calculations(
    basicSalary,
    oldNSSFRates,
    pensionContribution,
    deductionsOther,
    insuranceRelief
  ) {
    
    if (basicSalary >= 0 && basicSalary <= 5999) {
      nhif = 150;
    } else if (basicSalary >= 6000 && basicSalary <= 7999) {
      nhif = 300;
    } else if (basicSalary >= 8000 && basicSalary <= 11999) {
      nhif = 400;
    } else if (basicSalary >= 12000 && basicSalary <= 14999) {
      nhif = 500;
    } else if (basicSalary >= 15000 && basicSalary <= 19999) {
      nhif = 600;
    } else if (basicSalary >= 20000 && basicsalary <= 24999) {
      nhif = 750;
    } else if (basicSalary >= 25000 && basicSalary <= 29999) {
      nhif = 850;
    } else if (basicSalary >= 30000 && basicSalary <= 34999) {
      nhif = 900;
    } else if (basicSalary >= 35000 && basicSalary <= 39999) {
      nhif = 950;
    } else if (basicSalary >= 40000 && basicSalary <= 44999) {
      nhif = 1000;
    } else if (basicSalary >= 45000 && basicSalary <= 49999) {
      nhif = 1100;
    } else if (basicSalary >= 50000 && basicSalary <= 59999) {
      nhif = 1200;
    } else if (basicSalary >= 60000 && basicSalary <= 69999) {
      nhif = 1300;
    } else if (basicSalary >= 70000 && basicSalary <= 79999) {
      nhif = 1400;
    } else if (basicSalary >= 80000 && basicSalary <= 89999) {
      nhif = 1500;
    } else if (basicSalary >= 90000 && basicSalary <= 99999) {
      nhif = 1600;
    } else {
      nhif = 1700;
    }

    if (oldNSSFRates === true) {
      if (basicSalary <= 6000) {
        nssf = 0.06 * basicSalary;
      } else if (basicSalary > 6000 && basicSalary <= 18000) {
        let tier1 = 360;
        let tier2 = 0.06 * (basicSalary - 6000);
        nssf = tier1 + tier2;
      } else if (basicSalary > 18000) {
        nssf = 720;
      } else {
        nssf = 0;
      }
    } else if (oldNSSFRates === false) {
      nssf = 200;
    }
    let paye = basicsalary - 200;
    let netIncome =
      basicSalary -
      (nssf + nhif + pensionContribution + deductionOthers) +
      insuranceRelief;
    console.log(
      `nhif: ${nhif}`,
      `nssf: ${nssf}`,
      `paye: ${paye}`,
      `netIncome: ${netIncome}`
    );

    // return nhif, nssf, paye, netIncome;
  }

//   calculations(basicSalary, oldNSSFRates);
}
console.log (basicSalary = 56000)
console.log (nhif = 1200)
console.log (nssf = 720) 
console.log (paye = 1000)
console.log (netIncome = 56000 - (1200+720+1000))



// used to calculate employee net income. nif, paye and the nssf
// conole.log is used to return the result of the calculation
// if statement is used to evaluate the values of the expression in order to bring back results
