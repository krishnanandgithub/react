export default {
  testEnvironment: "jsdom",
  testMatch: ["**/test/**/*.test.[jt]s?(x)"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
