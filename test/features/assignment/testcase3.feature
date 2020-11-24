# Test case 3:

# 1.	From the home page go to contact page
# 2.	Populate mandatory fields with invalid data
# 3.	Validate errors

Feature: Only valid email address and contact no are allowed

    Scenario: Validate email and contact fields
        Given User is on contact page
        When user enter following values
            | Field     | Value        |
            | Email     | invalidEmail |
            | Telephone | 123adfa      |
        And submit button is clicked
        Then following error message should be displayed
            | Field     | Error                                 |
            | Email     | Please enter a valid email            |
            | Telephone | Please enter a valid telephone number |