import React, { useState } from "react";
import { MobileStepper, Typography, Button } from "@material-ui/core";
import useStyles from "./style";
import Bar from "./Bar";

let mapi = {};
const journey = [
  { from: 2016, work: "Done My 8th." },
  { from: 2017, work: "Done My 10th." },
  { from: 2018, work: "Done My 12th." },
  { from: 2019, work: "Done My College." },
  { from: 2020, work: "Working As a Full Stack Developer." }
];
let minimum = 34567;

const marks = journey.map((jr, index) => {
  if (minimum > jr["from"]) minimum = jr["from"];
  mapi[jr["from"]] = index;
  return { value: jr["from"], label: jr["from"] };
});

const Journey = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(mapi[minimum]);
  const [value, setValue] = useState(minimum);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setValue(value + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setValue(value - 1);
  };
  const handleChange = (event, value) => {
    setActiveStep(mapi[value]);
    setValue(value);
  };

  return (
    <>
      <Typography
        variant="h5"
        color="textPrimary"
        className={classes.journeyText}
      >
        My Journey
      </Typography>
      <div className={classes.root}>
        <Bar
          handleChange={handleChange}
          min={minimum}
          value={value}
          marks={marks}
        />

        <Typography
          variant="h5"
          color="textPrimary"
          className={classes.typoText}
        >
          {journey[activeStep]["work"]}
        </Typography>

        <MobileStepper
          steps={journey.length}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === journey.length - 1}
            >
              Next
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              Back
            </Button>
          }
        />
      </div>
    </>
  );
};
export default Journey;
