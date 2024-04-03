import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import App from "./App"

describe('App', () => {
    it('renders headline', () => {
        render(<App />);
        screen.debug();
      // check if App components renders headline
    });
});

describe("A statement true", () => {
    it("should be equal to 2", () => {
        expect(1+1).toEqual(2)
    })
})