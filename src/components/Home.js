import React from "react";

import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div className="home-container">
      <TopBar />
      <Dashboard />
    </div>
  );
};

export default Home;