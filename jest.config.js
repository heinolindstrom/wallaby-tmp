/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",

  transform: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/fileTransformer.js",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
