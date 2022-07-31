import type { NextPage } from "next";
import Head from "next/head";
import { Box, Themed } from "theme-ui";

import { ToDoCreator } from "../components/molecules/ToDoCreator";
import { ToDoItem } from "../components/molecules/ToDoItem";

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
          paddingX: ["1rem", "2rem"],
          borderRadius: ["1rem", "2rem"],
          backgroundColor: "background",
        }}
      >
        <Themed.h1
          sx={{
            mt: 0,
            mb: "1rem",
            mx: "auto",
            width: "fit-content",
          }}
        >
          Amethyst ToDo
        </Themed.h1>
        <Box sx={{ width: "fit-content" }} mx="auto">
          <ToDoCreator placeholder="Enter ToDo text..." />
          <Themed.h2>Open</Themed.h2>
          <ToDoItem id="my-id" name="my first ToDo" isClosed={false} />
          <ToDoItem id="my-id2" name="my first ToDo2" isClosed={false} />
          <ToDoItem id="my-id3" name="my first ToDo3" isClosed={false} />
          <ToDoItem
            id="my-id4"
            name="my first ToDo4 which is very long"
            isClosed={false}
          />
          <Themed.h2 sx={{ opacity: 0.5 }}>Closed</Themed.h2>
          <ToDoItem id="my-idc" name="my first ToDo" isClosed />
          <ToDoItem id="my-id2c" name="my first ToDo2" isClosed />
          <ToDoItem id="my-id3c" name="my first ToDo3" isClosed />
          <ToDoItem id="my-id4c" name="my first ToDo4" isClosed />
        </Box>
      </main>
    </div>
  );
};

export default Home;
