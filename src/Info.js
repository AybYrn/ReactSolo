import React from "react";
import Mail from "./Mail.svg";
import LinkedIn from "./LinkedIn.svg";

export default function Info() {
  return (
    <div>
      <div className="img"></div>
      <div className="info">
        <h2>Aybuke Yaren</h2>
        <h3 className="orange">Full-Stack Developer</h3>
        <p>aybukeyaren.com</p>
      </div>
      <div className="button_container">
        <button className="Mail">
          <img src={Mail} alt="Mail"></img>
          <p>Email</p>
        </button>
        <button className="LinkedIn">
          <img src={LinkedIn} alt="Mail"></img>
          <p>LinkedIn</p>
        </button>
      </div>
    </div>
  );
}
