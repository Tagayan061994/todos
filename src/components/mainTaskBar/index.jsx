import React from "react";
import TaskColumn from "../taskColumn/index";
import "./style.css";

const Taskbar = () => {
  return (
    <div className="main_conatiner">
      <div className="heading_row">
        <h2 className="heading_text">Should I eat at McDonalds ?</h2>
      </div>
      <div className="columns_row">
        <div className="first_column">
          <TaskColumn title="PROS" />
        </div>
        <div className="second_column">
          <TaskColumn title="CONS" />
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
