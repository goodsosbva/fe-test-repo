import { logRoles } from "@testing-library/react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import {kebabCasteToTitleCase} from "./helpers.js";

test("button starts with correct color", () => {
  const { container } = render(<App />);
  logRoles(container);

  const buttonElement = screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toHaveClass("red");
})

test("button has correct label and color after click", () => {
  // render app
  render(<App />);

  // find the btn
  const btnEle =  screen.getByRole("button", { name: /blue/i });

  // chk init color
  expect(btnEle).toHaveClass("red");

  // clk the btn
  fireEvent.click(btnEle);

  // chk the btn text
  expect(btnEle).toHaveTextContent(/red/i);

  // chk the btn color
  expect(btnEle).toHaveClass("blue");
})

test("button click flow", () => {
  render(<App />);

  // find an element with a role of button and text matching /blue/i
  const buttonElement = screen.getByRole("button", {
    name: /blue/i,
  });

  // expect the class to be red
  expect(buttonElement).toHaveClass("red");

  // click button
  fireEvent.click(buttonElement);

  // expect the class to be blue
  expect(buttonElement).toHaveClass("blue");

  // expect the button text to match /red/i
  expect(buttonElement).toHaveTextContent(/red/i);
});

test("checkbox flow", () => {
  render(<App />);

  // find ele
  const btnEle =  screen.getByRole("button", { name: /blue/i });
  const chkboxEle = screen.getByRole("checkbox", { name: /disable button/i });

  // chk int conditions
  expect(btnEle).toBeEnabled();
  expect(chkboxEle).not.toBeChecked();

  // be disabled
  fireEvent.click(chkboxEle);
  expect(btnEle).not.toBeEnabled();
  expect(btnEle).toHaveClass('gray');

  fireEvent.click(chkboxEle);
  expect(btnEle).toBeEnabled();
  expect(btnEle).toHaveClass('red')
})

test("checkbox flow-after btn click", () => {
  render(<App />);

  // find ele
  const btnEle =  screen.getByRole("button", { name: /blue/i });
  const chkboxEle = screen.getByRole("checkbox", { name: /disable button/i });

  fireEvent.click(btnEle);

  // chk int conditions
  expect(btnEle).toBeEnabled();
  expect(chkboxEle).not.toBeChecked();

  // be disabled
  fireEvent.click(chkboxEle);
  expect(btnEle).not.toBeEnabled();
  expect(btnEle).toHaveClass('gray');

  fireEvent.click(chkboxEle);
  expect(btnEle).toBeEnabled();
  expect(btnEle).toHaveClass('blue')
})

describe("kebabCaseToTitleCase", () => {
  test("works for no hyphens", () => {
    expect(kebabCasteToTitleCase("red")).toBe("Red");
  })
  test("works for one hyphens", () => {
    expect(kebabCasteToTitleCase("midnight-blue")).toBe("Midnight Blue");
  })
  test("works for multiple hyphens", () => {
    expect(kebabCasteToTitleCase("medium-violet-red")).toBe("Medium Violet Red");
  })
})

test("checkbox flow-after btn click", () => {
  render(<App />);

  // find ele
  const btnEle =  screen.getByRole("button", { name: /blue/i });

  // chk int conditions
  expect(btnEle).toHaveClass("medium-violet-red");

  fireEvent.click(btnEle);
  // be disabled
  expect(btnEle).toHaveTextContent(/red/i);

  expect(btnEle).toHaveClass('midnight-blue')
})

