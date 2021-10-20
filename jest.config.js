module.exports = {
  rootDir: "src",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!lbh-frontend|@mtfh)"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  setupFiles: [],
  setupFilesAfterEnv: [
    "../node_modules/@testing-library/jest-dom/dist/index.js",
    "@hackney/mtfh-test-utils",
    "./test-utils.tsx",
  ],
  coverageDirectory: "../coverage",
  coveragePathIgnorePatterns: [],
  coverageThreshold: {
    global: {
      statements: 99.31,
      branches: 98.11,
      functions: 98.59,
      lines: 99.29,
    },
  },
};
