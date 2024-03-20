import * as React from 'react';
import Header from "../Header";
import dumbbell from "../../assets/images/Dumbbell.jpg"
import nutrition from "../../assets/images/nutrition.jpg"
import {Box} from "@mui/material";

function Home() {
  return (
    <>
      <Header />
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={5} textAlign="center">
        <div className="row mt-4">
          <div className="col-md-6">
            <img src={dumbbell} alt="Dumbbell Image" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="textbox mt-4">
              <p>Experience personalized workouts tailored to your fitness goals. Our advanced AI technology creates
                customized exercise routines designed to maximize your results.</p>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 order-md-2">
            <img src={nutrition} alt="Nutrition Image" className="img-fluid" />
          </div>
          <div className="col-md-6 order-md-1">
            <div className="textbox mt-4">
              <p>Unlock the power of AI-driven nutrition guides. Our intelligent system analyzes your dietary preferences
                and provides personalized nutrition recommendations, making your fitness journey more effective and
                enjoyable.</p>
            </div>
          </div>
        </div>
      </Box>
    </>
  )
}

export default Home;
