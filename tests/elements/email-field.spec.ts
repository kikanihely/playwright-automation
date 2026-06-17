import { test, expect } from '@playwright/test';
import { VALID, VALID_EMAILS, INVALID_EMAILS } from '../../utils/test-data.ts';

test.describe ('Email Field Validation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/register');
    });

    for (const data of VALID_EMAILS) {
        test(`${data.tc} | ${data.scenario} | should login successfully`, async ({ page }) => {
            await page.locator('#register-email').fill(data.email);
            await page.locator('#register-password').fill(VALID.password);
            await page.locator('//input[@placeholder="Repeat your password"]').fill(VALID.password);
            await page.locator('#register-btn').click();
            await expect(page).toHaveURL('/');
        });
    }
});