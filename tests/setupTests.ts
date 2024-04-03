import matchers from '@testing-library/jest-dom/types/matchers'
import { afterEach, expect } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// runs a clean after each test case (e.g. clearing jsdom)
expect.extend(matchers);
afterEach(() => {
  cleanup();
})