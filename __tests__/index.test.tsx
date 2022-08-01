// __tests__/index.test.jsx
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "theme-ui";

import Home from "../src/pages/index";
import { theme } from "../src/theme";

describe("Home", () => {
  it("Renders empty page with headings only", () => {
    render(
      <ThemeProvider theme={theme}>
        <Home activeToDos={[]} closedToDos={[]} />
      </ThemeProvider>
    );

    const pageHeading = screen.getByRole("heading", {
      name: /Amethyst ToDo/i,
    });

    const openToDoHeading = screen.getByRole("heading", {
      name: /open/i,
    });

    const closedToDoHeading = screen.getByRole("heading", {
      name: /closed/i,
    });

    const newToDoInput = screen.getByRole("textbox");
    const newToDoButton = screen.getByRole("button");

    expect(pageHeading).toBeInTheDocument();
    expect(openToDoHeading).toBeInTheDocument();
    expect(closedToDoHeading).toBeInTheDocument();
    expect(newToDoInput).toBeInTheDocument();
    expect(newToDoButton).toBeInTheDocument();
  });

  it("Renders page with TODO items", () => {
    render(
      <ThemeProvider theme={theme}>
        <Home
          activeToDos={[
            { id: 1, text: "test1", closed: false, time: 0 },
            { id: 2, text: "test2", closed: false, time: 0 },
          ]}
          closedToDos={[
            { id: 4, text: "test4", closed: true, time: 2 },
            { id: 3, text: "test3", closed: true, time: 1 },
          ]}
        />
      </ThemeProvider>
    );

    const toDoCheckboxes = screen.getAllByLabelText(/test.*/i);

    const openCheckboxes = screen.getAllByRole("checkbox", { checked: false });
    const closedCheckboxes = screen.getAllByRole("checkbox", { checked: true });

    expect(toDoCheckboxes.length).toBe(4);
    expect(openCheckboxes.length).toBe(2);
    expect(closedCheckboxes.length).toBe(2);

    expect(toDoCheckboxes[0]).toHaveAccessibleName("test1");
    expect(toDoCheckboxes[1]).toHaveAccessibleName("test2");
    expect(toDoCheckboxes[2]).toHaveAccessibleName("test4");
    expect(toDoCheckboxes[3]).toHaveAccessibleName("test3");
  });
});
