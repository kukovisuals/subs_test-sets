
import { expect } from 'chai';
import chalk from 'chalk';
import { sizeGuide } from './helpers/sizeGuide.js';
import { makeSelection } from './helpers/makeSelection.js';
/*
    ***************************************************************
    * Test the 1st pannel opens and sets is clickable
    * Test the funnel is complete
    ***************************************************************
*/
async function chooseYourBox(page) {
    await page.waitForSelector('#subsc40-open-23', { visible: true });
    await page.click('#subsc40-open-23');
    await page.waitForSelector('#subs-001-main', { visible: true });
    console.log(chalk.green('1. Funnel is on the first step -> Choose Your Box √'));
}
async function selectYourBoxType(page) {
    await page.waitForSelector('#eby-subs-plan-premium', { visible: true });
    await page.click('#eby-subs-plan-premium');
    await page.waitForSelector('#eby-sub4-style-panty-bra-set', { visible: true });
    console.log(chalk.green('2. 1 Set card opens -> Select Your Box Type √'));
}
async function tellUsYourSize(page) {
    await page.waitForSelector('#eby-subs-choose-set-custom', { visible: true });
    await page.click('#eby-subs-choose-set-custom');
    await page.waitForSelector('#eby-sub4-size-panty-bra', { visible: true });
    console.log(chalk.green('3. Choose your own opens -> Tell Us Your Size √'));
}
async function ChooseYourOwn(page) {
    // click on a bra
    addProduct(page, '.eby-subs-custom-box-grid-item.eby-subs-custom-move-itemin-box');
    // click on a panty
    addProduct(page, '#custom-box-insert-all-bra-set-panty-here .eby-subs-custom-box-grid-item.eby-subs-custom-move-itemin-box ');
    // you should see the next step
    await page.waitForSelector('#eby-sub4-custom-box-list-set', { visible: true });
    // filters should have at least 1 product
    // The names should be accurate if they say mesh -> sheer, relief bra -> relief bra etc.
    // There at least 3 or 4 products
    console.log(chalk.green('4. Choose your own opens -> Your Set √'));
}
async function yourSet(page) {
    // next button should open summary
    await page.waitForSelector('#eby-subs-custom-box-set-next-bttn23', { visible: true });
    await page.click('#eby-subs-custom-box-set-next-bttn23');
    // summary should open
    await page.waitForSelector('#eby-sub4-summary', { visible: true });
    // If clicked on bra removed it should go back to bra collection
    // If clicked on panty it should go back to panty collection
}
async function summary(page) {
    // It should have title Subscription Box
    //.ebySubsAllNamesBoxPlan
    // It should have name of the plan Choose your own
    //.ebySubsAllNamesBoxTypePlan
    // it should say 1 set
    //.ebySubsAllNamesBoxHowMany
    // it should have <bra size>/<panty size>
    //<.ebySubsAllNamesBoxSizeOneLetter .ebySubsAllNamesBoxSizeOne>/<.ebySubsAllNamesBoxSizePantyTwo .ebySubsAllNamesBoxSizeTwo>
    // IT should say "Renews at $60" "Price of products" "$30"
    //.ebySubsAllNamesRenews .ebySubsAllNamesBoxPrice .ebySubsAllNamesBoxDiscount
}
async function addToCart(page) {
    // check the payload has the correc keys:values
    // set tag -> Classic T3 Membership Perk
    // tag for products so we can give 25% off ->
    // if (isSub4_pTwo == "true" and line_item.variant.product.product_type != "Subscription Box")
    // test products are there
    // side cart info
    // It should have name of the plan Choose your own
    // it should say 1 set
    // it should have <bra size>/<panty size>
    // IT should say "Renews at $60" "Price of products" "$30"
    // you're saving <totalProducts - $60>
}
(async () => {
    let browser;
    try {
        const launched  = await launchBrowser();
        browser = launched.browser;
        const page = launched.page;
        console.log(chalk.white('Testing Hero Section \n'));
       // Run individual test functions
       await chooseYourBox(page);
       await selectYourBoxType(page);
       await tellUsYourSize(page);
       await sizeGuide(page);
       await makeSelection(page);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Only attempt to close the browser if it has been defined
        if (browser) {
            await browser.close();
        }
    }
})();

async function addProduct(page, selector){
    try {
        // Select the parent element
        const parentElement = await page.$(selector);
        if (parentElement) {
            // Find and click the first child of the parent element
            const firstChild = await parentElement.$(':scope > :first-child');
            if (firstChild) {
                await firstChild.click();
                console.log('Clicked the first child!');
            } else {
                console.log('First child not found.');
            }
        } else {
            console.log('Parent element not found.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}