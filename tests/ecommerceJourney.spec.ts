import { test } from '../Fixtures/Fixtures.ts';
import { expect } from '@playwright/test';



//! Advanced Test Approach (With POM)
test('Login Field Validation POM Approach', async ({ page, loginPage }) => {
  await page.goto('https://www.saucedemo.com/');
  await loginPage.enterDetailsAndLogin('standard_user', 'secret_sauce');

  //! toBe() & toEqual() do the same thing and they are method functions
});



// test('Login Successfully & Basket Increment Check', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click({delay:500});

//   expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html');

//   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
//   const basketCount = page.locator('[data-test="shopping-cart-badge"]')
//   expect(await basketCount.textContent()).toEqual("1")

//   await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
 
//   expect(await basketCount.textContent()).toEqual("2")

//   //! Generally try to use await within the expect function, and don't use await for const!!
// });


//! Basic test approach (No POM)
// test('Login Field Validation', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').fill('standard_user')
//   await page.locator('[data-test="login-button"]').click({delay:500});

//   const errorMessage = page.locator('[data-test="error"]').textContent();
//   expect(await errorMessage).toBe('Epic sadface: Password is required')

//   //! toBe() & toEqual() do the same thing and they are method functions
// });

