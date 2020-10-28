import React, { useState } from "react";
import InputField from "./inputField";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    underline: {
      "&&&:before": {
        borderBottom: "none",
      },
    },
  },
}));

const TaskColumn = ({ title }) => {
  const [items, setItems] = useState([{ value: "" }]);
  const classes = useStyles();

  const handleChangeValue = (event, index) => {
    const rows = items.map((item) => ({ ...item }));
    const removing = rows[index].value.length > event.target.value.length;
    rows[index].value = event.target.value;

    if (!event.target.value && items.length > 1) {
      rows.splice(index, 1);
    }
    if (event.target.value.length === 1 && !removing) {
      rows.push({ value: "" });
    }
    setItems(rows);
  };

  return (
    <div className={`container ${classes.root}`}>
      <div className="title_row">
        <span>{title}</span>
      </div>
      <div className="body_row">
        {items.map((item, index) => (
          <div className="text_box" key={index}>
            <InputField
              index={index}
              handleChangeValue={handleChangeValue}
              item={item}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
