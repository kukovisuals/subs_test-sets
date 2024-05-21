
import chalk from 'chalk';
/*
    *****************************************************************
    * SIZE GUIDE
    * Bra: 32, 34, 36, 38, 40, 42, 44
    * Bra: A, B, C, D, DD, DDD, G, 
    * panty: XS, SM, MD, LG, XL, 1X, 2X, 3X, 4X
    *****************************************************************
*/
export async function sizeGuide(page) {
    await page.waitForSelector('#eby-subs-choose-set-custom', { visible: true });
    await page.click('#eby-subs-choose-set-custom');
    await page.waitForSelector('#eby-sub4-size-panty-bra', { visible: true });

    console.log(chalk.green('2. Choose your own opens Tell Us Your Size √'));
}