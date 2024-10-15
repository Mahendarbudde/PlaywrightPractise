Feature: User Login

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter a valid username and password
    And I click on the login button
    Then I should navigate to home page

  Scenario: Unsuccessful login with invalid credentials
    Given I am on the login page
    When I enter an invalid username and password
    And I click on the login button
    Then I should see an error message indicating invalid credentials

  
