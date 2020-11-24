#Test case 2:
#1.	From the home page go to contact page
#2.	Populate mandatory fields
#3.	Click submit button
#4.	Validate successful submission message

Feature: Contact details submission message
    On contact page, user should get a success message upon submitting a request successfuly

    Scenario: Verify success message after submitting contact details
        Given User is on contact page
        When  user enter following values
            | Field    | Value                |
            | Forename | Plaint Test |
            | Email    | Test1@plaint.com    |
            | Message  | Test message for assignment  |
        And submit button is clicked
        Then  "Thanks Plaint Test, we appreciate your feedback." should get displayed