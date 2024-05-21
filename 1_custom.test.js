import { launchBrowser } from './pageSettings.js';
import { expect } from 'chai';
import chalk from 'chalk';
import { sizeGuide } from './helpers/sizeGuide.js';

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

    console.log(chalk.green('2. Choose your own opens -> Tell Us Your Size √'));
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
       //await sizeGuide(page);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Only attempt to close the browser if it has been defined
        if (browser) {
            await browser.close();
        }
    }
})();
