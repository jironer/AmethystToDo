import { Flex, Label } from "theme-ui";

import { ThemedCheckbox } from "../atoms/ThemedCheckbox";

export type ToDoItemProps = {
  id: string;
  name: string;
  isClosed?: boolean;
};

export function ToDoItem({ id, name, isClosed }: ToDoItemProps) {
  return (
    <Flex
      sx={{
        width: "fit-content",
        opacity: isClosed ? "0.5" : undefined,
        textDecoration: isClosed ? "line-through" : undefined,
      }}
      my="0.75rem"
    >
      <ThemedCheckbox
        sx={{ width: "1.4rem", height: "1.4rem", my: "auto" }}
        id={id}
      />
      <Label
        htmlFor={id}
        sx={{ fontSize: [3, 4], display: "inline" }}
        ml="1rem"
      >
        {name}
      </Label>
    </Flex>
  );
}
