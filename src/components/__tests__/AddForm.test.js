import { render, screen } from "@testing-library/react";
import AddForm from "../AddForm";
import StudentContextProvider from "../contexts/StudentContext";
import "@testing-library/jest-dom";
test("Testing Input Infromation", async () => {
  render(
    <StudentContextProvider>
      <AddForm />
    </StudentContextProvider>
  );
  expect(screen.getByTestId("fname")).toBeRequired();
  expect(screen.getByTestId("lname")).toBeRequired();
  expect(screen.getByTestId("phone")).toBeRequired();
  expect(screen.getByTestId("email")).toBeRequired();
  expect(screen.getByTestId("dob")).toBeRequired();
  expect(screen.getByTestId("address")).toBeRequired();
});
