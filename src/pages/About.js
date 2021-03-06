import React from "react";

export default function About() {
  return (
    <>
      <header>
        <title>PayslipCalc App| Home</title>
      </header>
      <h1 className="title primary">
        Hi, I am Thang, <br />a fullstack web developer
      </h1>
      <div className="textContent">
        <div className="imageContainer">
          <img className="imageContainerProfile" src={require("../images/headshot.png")} alt="Headshot of Thang Za Thang" />
        </div>
        <p>A recent graduate of Australia&apos;s Coding Bootcamp - Coder Academy (Melbourne).</p>
        <p>My passion is to create fun and exciting apps on the web for my own amusement,</p>
        <p>using the skills I have learnt over my of web development journey.</p>
        <br />
        <p>I am a fullstack web developer. My biggest strength and confidence are in the </p>
        <p>traditional languages such as HTML, CSS, Javascript, React, NodeJS.</p>
        <br />
        <p> I have worked with other technologies such as Ruby, Ruby on Rails, AWS and Java.</p>
        <p> Proudly made projects based upon the M.E.R.N stack and React with Firebase.</p>
        <p>You can see more of my projects at the provided links below.</p>
        <br />
        <p>
          See more projects at my portfolio{" "}
          <a href="https://thangzathang.com/skills.html" className="gitLink" target="_blank" rel="noopener noreferrer">
            Thang Za Thang
          </a>
          .
        </p>
        <p>
          and my github{" "}
          <a href="https://github.com/thangzathang/" className="gitLink" target="_blank" rel="noopener noreferrer">
            Thang Za Thang
          </a>
          .
        </p>
        <br />
        <br />
      </div>
    </>
  );
}
