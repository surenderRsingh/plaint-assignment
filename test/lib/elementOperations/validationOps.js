'use strict'

const cucumberJson = require("wdio-cucumberjs-json-reporter").default;

export function assertElementTextEquals(identifier,expectedText,eleName) {
    eleName = eleName || '';
    
    if(!identifier)
        throw new Error('Element identifier not defined-- assertElementTextEquals');

    expect($(identifier)).toHaveText(expectedText);
}

export function assertElementDoesNotExist(identifier,eleName){
    // validate that array of elements with identifier is zero
    eleName = eleName || '';
    
    if(!identifier)
        throw new Error('Element identifier not defined-- assertElementTextEquals');

    expect($$(identifier)).toBeElementsArrayOfSize(0);
}