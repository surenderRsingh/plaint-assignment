import {Given,When,Then} from 'cucumber';
import HeaderPg from '../pageobjects/headerCommonPg';
import ShopPage from '../pageobjects/shopPage';

Given(/^User is on shop page$/,async () => {
    await (new HeaderPg).openShopPage();
    await (new ShopPage).addItemToCart();
});