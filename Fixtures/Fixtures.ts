//! Imported test as a base function
import {test as base} from "@playwright/test";

//! These imports are automatically generated when you specify 
//! the type which is below, don't worry about writing these yourself
import LoginPage from "../Pages/LoginPage";


type Pages = {
    loginPage: LoginPage
}

export const test = base.extend<Pages>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    }
})