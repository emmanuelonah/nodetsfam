module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["**/*.{js,ts}", "!**/*.d.ts", "!**/node_modules/**"],
  testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
  transform: { "^.+\\.(ts|tsx)$": "ts-jest" },
  coverageThreshold: {
    "<rootDir>/src/**/*.test.@(js|jsx|ts|tsx)": { lines: 85 },
  },
};
