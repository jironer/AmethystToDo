import React from "react";

import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Amethyst ToDo</title>
        <meta name="description" content="Keeps track of your ToDo's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          maxWidth: "1200px",
          marginTop: "3rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h1>Amethyst ToDo</h1>
      </main>
    </div>
  );
};

export default Home;
