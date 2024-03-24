import React from "react";
import "./HomeStyles.css";
import Recommendations from "../../components/recommendations/Recommendations";

function Home() {
  return (
    <div className="home">
      <div className="home-div">
        <h1 className="greeting">This is Learnings</h1>
        <p>Showcasing your (and my) top coding resources.</p>
      </div>
      <Recommendations />
    </div>
  );
}

export default Home;
