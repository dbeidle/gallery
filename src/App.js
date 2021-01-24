import React, { useEffect, useState } from "react";
import albums from "./albums.json";
import "./App.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
//import MobileStepper from "@material-ui/core/MobileStepper";
import Stepper from "./stepper";

console.log(albums[1].images.length);

const App = () => {
  const [index, setIndex] = useState(0);
  const picList = albums[1].images;
  const [image, setImage] = useState(picList[index].imgUrl);
  useEffect(() => {
    setImage(picList[index].imgUrl);
  }, [index, picList]);

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = picList.length;

  const onClickNext = () => {
    if (index + 1 === picList.length) {
      setIndex(0);
      setActiveStep(0);
    } else {
      setIndex(index + 1);
      setActiveStep(index + 1);
    }
    setImage(picList[index].imgUrl);
  };
  const onClickPrevious = () => {
    if (index - 1 === -1) {
      setIndex(picList.length - 1);
      setActiveStep(picList.length - 1);
    } else {
      setIndex(index - 1);
      setActiveStep(index - 1);
    }
    setImage(picList[index].imgUrl);
  };
  const handleClose = () => {
    console.log("Clicked close");
  };

  return (
    <div>
      <div
        style={{
          color: "#fff",
        }}>
        <Grid
          container
          alignitems="flex-start"
          justify="space-between"
          direction="row">
          <Grid>{albums[1].name}</Grid>
          <Grid styles={{ marginLeft: "auto" }}>
            <CloseIcon
              className="closeIcon"
              onClick={handleClose}
              cursor="pointer"
            />
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          flexDirection: "row",
          transition: "all 0s ease 0s",
          direction: "ltr",
          display: "flex",
          willChange: "transform",
          transform: "translate(0%, 0px)",
          alignItems: "center",
          justify: "center",
          marginTop: "5vh",
        }}>
        <ArrowBackIosIcon
          fontSize="large"
          style={{ color: "#fff", paddingLeft: "20" }}
          onClick={onClickPrevious}
        />

        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minWidth: "90vw",
            minHeight: "80vh",
            color: "#fff",
          }}></div>
        <ArrowForwardIosIcon
          fontSize="large"
          style={{ color: "#fff", paddingLeft: 5 }}
          onClick={onClickNext}
        />
      </div>
      <div>
        <Stepper steps={maxSteps} activeStep={activeStep} />
      </div>
    </div>
  );
};

export default App;
