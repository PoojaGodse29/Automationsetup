/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',          // Folder where tests are located
  timeout: 30000,              // Test timeout
  use: {
    headless: false,           // Set true for headless mode
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
};

module.exports = config;
