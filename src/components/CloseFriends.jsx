import React from "react";
import Fav from "../styles/favStyles.module.scss";
import {
    FaPhone,
    FaArrowAltCircleRight
  } from "react-icons/fa";
  

const CloseFriends = () => {
  return (
    <div className={Fav.fav}>

{/* one */}
      <div className={Fav.favWrapper}>
        {/* //friends */}
        <div className={Fav.friend}>
               <h1>T</h1>
        </div>

        {/* //lenghtOFCall */}
        <div className={Fav.callLogs}>

        <div className={Fav.callLogsNames}>
            <h2>Maliki</h2>
            </div>
            <div className={Fav.callLogsNames}>
                <FaPhone></FaPhone>
                <h4>2</h4>
                <p>Out-Going</p>
                <p>8:14 Pm</p>
            </div>
        </div>

{/* //arrow */}
<div className={Fav.arrow}>
<FaArrowAltCircleRight></FaArrowAltCircleRight>
</div>
      </div>


 {/* two */}
      <div className={Fav.favWrapper}>
        {/* //friends */}
        <div className={Fav.friend}>
               <h1>T</h1>
        </div>

        {/* //lenghtOFCall */}
        <div className={Fav.callLogs}>

        <div className={Fav.callLogsNames}>
            <h2>Maliki</h2>
            </div>
            <div className={Fav.callLogsNames}>
                <FaPhone></FaPhone>
                <h4>2</h4>
                <p>Out-Going</p>
                <p>8:14 Pm</p>
            </div>
        </div>

{/* //arrow */}
<div className={Fav.arrow}>
<FaArrowAltCircleRight></FaArrowAltCircleRight>
</div>
      </div>





{/* 
three */}

      <div className={Fav.favWrapper}>
        {/* //friends */}
        <div className={Fav.friend}>
               <h1>T</h1>
        </div>

        {/* //lenghtOFCall */}
        <div className={Fav.callLogs}>

        <div className={Fav.callLogsNames}>
            <h2>Maliki</h2>
            </div>
            <div className={Fav.callLogsNames}>
                <FaPhone></FaPhone>
                <h4>2</h4>
                <p>Out-Going</p>
                <p>8:14 Pm</p>
            </div>
        </div>

{/* //arrow */}
<div className={Fav.arrow}>
<FaArrowAltCircleRight></FaArrowAltCircleRight>
</div>
      </div>



{/* four */}

      <div className={Fav.favWrapper}>
        {/* //friends */}
        <div className={Fav.friend}>
               <h1>T</h1>
        </div>

        {/* //lenghtOFCall */}
        <div className={Fav.callLogs}>

        <div className={Fav.callLogsNames}>
            <h2>Maliki</h2>
            </div>
            <div className={Fav.callLogsNames}>
                <FaPhone></FaPhone>
                <h4>2</h4>
                <p>Out-Going</p>
                <p>8:14 Pm</p>
            </div>
        </div>

{/* //arrow */}
<div className={Fav.arrow}>
<FaArrowAltCircleRight></FaArrowAltCircleRight>
</div>
      </div>


    </div>
  );
};

export default CloseFriends;
