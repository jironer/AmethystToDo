import { darken } from "@theme-ui/color";
import React, { useState } from "react";
import { Button, Flex, Input } from "theme-ui";

export type ToDoCreatorProps = {
  placeholder?: string;
  buttonText?: string;
  defaultValue?: string;
  createItemFn: (ToDoText: string) => Promise<void>;
};

export function ToDoCreator({
  createItemFn,
  placeholder = "Enter ToDo text...",
  buttonText = "Add",
  defaultValue = "",
}: ToDoCreatorProps) {
  const [inputVal, setInputVal] = useState<string>(defaultValue);

  const createToDo = async () => {
    if (inputVal) {
      setInputVal("");
      await createItemFn(inputVal);
    }
  };

  return (
    <Flex
      sx={{ width: "100%", gap: "1rem", flexWrap: "wrap", fontSize: [2, 3] }}
      mt="0.75rem"
    >
      <Input
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        onKeyDown={async (e) => {
          if (e.key === "Enter") createToDo();
        }}
        sx={{ minWidth: "15rem", width: "60%", flexGrow: 10 }}
        placeholder={placeholder}
      />
      <Button
        sx={{
          minWidth: "5rem",
          flexGrow: 1,
          "&:hover": { bg: darken("primary", 0.1) },
          "&:active": { bg: darken("primary", 0.2) },
        }}
        onClick={createToDo}
      >
        {buttonText}
      </Button>
    </Flex>
  );
}
