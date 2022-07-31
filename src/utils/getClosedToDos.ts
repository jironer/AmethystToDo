import { ToDoItemType } from "../components/molecules/ToDoItem";

export async function getClosedToDos(): Promise<ToDoItemType[]> {
  const data = await fetch(
    "http://localhost:3001/ToDos?closed=true&_sort=time&_order=desc",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!data.ok) {
    console.error(data);
    return [];
  }

  return data.json();
}
