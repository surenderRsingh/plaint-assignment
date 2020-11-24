const { default: BasePage } = require("./basePage");
import { clickElement } from '../lib/elementOperations/actionsOps';
import {logMessage} from '../lib/util';
import CartPage from './CartPage';


export default class ShopPage extends BasePage {
    constructor() {
        super();
        this.cartCountEle = '.cart-count';
        this.cartBtn = '#nav-cart a'
    }

    async getBuyBtnForItem(itemName) {
        let itemHeader =  await $('h4='+itemName);
        let itemContainer = await itemHeader.parentElement();
        return await itemContainer.$('a=Buy')
    }

    async addItemToCart(itemName) {
        let ele = await this.getBuyBtnForItem(itemName);
        let cartCountSpan = await $(this.cartCountEle);
        // let cartCountBefore = Number(await cartCountSpan.getText())
        if(ele !=null){
            await ele.click();
        }
        else
            throw new Error ('Buy button not found for item ' + itemName);

        // await expect(cartCountSpan).toHaveText(cartCountBefore+1);
        
    }

    async openCart() {
        await clickElement(this.cartBtn,"Cart button");
        return new CartPage();
    }
}