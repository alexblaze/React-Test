const createErrorDescription = (errors) =>
  Object.values(errors).map((errorArr) => errorArr[0]);

export default createErrorDescription;
