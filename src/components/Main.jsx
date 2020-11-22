import React from "react";
import { Link } from "react-router-dom";

export const Main = () => (
  <div className="App">
    <ul>
      <li>
        <Link to="/init">init Page</Link>
        <hr />
        <Link to="/podbox">Landing Test Page</Link>
        <hr />
        <Link to="/output">Close Test Page</Link>
      </li>
    </ul>
  </div>
);
