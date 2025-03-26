import { test, expect, type Page } from '@playwright/test';

test.describe('My first test suite', ()=>{

    test.beforeEach('some title', async({page})=>{
        await page.goto('/');
    } )

    test('Use baseURL from config 2', async ({ page }) => {
        
    
    })

    

    test('Use baseURL from config 3', async ({ page }) => {
        
    
    })

    test.describe('My first test suite 3', ()=>{

        test.beforeEach('some title', async({page})=>{
                await page.goto('/');
            } )

        test('Use baseURL from config 2', async ({ page }) => {
            
        
        })
    
        test('Use baseURL from config 3', async ({ page }) => {
            
        
        })
    
    })
})

test.describe('My first test suite 2', ()=>{

    test('Use baseURL from config 2', async ({ page }) => {
        
    
    })

    test('Use baseURL from config 3', async ({ page }) => {
        
    
    })

})

test('Use baseURL from config', async ({ page }) => {


})