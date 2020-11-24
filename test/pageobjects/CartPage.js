import BasePage from "./basePage"
import {logMessage} from '../lib/util';

export default class CartPage extends BasePage {
    constructor(){
        super();
    }

    validateItemQuantity(itemName,quantity){
        let itemRow = $('.cart-items tbody').$('tr*=' + itemName);
        let quantityEdit = itemRow.$('input.ng-valid-number');

        expect(quantityEdit).toHaveValue(quantity);
    }

    validateItems(items) {
        for(let counter=0;counter < items.hashes().length;counter++ ){
            let item = items.hashes()[counter].Item;
            let quantity = items.hashes()[counter].Quantity;

            this.validateItemQuantity(item,quantity);
        }
    }
}