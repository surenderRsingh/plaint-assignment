import {logMessage} from '../util';


export const clickElement = async (identifier,name) =>{
    name = name || '';

    if(!identifier)
        throw new Error('Element identifier not defined-- clickElement');
    
    let ele = await $(identifier);

    if(!ele)
        throw new Error(`Element with identifier ${identifier} does not exist.`)

    ele.click();
    logMessage(`click operation performed on element ${name}`);

}

export const  setValue = async (identifier, fieldValue,fieldName) =>{
    fieldName = fieldName || '';

    if(!identifier)
        throw new Error('Element identifier not defined-- setValue');
    
    await $(identifier).setValue(fieldValue);

    logMessage(`Value for field ${fieldName} is set to ${fieldValue}`);
}