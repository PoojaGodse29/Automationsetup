const { test, expect } = require('@playwright/test');

test('Sample test', async ({ page }) => {
  await page.goto('https://www.google.com'); 
  
});
