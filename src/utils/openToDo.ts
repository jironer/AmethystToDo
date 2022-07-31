import { ToDoItemType } from "../components/molecules/ToDoItem";

export async function openToDo(ToDo: ToDoItemType) {
  const openedToDo = { ...ToDo, closed: false, time: 0 };

  const response = await fetch(`http://localhost:3001/ToDos/${ToDo.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(openedToDo),
  });

  if (!response.ok) console.error(response);
}
