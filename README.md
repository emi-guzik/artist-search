This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Run the app

App uses Deezer API which doesn't allow CORS. To be able to run it locally, run local server first:

### `node src/server.js` 

Then, in the project directory, run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## About the app

App allows search by artist name and displays albums created by the artist. For each album user can view list of tracks.
(Note: Deezer search API is paginated by default and returns only first 25 artists).

Packages used:
- Axios - HTTP client
- Redux - for state management
- Thunk - middleware for Redux for easier side effects management
- lodash - for debouncing search requests and some helper functions
