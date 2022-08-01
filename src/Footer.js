import React from "react";
import Twitter from "./Twitter.svg";
import Facebook from "./Facebook.svg";
import Instagram from "./Instagram.svg";
import Github from "./Github.svg";

export default function Footer(){
    return (
        <div className="footer">
            <div><img src={Twitter} alt ="Twitter"></img></div>
            <div><img src={Facebook} alt ="Facebook"></img></div>
            <div><img src={Instagram} alt ="Instagram"></img></div>
            <div><img src={Github} alt ="Github"></img></div>
        </div>
      );
}