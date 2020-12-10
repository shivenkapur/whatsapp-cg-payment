import selectors from '../config/selectorConfig.js'
import pageFunctions from '../../puppeteer_page.js'

export default async function searchForContact(page){
    let newMessageButton = selectors.newMessageButton;
    let newMessageButtonClicked = await pageFunctions.click(page, newMessageButton, 50000)

    await page.waitFor(3000);

    return newMessageButtonClicked
}

