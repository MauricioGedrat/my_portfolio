import React from "react";
import Home from "./Home";
import Head from "next/head";

const index = () => {
  return (
    <div>
      <Head>
        <title>Simple Folio</title>
      </Head>
      <Home />
    </div>
  );
};

export default index;
