import React from "react";
import { FormControlLabel, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { blue } from "@material-ui/core/colors";

export const MatEdit = ({ index }) => {
  const handleEditClick = () => {
    console.log("hello");
  };

  return (
    <FormControlLabel
      control={
        <IconButton
          color="secondary"
          aria-label="add an alarm"
          onClick={handleEditClick}
        >
          <EditIcon style={{ color: blue[500] }} />
        </IconButton>
      }
    />
  );
};
