import React from "react";
import "./MySitesStyles.css";
import siteData from "../../assets/data/sites.json";

function MySites() {
  return (
    <div className="my-sites">
      <ul>
        {siteData.map((site, index) => (
          <li key={index}>
            <a href={site.url} target="_blank" rel="noopener noreferrer">
              <img
                src={require(`../../assets/images/${site.image}`)}
                alt={site.name}
              />
              <h3>{site.name}</h3>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MySites;
