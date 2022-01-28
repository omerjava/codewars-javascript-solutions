/*Exercise : Child allowance
 A mother is entitled to € 25.00 child allowance per child.  She will receive a 
supplement of €12.50 for the third child (and each subsequent child). 
For the fifth (and each subsequent) child, she will receive an additional
allowance of €7.50.  If the mother's monthly wage is less than or equal 
to €500.00, she will receive a 25% surcharge on the child benefit.  
But if her monthly wage is greater than €2000.00, she will receive 25% 
less child benefit.  A mother is always entitled to a minimum of €25.00 per child.  

Question: Read in the number of children and monthly wages, and show the child 
benefit to which the mother is entitled.  (For example, 5 children and € 1000.00 
monthly wage gives € 170.00 child benefit).*/

"use strict";

function childAllowance(childNum, wage) {
  if (childNum < 0 || wage < 0) return "Enter a positive number!";
  if (typeof childNum !== "number" || typeof wage !== "number")
    return "Enter a positive number!";
  if (Number.isInteger(childNum) === false)
    return "Enter a valid Child Number!";
  const basePerChildBenefit = 25;
  const extraBenefitFrom3Child = 12.5;
  const extraBenefitFrom5Child = 7.5;
  let childBenefit = 0;
  const minChildBenefit = basePerChildBenefit * childNum;

  if (childNum <= 2) {
    childBenefit = basePerChildBenefit * childNum;
    if (wage <= 500) {
      childBenefit = childBenefit * 1.25;
    }
    return childBenefit;
  } else if (childNum <= 4) {
    childBenefit =
      basePerChildBenefit * childNum + extraBenefitFrom3Child * (childNum - 2);
    if (wage <= 500) {
      childBenefit = childBenefit * 1.25;
    } else if (wage > 2000) {
      childBenefit = childBenefit * 0.75;
      if (childBenefit < minChildBenefit) {
        childBenefit = minChildBenefit;
      }
    }
    return childBenefit;
  } else if (childNum > 4) {
    childBenefit =
      basePerChildBenefit * childNum +
      extraBenefitFrom3Child * (childNum - 2) +
      extraBenefitFrom5Child * (childNum - 4);
    if (wage <= 500) {
      childBenefit = childBenefit * 1.25;
    } else if (wage > 2000) {
      childBenefit = childBenefit * 0.75;
      if (childBenefit < minChildBenefit) {
        childBenefit = minChildBenefit;
      }
    }
    return childBenefit;
  }
}

console.log(childAllowance(5, 1000));
