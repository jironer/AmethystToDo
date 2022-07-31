import { ToDoItemType } from "../components/molecules/ToDoItem";

export async function closeToDo(ToDo: ToDoItemType) {
  const closedToDo = { ...ToDo, closed: true, time: new Date().getTime() };

  const response = await fetch(`http://localhost:3001/ToDos/${ToDo.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(closedToDo),
  });

  if (!response.ok) console.error(response);
}
