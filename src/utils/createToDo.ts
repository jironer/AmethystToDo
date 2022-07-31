export async function createToDo(text: string) {
  const ToDoObject = { open: true, text, time: new Date().getTime() };

  const response = await fetch("http://localhost:3001/ToDos", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ToDoObject),
  });

  if (!response.ok) console.error(response);
}
