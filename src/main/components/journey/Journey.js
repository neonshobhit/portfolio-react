import React, { useState } from "react";
import useStyles from "./style";
import { useTheme } from "@material-ui/core/styles";
import { MobileStepper, Typography, Button } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import Bar from "./Bar";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

const journey = [
  { from: 2020, to: 2022, work: "Working As a Full Stack Developer." },
  { from: 2019, to: 2019, work: "Done My College." },
  { from: 2018, to: 2018, work: "Done My 12th." },
  { from: 2017, to: 2017, work: "Done My 10th." },
  { from: 2016, to: 2016, work: "Done My 8th." }
];

const Journey = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Typography variant="h4" className={classes.jouneyText}>
        My Journey
      </Typography>
      <div className={classes.root}>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {journey.map((step, index) => (
            <div key={index}>
              <Bar mini={step["from"]} maxi={step["to"]} />
              {Math.abs(activeStep - index) <= 2 ? (
                <Typography variant="h5" className={classes.typoText}>
                  {step["work"]}
                </Typography>
              ) : null}
            </div>
          ))}
        </SwipeableViews>
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
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </div>
    </>
  );
};
export default Journey;
