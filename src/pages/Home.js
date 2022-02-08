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
          <a href="https://github.com/thangzathang/rickandmortyapp" className="gitLink" target="_blank" rel="noopener noreferrer">
            Thang Za Thang.
          </a>
        </p>
        <br />
        <p>For the technical round of the interview we would like you to create a ReactJS </p>
        <p>application that displays characters from the Rick and Morty GraphQL API.</p> <br />
        <p className="primary textTitle">Minimum requirements: </p> <br />
        <p>Characters Page</p>
        <p>• List characters and display their name and image</p>
        <p>• Allowing searching for characters based on their name</p>
        <p>• Link each character to their details page</p>
        <br />
        <p>Character Details Page</p>
        <p>• Display all of the characters information</p>
        <p>• List the episodes that the character appears in</p>
        <br />
        <p className="primary textTitle">Advanced: </p>
        <br />
        <p>• Add pagination to the Characters page</p>
        <p>• Allowing filtering of characters based on gender, species, status, and type</p>
        <p>• Write a unit test for one of your presentational components</p>
        <Link to="/characters">
          <a href className="btn">
            Characters List
          </a>
        </Link>
      </div>
    </>
  );
}
