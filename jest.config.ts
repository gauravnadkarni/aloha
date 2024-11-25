import type {Config} from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": [
      "ts-jest",
      {
        isolatedModules: true, // Makes TypeScript files work faster
        tsconfig: "tsconfig.json", // Path to your TypeScript config file
      },
    ],
  },
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
    "\\.(jpg|jpeg|png|gif)$": "<rootDir>/__mocks__/fileMock.js", // Mock image files
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Setup for jest-dom
  testPathIgnorePatterns: ["/node_modules/", "/dist/"], // Ignore these folders
  //collectCoverage: true,
  //collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"],
  //coverageDirectory: "coverage",
};

export default config;
