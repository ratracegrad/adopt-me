import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from './components/SearchParams';
import { Router, Link } from '@reach/router';
import Details from './components/Details';
import ThemeContext from './components/ThemeContext';

const App = () => {
  const themeHook = useState('green');

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">
              <h1 id="something-important">Adopt Me!</h1>
            </Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(React.createElement(App), document.getElementById("root"));
