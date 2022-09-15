import { keyframes } from "@emotion/react";
import React, { useRef, useState } from "react";
import { Flex, Label } from "theme-ui";

import { ThemedCheckbox } from "../atoms/ThemedCheckbox";
import { ToDoCreator } from "./ToDoCreator";

export type ToDoItemType = {
  id: number;
  closed: boolean;
  text: string;
  time: number;
};

export type ToDoItemProps = ToDoItemType & {
  closeToDo: (toDo: ToDoItemType) => Promise<void>;
  openToDo: (toDo: ToDoItemType) => Promise<void>;
  removeToDo: (toDo: ToDoItemType) => Promise<void>;
  updateToDo: (toDo: ToDoItemType) => Promise<void>;
};

const scaleIn = keyframes({
  from: { transform: "scaleY(0)" },
  to: { transform: "scaleY(1)" },
});

export function ToDoItem({
  id,
  text,
  closed = false,
  time,
  closeToDo,
  openToDo,
  removeToDo,
  updateToDo,
}: ToDoItemProps) {
  const [renderRemoveButton, setRenderRemoveButton] = useState<boolean>(false);
  const [isInEditMode, setIsInEditMode] = useState<boolean>(false);
  const itemRef = useRef<HTMLDivElement>(null);

  if (isInEditMode)
    return (
      <ToDoCreator
        createItemFn={async (updatedText) => {
          updateToDo({ id, closed, text: updatedText, time });
          setIsInEditMode(false);
        }}
        buttonText="Edit"
        placeholder="Enter new ToDo text..."
        defaultValue={text}
      />
    );

  return (
    <Flex
      ref={itemRef}
      sx={{
        opacity: closed ? "0.5" : undefined,
        width: "100%",
        animation: `${scaleIn} 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
      }}
      my="0.75rem"
      onMouseEnter={() => setRenderRemoveButton(true)}
      onMouseLeave={() => setRenderRemoveButton(false)}
      onFocus={() => setRenderRemoveButton(true)}
      onBlur={(e) => {
        if (!itemRef.current?.contains(e.relatedTarget))
          setRenderRemoveButton(false);
      }}
    >
      <ThemedCheckbox
        sx={{
          width: "1.2rem",
          height: "1.2rem",
          my: "auto",
          flex: "0 0 auto",
        }}
        id={id.toString()}
        defaultChecked={closed}
        onClick={(e) => {
          if (e.currentTarget.checked) closeToDo({ id, closed, text, time });
          else openToDo({ id, closed, text, time });
        }}
      />
      <Flex
        sx={{
          width: "100%",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Label
          htmlFor={id.toString()}
          sx={{
            fontSize: [3, 4],
            display: "inline",
            minWidth: "15rem",
            width: "60%",
            flexGrow: 10,
            textDecoration: closed ? "line-through" : undefined,
            mr: renderRemoveButton ? 0 : [0, "6rem"],
          }}
          onClick={(e) => {
            if (!closed) {
              e.preventDefault;
              setIsInEditMode(true);
            }
          }}
          ml={["0.5rem", "1rem"]}
        >
          {text}
        </Label>
        <button
          sx={{
            width: "5rem",
            height: "1.5rem",
            ml: ["0.5rem", "1rem"],
            display: [undefined, renderRemoveButton ? undefined : "none"],
          }}
          onClick={() => removeToDo({ id, closed, text, time })}
        >
          Remove
        </button>
      </Flex>
    </Flex>
  );
}
