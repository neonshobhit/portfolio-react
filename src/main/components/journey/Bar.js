import React from "react";
import Slider from "@material-ui/core/Slider";
import { Typography } from "@material-ui/core";
import useStyles from "./style";

const Bar = ({ handleChange, min, value, marks }) => {
  const classes = useStyles();
  return (
    <>
      <Typography id="discrete-slider" gutterBottom>
        Year
      </Typography>
      <Slider
        value={value}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={null}
        marks={marks}
        min={min}
        max={new Date().getFullYear()}
        className={classes.slider}
        onChange={handleChange}
      />
    </>
  );
};
export default Bar;
