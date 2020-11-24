import cucumberJson from 'wdio-cucumberjs-json-reporter';

export const  delay = ms => new Promise(res=>setTimeout(res,ms));

export const logMessage = msg => cucumberJson.attach(msg,'text/plain');