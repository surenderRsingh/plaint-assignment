# Pre requisite
 - Node version > 10
 - Chrome version 86

 ## Initial set up
  > Download or clone project <br/>
  > Download all required modules <br/>
      ```
      npm install    
      ```
      <br/>
  > execute test cases <br/>
    ```
    npx wdio wdio.config.js
    ```
    <br/>
  > 

  > For changing the chrome version - change _chromedriver_ value in package.json <br/>

  ## configuration
  > config file - **wdio.conf.js** <br/>
  > Max timeout is set to 20 seconds <br/>
  > Max instances is set to 5. Thus all test cases will execute in parallel. For individual test case execution set maxInstances to 1 <br/>

  ## Reporting
  Reports are saved at **Reports/html** folder <br/>
  Open Index.html file and select individual feature for detailed infomation
  Click on scenario header to get to step level details 


