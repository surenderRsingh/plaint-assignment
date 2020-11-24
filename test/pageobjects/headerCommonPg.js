import BasePage from "./basePage";
import {clickElement} from '../lib/elementOperations/actionsOps';
import ContactPage from "./contactPage";
import ShopPage from "./shopPage";

export default class HeaderPg extends BasePage {
    
    constructor(){
        super();
        this.logoImg = 'a.brand';
        this.homePgLink = '#nav-home a';
        this.contactPgLink = '#nav-contact a';
        this.shopPgLink = '#nav-shop a'
    }

    async openContactPage(){
        await clickElement(this.contactPgLink,"Contact Link");
        return new ContactPage();
    }  
    
    async openShopPage(){
        await clickElement(this.shopPgLink,"Shop link");
        return new ShopPage();
    }
}