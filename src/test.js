import { render, screen } from "@testing-library/react";
import App from "./App";
import * as ReactDOM from "react-dom";
import * as React from "react";
import StudentContextProvider from "./contexts/StudentContext";
test("renders learn react link", () => {
  // const root = document.createElement("div");
  // ReactDOM.render(<App/>, root);
  // expect(root.querySelector("h1").textContent).toBe("Home Page");
  render(
    <React.StrictMode>
      <StudentContextProvider>
        <App />
      </StudentContextProvider>
    </React.StrictMode>
  );
  const linkElement = screen.getByText(/Home Page/i);
  expect(linkElement).toBeInTheDocument();
});
