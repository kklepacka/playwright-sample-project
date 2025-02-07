import { test, expect } from '@playwright/test';

test('success', async ({ page }) => {
    await page.goto('https://squash-tf.readthedocs.io/en/latest/index.html');
    await expect(page).toHaveTitle(/.*Welcome to Squash TF components documentation!*/);
    await page.locator('a', { hasText: "Squash TF Java Junit Runner"}).click();
    await expect(page).toHaveTitle(/.*Squash TF Java Junit Runner*/);
});

test('failed', async ({ page }) => {
    await page.goto('https://squash-tf.readthedocs.io/en/latest/index.html');
    await expect(page).toHaveTitle(/.*Welcome to Squash TF components documentation!*/);
    await page.locator('a', { hasText: "Squash TF Java Junit Runner"}).click();
    await expect(page).toHaveTitle(/.*failed*/);
});
test.describe('first level', () => {
    test('first level', async ({ page }) => {
        await page.goto('https://squash-tf.readthedocs.io/en/latest/index.html');
        await expect(page).toHaveTitle(/.*Welcome to Squash TF components documentation!*/);
        await page.locator('a', { hasText: "Squash TF Java Junit Runner"}).click();
        await expect(page).toHaveTitle(/.*Squash TF Java Junit Runner*/);
    });
    test.describe('second level', () => {
        test.beforeAll(async () => {
        console.log("beforeAll");
        });
        test.beforeEach(async () => {
        console.log("beforeEach");
        });
        test.afterEach(async () => {
        console.log("afterEach");
        });
        test.afterAll(async () => {
        console.log("afterAll");
        }); 
        test('second level', async ({ page }) => {
            await page.goto('https://squash-tf.readthedocs.io/en/latest/index.html');
            await expect(page).toHaveTitle(/.*Welcome to Squash TF components documentation!*/);
            await page.locator('a', { hasText: "Squash TF Java Junit Runner"}).click();
            await expect(page).toHaveTitle(/.*Squash TF Java Junit Runner*/);
        });
    });
})