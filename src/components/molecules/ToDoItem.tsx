import React, { useRef, useState } from "react";
import { Flex, Label } from "theme-ui";

import { ThemedCheckbox } from "../atoms/ThemedCheckbox";

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
};

export function ToDoItem({
  id,
  text,
  closed = true,
  time,
  closeToDo,
  openToDo,
  removeToDo,
}: ToDoItemProps) {
  const [renderRemoveButton, setRenderRemoveButton] = useState<boolean>(false);
  const itemRef = useRef<HTMLDivElement>(null);

  return (
    <Flex
      ref={itemRef}
      sx={{
        opacity: closed ? "0.5" : undefined,
        width: "100%",
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
          justifyContent: "space-betwen",
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
