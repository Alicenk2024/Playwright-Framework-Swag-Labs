import { Page } from '@playwright/test';
//! When giving a title to your class you must always use Pascal Casing which is 
//! every first letter is capitalised, so Classes have first letter capitalised

//! Data types are written in lower case

//! readonly page: Page;  means that the variable page has a class type of "Page",
//! This is not a data type, it is just saying that page has a class type of Page (NOT DATA TYPE)

export default class LoginPage {
    readonly page: Page;

//! The parameter of the constructor below is page and its data type is page, 
//! thats why we write page: page, this is not the same for this.page = page
//! which is an instance of the page
constructor(page: Page) {
    this.page = page;
}


//! This function below is hard coded and the details are specific, if we want
//! to make this more dynamic, then we will addd parameters
//! async enterDetailsAndLogin() {
//     await this.page.locator('[data-test="username"]').fill('standard_user');
//     await this.page.locator('[data-test="password"]').fill('secret_sauce');
//     await this.page.locator('[data-test="login-button"]').click({delay:500});
// }

//! Now this function is dynamic rather than static(hard-coded)
async enterDetailsAndLogin(username: string, password: string) {
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-button"]').click({delay:500});

}

// TODO const errorMessage = page.locator('[data-test="error"]').textContent();
// TODO expect(await errorMessage).toBe('Epic sadface: Password is required')


}
