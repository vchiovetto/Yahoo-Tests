Feature: Login

Scenario: Login
    Given that enter into the Yahoo website
    When insert my email 
    And click in next
    And insert my password
    And click in next
    Then check login successful
