export async function createToDo(text: string) {
  const ToDoObject = { closed: false, text, time: 0 };

  const response = await fetch("http://localhost:3001/ToDos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ToDoObject),
  });

  if (!response.ok) console.error(response);
}
