import { test, expect} from '@playwright/test';
import { SaucedemoPage } from './saucedemo-page.ts';


test('some title', async({page})=>{
    const sauceDemoPage = new SaucedemoPage(page);
    await sauceDemoPage.goto();
    await sauceDemoPage.typeUsername('gjore');
    await sauceDemoPage.typePassword('password');
    await sauceDemoPage.clickLogin();
})

test('some title 2', async({page})=>{
    const sauceDemoPage = new SaucedemoPage(page);
    await sauceDemoPage.loginForm('standard_user', 'secret_sauce')
})