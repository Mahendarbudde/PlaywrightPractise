Feature: User Registration

  Scenario: New user should register successfully
    Given the user is on the login page
    And the user clicks on the Register button
    Then the user should navigate to the registration page
    And the user enters the first name
    And the user enters the last name
    And the user enters the username
    And the user enters the confirm password
    And the user selects the male radio button
    And the user clicks on the Register button
