import { test, expect } from '@playwright/test';

test.describe(
    'Playwright demo',()=>{

        //before each method
       test.beforeEach(async({page})=>{
            await page.goto("https://demo.playwright.dev/todomvc");
       });
       //Test 1
       test('Test Title ',async({page})=>{
            await expect(page).toHaveTitle(/.*TodoMVC.*/);
       });

        //test 2
        test('Shouls show to do',async({page})=>{
            const input = page.getByPlaceholder('What needs to be done?')
            await expect(input).toBeVisible();
        });

        //test 3
        test('Add new item in todo',async({page})=>{
            const input = page.getByPlaceholder('What needs to be done?')
            await expect(input).toBeVisible();
            await input.fill("Learn Playwright");
            await input.press('Enter');
            await expect(page.getByText('Learn Playwright')).toBeVisible();
        });



    }
);