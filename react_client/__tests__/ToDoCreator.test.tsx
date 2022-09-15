// __tests__/index.test.jsx
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "theme-ui";

import { ToDoCreator } from "../src/components/molecules/ToDoCreator";
import { theme } from "../src/theme";

describe("ToDoCreator", () => {
  it("Renders input and button with text", () => {
    const mockCreateFn = jest.fn();

    const buttonText = "btn-text";
    const placeholderText = "placeholder-text";

    render(
      <ThemeProvider theme={theme}>
        <ToDoCreator
          buttonText={buttonText}
          placeholder={placeholderText}
          createItemFn={mockCreateFn}
        />
      </ThemeProvider>
    );

    const createButton = screen.getByText(buttonText);
    expect(createButton).toBeInTheDocument();

    const createInput = screen.getByPlaceholderText(placeholderText);
    expect(createInput).toBeInTheDocument();

    fireEvent.change(createInput, { target: { value: "23" } });
    fireEvent.click(createButton);

    expect(mockCreateFn).toHaveBeenCalledWith("23");
  });
});
