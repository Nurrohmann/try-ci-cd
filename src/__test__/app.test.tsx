import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("basic", () => {
   test("test function", () => {
      function sum(a: number, b: number) {
         return a + b;
      }

      expect(sum(2, 3)).toEqual(5);
      expect(sum(2, 2)).toEqual(4);
   });
   test("find hello world", () => {
      render(<App />);
      const findText = screen.getByText("Hello World");
      expect(findText).toBeTruthy();
   });
   test("find id element", () => {
      render(<App />);
      const findIdElement = document.getElementById("app");
      expect(findIdElement).toBeTruthy();
   });
});
