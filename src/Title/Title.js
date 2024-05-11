import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Title = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Future Learn</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1>Hello World</h1>
    </HelmetProvider>
  );
};

export default Title;
