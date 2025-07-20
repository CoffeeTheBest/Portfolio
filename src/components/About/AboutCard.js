import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Huzaifa </span>
            from <span className="purple"> Wah Cantt, Pakistan.</span>
            <br />
             currently studying Computer Science at COMSATS University, and happily drowning in code (on purpose).
            <br />
            I’m not working at a big tech company… yet 😎
            <br />
            But I’ve been busy learning, <span className="purple">building, breaking, and rebuilding</span> — mostly in the world of web development, with a soft spot for <span className="purple">Blockchain, React, Node.js</span>, and all things <span className="purple">JavaScript.</span>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code isn't just logic — it's poetry written in syntax, solving problems one semicolon at a time."{" "}
          </p>
          <footer className="blockquote-footer">Huzaifa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
