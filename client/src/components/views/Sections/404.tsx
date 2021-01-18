import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => (
  <div style={{
    width: '100%',
    height: '100vh',
    fontSize: '1rem',
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <h4>
      The page you're looking for does not exist or has moved.
    </h4>
    <Link to="/">
      Go back home &rarr;
    </Link>
  </div>
);
