import {Given,When,Then} from 'cucumber';
import HeaderPg from '../pageobjects/headerCommonPg';

let container = {}

Given(/^User is on shop page$/,async () => {
    container.shopPg =  await (new HeaderPg).openShopPage();
});

When(/^"(.*)" item is selected/,async (item)=>{
    await container.shopPg.addItemToCart(item);
})

When(/^cart menu button is clicked$/,async () => {
    container.cartPg =  await container.shopPg.openCart();
});

Then(/^cart should have following items$/,(items)=>{
    container.cartPg.validateItems(items);
});