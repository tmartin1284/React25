// This function expects a JS object as an argument
// The object should contain the following properties
// - inversionInicial: The initial investment amount
// - inversionAnual: The amount invested every year
// - interes: The expected (annual) rate of return
// - duracion: The investment duracion (time frame)

type InvestmentParams = {
  inversionInicial: number;
  inversionAnual: number;
  interes: number;
  duracion: number;
};
export function calculateInvestmentResults({
  inversionInicial,
  inversionAnual,
  interes,
  duracion,
}: InvestmentParams) {
  const annualData: {
    year: number;
    investmentValue: number;
    interest: number;
    totalinterest: number;
    investmentCapital: number;
  }[] = [];
  let investmentValue: number = inversionInicial;
  let investmentCapital: number = inversionInicial;
  let totalInterest: number = 0;
  //console.log(investmentValue);
  for (let i: number = 0; i < duracion; i++) {
    const interestEarnedInYear: number = investmentValue * (interes / 100);
    investmentValue += interestEarnedInYear + inversionAnual;
    totalInterest += interestEarnedInYear;
    investmentCapital += inversionAnual;
    annualData.push({
      year: i + 1, // year identifier
      investmentValue: investmentValue, // investment value at end of year
      interest: interestEarnedInYear, // the amount of interest earned in this year
      totalinterest: totalInterest, // the total amount of interest earned
      investmentCapital: investmentCapital, // investment added in this year
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "eur",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
