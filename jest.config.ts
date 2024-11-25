import type {Config} from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Setup for jest-dom
  testPathIgnorePatterns: ["/node_modules/", "/dist/"], // Ignore these folders
};

export default config;
