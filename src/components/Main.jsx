import React from "react";
import { Link } from "react-router-dom";

export const Main = () => (
  <div className="App">
    <ul>
      <li>
        <Link to="/podbox?token=vbkdnvdkj">Landing Page</Link>
        <hr />
        <Link to="/login">Login Page</Link>
      </li>
    </ul>
  </div>
);
