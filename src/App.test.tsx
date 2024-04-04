import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import '@testing-library/jest-dom'

// app.test.js
import App from "./App"
import Home from "./pages/Home";

describe('App', () => {
    it('Renders not found if invalid path', () => {
        render(
            <MemoryRouter initialEntries={['/invalid-route']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Not Found')
    });
});

describe("A statement true sandbox initial test", () => {
    it("should be equal to 2", () => {
        expect(1+1).toEqual(2)
    })
})

describe('Home', () => {
    it('render hello world', () => {
        render(<Home />)
        expect(
            screen.getByRole("heading", {
                level: 1
            })
        ).toString()
    })
})