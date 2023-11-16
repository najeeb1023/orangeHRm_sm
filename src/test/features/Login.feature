Feature: User Login

    Background: User logs in.
        Given The user visits the website


    Scenario: User is able to login with correct credentials.
        When User goes to the website and enters "<USERNAME>" and "<PASSWORD>"
        Then The user is logged in

        Examples:
            | USERNAME | PASSWORD |
            | Admin    | admin123 |


     Scenario: User is not able to login with incorrect credentials.
        When User goes to the website and enters wrong "<USERNAME>" and "<PASSWORD>"
        Then The user is not logged in

        Examples:
            | USERNAME | PASSWORD |
            | Ippi    | admin123 |