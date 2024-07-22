# Feature: Feature Name

   
#     Scenario: Scenario Name
#         Given Home page is opened
Feature: Account Creation and Login
    @TagName
    Scenario: Create a new account and login
    Given I open the registration page
    When I fill in the registration form with valid data
    And I submit the registration form
    Then I should see a success message
    When I log out
    And I open the login page
    And I fill in the login form with valid data
    And I submit the login form
    Then I should be logged in successfully
