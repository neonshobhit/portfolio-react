import React from "react";
import Slider from "@material-ui/core/Slider";
import { Typography } from "@material-ui/core";
import useStyles from "./style";

const Bar = ({ mini, maxi }) => {
  let marks;
  if (mini === maxi) {
    marks = [{ value: mini, label: mini }];
  } else {
    marks = [{ value: mini, label: mini }];
    for (let i = mini + 1; i < maxi; i++) {
      marks.push({ value: i, label: "" });
    }
    marks.push({ value: maxi, label: maxi });
  }
  const classes = useStyles();
  return (
    <>
      <Typography id="discrete-slider" gutterBottom>
        Year{" "}
        <span>
          {mini === maxi ? "( " + mini + " )" : "( " + mini + "-" + maxi + " )"}
        </span>
      </Typography>
      <Slider
        value={[mini === maxi ? mini - 1 : mini, maxi]}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={maxi - mini}
        marks={marks}
        min={mini === maxi ? mini === maxi : mini}
        max={maxi}
        className={classes.slider}
        color="secondary"
      />
    </>
  );
};
export default Bar;
