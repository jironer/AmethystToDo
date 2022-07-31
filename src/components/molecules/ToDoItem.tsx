import React from "react";

import { Box, Label } from "theme-ui";

import { Checkbox } from "../atoms/Checkbox";

export type ToDoItemProps = {
  id: string;
  name: string;
  isClosed?: boolean;
};

export function ToDoItem({ id, name, isClosed }: ToDoItemProps) {
  return (
    <Box
      sx={{
        width: "fit-content",
        opacity: isClosed ? "0.5" : undefined,
        textDecoration: isClosed ? "line-through" : undefined,
      }}
      my="0.75rem"
    >
      <Checkbox sx={{ width: "1.4rem", height: "1.4rem" }} id={id}></Checkbox>
      <Label
        htmlFor={id}
        sx={{ fontSize: [3, 4], display: "inline", lineHeight: 1 }}
        ml="1rem"
      >
        {name}
      </Label>
    </Box>
  );
}
