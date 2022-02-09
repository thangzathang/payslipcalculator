import React, { useEffect, useState } from "react";

const Payslip = () => {
  // All Form inputs state
  const [inputData, setInputData] = useState({
    firstName: "Thang",
    lastName: "Za Thang",
    salary: 60050,
    super: 9,
  });

  // Users State - We will loop through this list.
  const [usersData, setUsersData] = useState([]);

  // DRY code for all input data.
  function handleChange(event) {
    const { name, value } = event.target;
    setInputData((prevInputData) => ({ ...prevInputData, [name]: value }));
  }

  // When form is submitted - calculate payslip and clear fields.
  const handleSubmit = (event) => {
    event.preventDefault();
    // Calculate all required values
    makePayslip();
    // Clear Fields
    setInputData({ firstName: "", lastName: "", salary: 0, super: 0 });
  };

  // Reducer for income tax
  /*
    The tax table is turned into a kinda reducer function.
    This is to show that I can do reducers and also more simpler.
  */
  function incomeReducer(state, action) {
    switch (action.type) {
      case "BRACKET_ONE":
        return { incomeTax: 0 };
      case "BRACKET_TWO":
        return { incomeTax: Math.ceil((action.payload.salary * 0.19) / 12) };
      case "BRACKET_THREE":
        return { incomeTax: Math.ceil((3572 + (action.payload.salary - 37000) * 0.325) / 12) };
      case "BRACKET_FOUR":
        return { incomeTax: Math.ceil((19822 + (action.payload.salary - 87000) * 0.37) / 12) };
      case "BRACKET_FIVE":
        return { incomeTax: Math.ceil((54232 + (action.payload.salary - 180000) * 0.45) / 12) };
      default:
        return { state };
    }
  }

  // This function will make all the calculations for the fields required.
  const makePayslip = () => {
    let grossIncome = 0;
    let netIncome = 0;
    let superAnnuation = 0;
    let income = {
      incomeTax: 0,
    };

    // 1. Income Tax
    // Categorize Salary into the tax bracket.
    if (inputData.salary <= 182000) {
      // income = incomeReducer(income, { type: "BRACKET_ONE", payload: { salary: inputData.salary } });
      income = incomeReducer(income, { type: "BRACKET_ONE", payload: { salary: inputData.salary } });
    }
    if (inputData.salary > 18201 && inputData.salary <= 37000) {
      income = incomeReducer(income, { type: "BRACKET_THREE", payload: { salary: inputData.salary } });
    }
    if (inputData.salary > 37001 && inputData.salary <= 87001) {
      income = incomeReducer(income, { type: "BRACKET_FOUR", payload: { salary: inputData.salary } });
    }
    if (inputData.salary > 87001 && inputData.salary <= 180000) {
      income = incomeReducer(income, { type: "BRACKET_FIVE", payload: { salary: inputData.salary } });
    }

    // 2. Gross Income
    grossIncome = Math.floor(inputData.salary / 12);

    // 3. Net income
    netIncome = grossIncome - income.incomeTax;

    // 4. Super
    superAnnuation = Math.floor(grossIncome * (inputData.super / 100));

    // User state combines inputs and all calculation values
    setUsersData((prev) => [...prev, { ...inputData, grossIncome, incomeTax: income.incomeTax, netIncome, superAnnuation }]);
  };

  // Print the output - reverse() because it's nicer seeing your created form fill up instantly.
  const users = usersData?.map((user) => (
    <div className="payslipContainer">
      <div className="payslipBox" key={user.firstName + user.lastName + Math.random() * 100000}>
        <p>
          <span>Name:</span> {"\n"}
          {user.firstName} {user.lastName}
        </p>
        <p>
          {" "}
          <span>Gross Income:</span> ${user.grossIncome}
        </p>
        <p>
          {" "}
          <span>Income Tax:</span> ${user.incomeTax}
        </p>
        <p>
          {" "}
          <span>Net Income Tax:</span> ${user.netIncome}
        </p>
        <p>
          {" "}
          <span>Super:</span> ${user.superAnnuation}
        </p>
      </div>
    </div>
  ));

  return (
    <div>
      <h1 className="primary payTitle">Payslip Calculator</h1>
      <form onSubmit={handleSubmit} className="formContainer">
        <label className="formBox">
          First Name
          <input className="formInput" placeholder="e.g John" name="firstName" value={inputData.firstName} onChange={handleChange} required />
        </label>

        <label className="formBox">
          Last Name
          <input className="formInput" placeholder="e.g Smith" name="lastName" value={inputData.lastName} onChange={handleChange} required />
        </label>

        <label className="formBox">
          Annual Salary
          <input className="formInput" placeholder="55000" name="salary" type="number" value={inputData.salary} onChange={handleChange} required />
        </label>

        <label className="formBox">
          Super Rate
          <input className="formInput" placeholder="e.g 9" name="super" type="number" value={inputData.super} onChange={handleChange} required />
        </label>

        <button className="btn">Calculate Payslip</button>
      </form>
      <h1 className="primary title">Past Payslips:</h1>
      {users}
    </div>
  );
};

export default Payslip;
