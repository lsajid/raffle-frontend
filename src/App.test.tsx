import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import App from "./App"

describe("App", () => {
    it("renders the App component logs ", () => {
        render(<App />)
        expect(screen.getByRole("heading", {
            level: 1
        })).toBe("Hello world")
    })
})