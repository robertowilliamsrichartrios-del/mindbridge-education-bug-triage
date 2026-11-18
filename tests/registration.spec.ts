import { test, expect } from '@playwright/test';

test('User can register successfully - Happy Path', async ({ page }) => {
  // 1. NAVEGAR (Go): Open the registration page
  await page.goto('https://example.com');

  // Generate dynamic email for repeatable test execution
  const dynamicEmail = `jane.doe.${Date.now()}@example.com`;

  // 2. INTERACTUAR (Do): Fill out the registration form
  await page.fill('#firstName', 'Jane');
  await page.fill('#lastName', 'Doe');
  await page.fill('#email', dynamicEmail);
  await page.fill('#password', 'Password123!');
  await page.fill('#confirmPassword', 'Password123!');

  // Accept Terms and Conditions
  await page.check('#acceptTerms');

  // Submit the form
  await page.click('button[type="submit"]');

  // 3. VERIFICAR (Check / Assertions): Confirm successful registration
  await expect(page.locator('h1')).toHaveText('Welcome!');
  await expect(page.locator('.success-message')).toContainText(
    'Your account has been created successfully.'
  );
});
