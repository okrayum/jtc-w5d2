# W5D2 React Practice Project

## Overview

This is a web application using React focused on showcasing some of the top books and websites for learning to code. This web application allows users to explore and discover various educational resources recommended by Google, and to post their own recommendations for all to see.


## Setup

1. Clone the repository.
2. Navigate to the project directory `jtc-wk5d2`.
3. Install dependencies using `npm install`.
4. Start the project with `npm start`.


## Project Structure

The project is structured as follows:
- `src/`: Contains all source code files.
  - `assets/`: Stores images and website data.
  - `components/`: Includes the components used in the application.
  - `pages/`: Contains the main pages of the application.
  - `App.js`: Main component rendering the application.
  - `index.js`: Entry point of the application.


## Key Components

### Recommendations Component

The Recommendations component allows users to share their favorite books or websites. It manages state for user input and displays the most recent recommendations. The recommendation list will be interactive, if clicked it will go to a Google search of that recommendation.

### GoogleBooks Component

The GoogleBooks component fetches data from the Google Books API and displays a list of the top learning to code books. It utilizes state and effects to handle data fetching and rendering.


## Dependencies

The project utilizes the following external libraries:
- axios: For fetching data from the Google Books API.
- react-router-dom: For handling navigation within the application.


