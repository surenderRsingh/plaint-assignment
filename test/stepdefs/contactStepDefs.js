import {Given,When,Then} from 'cucumber';
import HeaderPage from '../pageobjects/headerCommonPg';

let container = {};

Given(/^User is on contact page$/,async ()=>{
  container.contactPg =  await (new HeaderPage()).openContactPage();
});

When(/^submit button is clicked$/,async()=>{
  await container.contactPg.submit();
});

Then(/^following error message should be displayed$/, function (errors)  {
   container.contactPg.validateFieldErrorMsgs(errors);
});

When(/^user enter following values$/, (details)=>{
  container.contactPg.enterFieldValues(details);
})

Then(/^No error message should be displayed$/,()=>{
  container.contactPg.validateNoErrorIsDisplayed();
})

Then(/"(.*)" should get displayed$/,(msg)=>{
  container.contactPg.validateAlertMessage(msg);
})