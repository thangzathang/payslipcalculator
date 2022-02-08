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
            Thang Za Thang.
          </a>
        </p>
        <br />
        <p className="primary textTitle">I will delete repository after tech receiver has reviewed my code.</p>
        <br />

        {/* <p className="primary textTitle">Minimum requirements: </p> <br />
        <p>Characters Page</p>
        <p>• List characters and display their name and image</p>
        <p>• Allowing searching for characters based on their name</p>
        <p>• Link each character to their details page</p>
        <br /> */}

        <Link to="/paylslip">
          <a href className="btn">
            Goto Payslip
          </a>
        </Link>
      </div>
    </>
  );
}
