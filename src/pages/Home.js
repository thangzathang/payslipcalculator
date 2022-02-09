import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header>
        <title>PayslipCalc App| Home</title>
      </header>
      <h1 className="title primary">Employee Monthly Payslip Challenge</h1>
      <div className="textContent">
        <p>
          This is an attempt at a front end challenge I received. See the code here at Github:{" "}
          <a href="https://github.com/thangzathang/payslipcalculator" className="gitLink" target="_blank" rel="noopener noreferrer">
            Payslip Calculator
          </a>
          .
        </p>
        <br />
        <p className="red textTitle">I will delete repository after tech receiver has reviewed my code.</p>
        <br />
        <hr className="border" />
        <p className="primary textTitle">How to use Payslip Calculator</p> <br />
        <p>1. Enter in all the data in the required fields</p>
        <p>2. Press "Calculate Payslip"</p>
        <p>3. You can calculate multiple entries.</p>
        <br />
        <Link to="/payslip">
          <a href className="btn">
            Goto Payslip
          </a>
        </Link>
      </div>
    </>
  );
}
