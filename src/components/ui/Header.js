import axios from 'axios';
import React, { useState, useEffect } from 'react';
import logo from "../../img/bb2.jpg";
import logo1 from "../../img/bb1.png";
import logo2 from "../../img/bb4.jpg";


const Header = () => {


    

    return (
        <header className="center" style={{display:"block",margin:"auto"}}>
        <div style={{display:"block",margin:"auto"}}>
            <span>
                <img src={logo}  style={{width:"30%",margin:"1%"}} alt=""/>   
            </span>
            <span>
                <img src={logo1} style={{width:"30%",margin:"1%"}} alt=""/>   
            </span>
            <span>
                <img src={logo2} style={{width:"30%",margin:"1%"}} alt=""/>   
            </span>
        </div>
        </header>
    )
}

export default Header
