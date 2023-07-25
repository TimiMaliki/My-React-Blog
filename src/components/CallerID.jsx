import React from "react";
import Id from "../styles/idStyles.module.scss";

const CallerID = () => {
  return (
    <div className={Id.id}>
      <div className={Id.caller}>
        <div className={Id.callerRow}>
          <h1>T</h1>
        </div>
        <div className={Id.callerRowDetail}>
          <p>Setup caller Id</p>
        </div>
      </div>

      <div className={Id.caller}>
        <div className={Id.callerRow}>
          <h1>T</h1>
          <div className={Id.e}></div>
        </div>
        <div className={Id.callerRowDetail}>
          <p>Setup caller Id</p>
        </div>
      </div>

      <div className={Id.caller}>
        <div className={Id.callerRow}>
          <h1>T</h1>
          <div className={Id.e}></div>
        </div>

        <div className={Id.callerRowDetail}>
          <p>Setup caller Id</p>
        </div>
      </div>
    </div>
  );
};

export default CallerID;
