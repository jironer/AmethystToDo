import { ToDoItemType } from "../components/molecules/ToDoItem";

export async function updateToDo(updatedToDo: ToDoItemType) {
  const response = await fetch(
    `http://localhost:3001/ToDos/${updatedToDo.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedToDo),
    }
  );

  if (!response.ok) console.error(response);
}
