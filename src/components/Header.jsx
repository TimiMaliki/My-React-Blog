import React from "react";
import headerStyles from "../styles/headerStyles.module.scss";
import {
  FaClock,
  FaHeadphones,
  FaSignal,
  FaBatteryHalf,
  FaBars,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className={headerStyles.header}>
      {/* network bar, phone percent */}
      <div className={headerStyles.bar}>
        {/* time */}
        <div className={headerStyles.time}>
          <p>10:21PM | 28.1kbs</p> <FaClock></FaClock>{" "}
          <FaHeadphones></FaHeadphones>
        </div>
        {/* battery life */}
        <div className={headerStyles.battery}>
          <FaSignal></FaSignal> <FaSignal></FaSignal>{" "}
          <FaBatteryHalf></FaBatteryHalf>50%
        </div>
      </div>

      {/* searchbar */}
      <div className={headerStyles.input}>
        {/* input */}
        <input type="text" value="Search numbers, names and more" />

        {/* e */}
        <div className={headerStyles.e}>
          <p>e</p>
          <div className={headerStyles.ep}></div>
        </div>
      </div>


    </div>
  );
};

export default Header;
