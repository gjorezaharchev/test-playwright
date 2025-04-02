import { test, expect, type Page } from '@playwright/test';
import { describe } from 'node:test';

test.describe('Test suite', ()=>{

    test.beforeEach(() => {
        test.fixme();
    });

    
    test.skip('Use baseURL from config', async ({ page }) => {
        
        await page.goto('https://demoqa.com/automation-practice-form');
        await page.getByPlaceholder('First Name').fill('Gjore');
        await page.getByPlaceholder('Last Name').fill('Zaharchev');
    
    })

    test.only('Use baseURL from config 2', async ({ page }) => {
        await page.goto('/');
    
    })

})

