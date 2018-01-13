Feature: Google Search

  Scenario: Google Search results are verified
    Given I am on the google home page
    When I search for crayon
    Then I receive good search results