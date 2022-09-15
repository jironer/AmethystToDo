import { ToDoItemType } from "../components/molecules/ToDoItem";

// Gets active ToDos sorted according to requirements
export async function getActiveToDos(): Promise<ToDoItemType[]> {
  const data = await fetch(
    "http://localhost:3001/ToDos?closed=false&_sort=text&_order=asc",
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
