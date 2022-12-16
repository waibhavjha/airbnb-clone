import React from "react"
import myProfilePic from "../images/airbnb-logo.png"

export default function Navbar(){
    return (
        <nav>
        <img src={myProfilePic} alt ="My Profile Pic"className="header-img" />
        </nav>
    )
}