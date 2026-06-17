import test from "@playwright/test";

test('test', async ({ page }) => {
    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('hely@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Hely@3014');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('article').filter({ hasText: 'ConcertFeaturedHollywood' }).getByTestId('book-now-btn').click();
});