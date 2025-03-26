import { test, expect, type Page } from '@playwright/test';
import * as fs from 'fs';
const DATA = JSON.parse(fs.readFileSync('C:/Users/gjore.zaharchev/Desktop/test-playwright/tests/class2/parameterized/locators.json', 'utf-8'));


test('Use baseURL from config', async ({ page }) => {
    
    await page.goto('/');
    await page.locator(DATA.username).click();

})