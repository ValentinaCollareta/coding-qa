import pageobjectPage from '../pageobjets/pageobject.page.js';

describe('El Economista - E2E', () => {
    it('should open the page', async () => {
        await browser.url(`https://www.eleconomista.es/`);
        await expect(pageobjectPage.firstImg).toExist();
        await browser.maximizeWindow();
        await browser.pause(1000);
    });
    it('should open the menu > Mercados > Cotizaciones > Índices mundiales', async () => {
        await pageobjectPage.menu.click();
        await browser.pause(1000);
        await pageobjectPage.mercados.click();
        await browser.pause(1000);
        await pageobjectPage.indicesMundiales.scrollIntoView();
        await browser.pause(1000);
        await pageobjectPage.indicesMundiales.click();
        await expect(pageobjectPage.indicesMundialesH1).toExist();
    });
    it('should save some values', async () => {
        let fV = await pageobjectPage.span('IBEX 35').getText();
        let fV2 = await fV.replace('.', '');
        let sV = await pageobjectPage.span('BE 20').getText();
        let sV2 = await sV.replace('.', '');
        let tV = await pageobjectPage.span('UK 100').getText();
        let tV2 = await tV.replace('.', '');
        let fV3 = fV2.replace(',', '.')
        let sV3 = sV2.replace(',', '.')
        let tV3 = tV2.replace(',', '.')
        let valuesArray = await [parseFloat(fV3), parseFloat(sV3), parseFloat(tV3)];
        let sortValues = await valuesArray.sort((a, b)=>{return a - b});
        console.log('Values: ', await sortValues);
    });
});

