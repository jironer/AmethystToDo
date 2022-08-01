import type { NextPage } from "next";
import Head from "next/head";
import React, { useCallback, useState } from "react";
import { Box, Themed } from "theme-ui";

import { ToDoCreator } from "../components/molecules/ToDoCreator";
import { ToDoItem, ToDoItemType } from "../components/molecules/ToDoItem";
import { closeToDo } from "../utils/closeToDo";
import { createToDo } from "../utils/createToDo";
import { getActiveToDos } from "../utils/getActiveToDos";
import { getClosedToDos } from "../utils/getClosedToDos";
import { openToDo } from "../utils/openToDo";
import { removeToDo } from "../utils/removeToDo";
import { updateToDo } from "../utils/updateToDo";
import { WithLogging } from "../utils/withLogging";

export async function getServerSideProps() {
  const activeToDos = await getActiveToDos();
  const closedToDos = await getClosedToDos();

  return {
    props: { activeToDos, closedToDos },
  };
}

type Props = {
  activeToDos: ToDoItemType[];
  closedToDos: ToDoItemType[];
};

const ToDoItemWithLoggin = WithLogging(ToDoItem);

const Home: NextPage<Props> = ({ activeToDos, closedToDos }: Props) => {
  const [currentActiveToDos, setCurrentActiveToDos] =
    useState<ToDoItemType[]>(activeToDos);
  const [currentClosedToDos, setCurrentClosedToDos] =
    useState<ToDoItemType[]>(closedToDos);

  const updateActiveToDos = async () => {
    setCurrentActiveToDos(await getActiveToDos());
  };

  const updateClosedToDos = async () => {
    setCurrentClosedToDos(await getClosedToDos());
  };

  const updateAllToDos = async () => {
    await updateActiveToDos();
    await updateClosedToDos();
  };

  const addToDo = useCallback(async (toDoText: string) => {
    await createToDo(toDoText);
    await updateActiveToDos();
  }, []);

  const closeToDoItem = useCallback(async (toDo: ToDoItemType) => {
    await closeToDo(toDo);
    await updateAllToDos();
  }, []);

  const openToDoItem = useCallback(async (toDo: ToDoItemType) => {
    await openToDo(toDo);
    await updateAllToDos();
  }, []);

  const removeToDoItem = useCallback(async (toDo: ToDoItemType) => {
    await removeToDo(toDo);
    await updateAllToDos();
  }, []);

  const updateToDoItem = useCallback(async (toDo: ToDoItemType) => {
    await updateToDo(toDo);
    await updateAllToDos();
  }, []);

  const toDoStateUpdateFns = {
    closeToDo: closeToDoItem,
    openToDo: openToDoItem,
    removeToDo: removeToDoItem,
    updateToDo: updateToDoItem,
  };

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
          <ToDoCreator createItemFn={addToDo} />
          <Themed.h2>Open</Themed.h2>
          {currentActiveToDos.map((toDo) => (
            <ToDoItemWithLoggin
              {...toDo}
              {...toDoStateUpdateFns}
              key={toDo.id}
            />
          ))}
          <Themed.h2 sx={{ opacity: 0.5 }}>Closed</Themed.h2>
          {currentClosedToDos.map((toDo) => (
            <ToDoItemWithLoggin
              {...toDo}
              {...toDoStateUpdateFns}
              key={toDo.id}
            />
          ))}
        </Box>
      </main>
    </div>
  );
};

export default Home;
