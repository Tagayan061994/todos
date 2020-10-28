import React, { useState, useCallback } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const InputField = ({ index, handleChangeValue, item }) => {
  const [editable, setEditable] = useState(true);

  const handleFocus = useCallback(() => setEditable(false), [setEditable]);
  const handleBlur = useCallback(() => setEditable(true), [setEditable]);

  return (
    <TextField
      id={toString(index)}
      onChange={(e) => handleChangeValue(e, index)}
      value={item.value}
      onFocus={handleFocus}
      onBlur={handleBlur}
      InputProps={{
        disableUnderline: editable,
        startAdornment: (
          <InputAdornment position="start" style={{ fontWeight: "bold" }}>
            {index + 1}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputField;
