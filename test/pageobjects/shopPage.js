const { default: BasePage } = require("./basePage");
import {logMessage} from '../lib/util';
export default class ShopPage extends BasePage {
    constructor() {
        super();
        this.cartCountEle = '.cart-count';
    }

    async getBuyBtnForItem(itemName) {
        let itemHeader =  await $('h4='+itemName);
        let itemContainer = await itemHeader.parentElement();
        return await itemContainer.$('a=Buy')
    }

    async addItemToCart(itemName) {
        let ele = await this.getBuyBtnForItem(itemName);
        let cartCountSpan = $(this.cartCountEle);
        let cartCountBefore = Number(await this.cartCountEle.getText())
        if(ele !=null){
            await ele.click();
        }
        else
        logMessage('element is null');
    }
}