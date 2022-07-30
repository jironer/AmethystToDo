import React from "react";

import type { NextPage } from "next";
import Head from "next/head";

import { Themed } from "theme-ui";

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
        <Themed.h1
          sx={{
            mx: "auto",
            width: "fit-content",
          }}
        >
          Amethyst ToDo
        </Themed.h1>
      </main>
    </div>
  );
};

export default Home;
