import { ToDoItemType } from "../components/molecules/ToDoItem";

export async function removeToDo(ToDo: ToDoItemType) {
  const response = await fetch(`http://localhost:3001/ToDos/${ToDo.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) console.error(response);
}
