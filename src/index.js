import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StarRating from "./StarRating";

// REACT_APP_OPENAI_API_KEY = "Your API Key here";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/*<StarRating
      maxRating={5}
      messages={["Terrible", "bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={0} />
<Test />*/}
  </React.StrictMode>
);
