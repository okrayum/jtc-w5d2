import React, { useState, useEffect } from "react";
import "./RecommendationStyles.css";

function Recommendations() {
  const [inputValue, setInputValue] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedRecommendations = localStorage.getItem("recommendations");
    if (storedRecommendations) {
      try {
        setRecommendations(JSON.parse(storedRecommendations));
      } catch (error) {
        console.error("Error parsing recommendations:", error);
        setRecommendations([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("recommendations", JSON.stringify(recommendations));
  }, [recommendations]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      const newRecommendation = {
        id: Math.floor(Math.random() * 10000) + 1,
        text: inputValue,
      };
      setRecommendations([newRecommendation, ...recommendations]);
      setInputValue("");
      setError("");
    } else {
      setError("Please enter a recommendation.");
      return;
    }
  };

  return (
    <div className="recommendations-container">
      <div className="add-recommendation">
        <h2>Recommendations?</h2>
        <p>Share your favorite book or website here.</p>
        <form onSubmit={handleSubmit} className="form-div">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Share</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>

      <div className="recommendation-list">
        <p>These are the most recent user recommendations:</p>
        <p className="center">(click a recommendation below for more info)</p>
        {recommendations.slice(0, 5).map((recommendation) => (
          <div key={recommendation.id} className="recommendations">
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(
                recommendation.text
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {recommendation.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
