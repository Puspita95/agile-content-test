/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import SearchBox from "./components/SearchBox/SearchBox";

test("renders header,footer,main components on screen", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByTestId("header")).toBeInTheDocument();
  expect(screen.getByTestId("footer")).toBeInTheDocument();
  expect(screen.getByRole("main")).toBeInTheDocument();

  const searchInput = screen.getByPlaceholderText("Type something to search");
  expect(searchInput).toBeInTheDocument();
  expect(screen.getByTestId("googleLogo")).toBeInTheDocument();
  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();
});

test("updates search input value", () => {
  render(
    <BrowserRouter>
      <SearchBox
        searchInput={"Dog"}
        handleChangeInput={function (value: string): void {}}
        handleSearchBtnClick={function (searchInput: string): void {}}
      />
    </BrowserRouter>
  );
  const inputElement = screen.getByPlaceholderText("Type something to search");
  fireEvent.change(inputElement, { target: { value: "Dog" } });
  //@ts-ignore
  expect(inputElement.value).toBe("Dog");
});
test("disables search button when input is empty", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const searchButton = screen.getByRole("button", { name: "Search" });
  expect(searchButton).toBeDisabled();
});

test("navigates to /results when search button is clicked", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const inputElement = screen.getByPlaceholderText("Type something to search");
  fireEvent.change(inputElement, { target: { value: "Dog" } });

  const searchButton = screen.getByRole("button", { name: "Search" });
  fireEvent.click(searchButton);

  await act(async () => {
    window.history.pushState({}, "Test", "/results");
  });

  expect(window.location.pathname).toBe("/results");
});
