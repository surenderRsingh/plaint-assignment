#Test case 1:
#1.	From the home page go to contact page
#2.	Click submit button
#3.	Validate errors
#4.	Populate mandatory fields
#5.	Validate errors are gone

Feature: Mandatory fields on contact page
    Firstname, Email and message text fields are mandatory.
    Error message is displayed, if any of these is left blank
    Scenario: All mandatory fields left blank
        Given User is on contact page
        When submit button is clicked
        Then  following error message should be displayed
            | Field    | Error                |
            | Forename | Forename is required |
            | Email    | Email is required    |
            | Message  | Message is required  |
        When  user enter following values
            | Field    | Value                |
            | Forename | Plaint Test |
            | Email    | Test1@plaint.com    |
            | Message  | Test message for assignment  |
        And submit button is clicked
        Then No error message should be displayed