import { test, expect, type Page } from '@playwright/test';
import { describe } from 'node:test';

test.describe('Test suite', ()=>{

    test.beforeEach(() => {
        //test.fixme();
    });

    
    test('Use baseURL from config', {tag: ['@regression', '@sprint1', '@XYZ-0001']}, async ({ page }) => {
        
        await page.goto('https://demoqa.com/automation-practice-form');
        await page.getByPlaceholder('First Name').fill('Gjore');
        await page.getByPlaceholder('Last Name').fill('Zaharchev');
        
    
    })

    test('Use baseURL from config 2', {tag: ['@regression', '@sprint1', '@XYZ-0001']}, async ({ page }) => {
        await page.goto('/');
    
    })

})

