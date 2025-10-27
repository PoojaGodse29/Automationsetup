const { test, expect } = require('@playwright/test');

test('EMS dashboard loads', async ({ page }) => {
  await page.goto('https://www.google.com'); // Replace with your EMS portal URL
  
});
