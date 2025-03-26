import { test, expect, type Page } from '@playwright/test';

test('Use baseURL from config', async ({ page }) => {
    await page.goto('/');

})