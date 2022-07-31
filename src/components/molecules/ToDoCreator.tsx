import { Button, Flex, Input } from "theme-ui";

export type ToDoCreatorProps = {
  placeholder: string;
};

export function ToDoCreator({ placeholder }: ToDoCreatorProps) {
  return (
    <Flex
      sx={{ width: "100%", gap: "1rem", flexWrap: "wrap", fontSize: [2, 3] }}
      mt="0.75rem"
    >
      <Input
        sx={{ minWidth: "15rem", width: "60%", flexGrow: 10 }}
        placeholder={placeholder}
      />
      <Button sx={{ minWidth: "5rem", flexGrow: 1 }}>Add</Button>
    </Flex>
  );
}
