import React from "react";

import type { NextPage } from "next";
import Head from "next/head";

import { Themed } from "theme-ui";
import { backgroundColor } from "styled-system";

const Home: NextPage = () => {
  return (
    <div
      sx={{
        backgroundColor: "secondary",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Head>
        <title>Amethyst ToDo</title>
        <meta name="description" content="Keeps track of your ToDo's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        sx={{
          width: "100%",
          maxWidth: "72rem",
          marginY: ["1rem", "2rem"],
          paddingY: ["1rem", "2rem"],
          marginX: ["1rem", "2rem"],
          borderRadius: ["1rem", "2rem"],
          backgroundColor: "background",
        }}
      >
        <Themed.h1
          sx={{
            my: "0",
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
