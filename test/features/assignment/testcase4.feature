# Test case 4:

# 1.	From the home page go to shop page
# 2.	Click buy button 2 times on “Funny Cow”
# 3.	Click buy button 1 time on “Fluffy Bunny”
# 4.	Click the cart menu
# 5.	Verify the items are in the cart

Feature: User is able to select and add items to carts.
    Scenario: Validate selected items are added to cart.
        Given User is on shop page