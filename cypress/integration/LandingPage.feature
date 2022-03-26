Feature: Automate Selected Elements
  Background:
    Given Navigate to web site
    Then Clear session

  Scenario Outline: Verify add/delete element
    When Select element <element>
    And Click on add element
    Then Element is added
    When Click on delete element
    Then Element is deleted
    Examples:
      | element |
      | /add_remove_elements/ |

  Scenario Outline: Verify basic authentication
    When Select element <element>
    Then Fill user name <userName>
    Then Fill password <password>
    And Click login
    Then Authentication is succeeded
    Examples:
      | element | userName | password |
      | /login | tomsmith | SuperSecretPassword!  |

  Scenario Outline: Verify horizontal slider
    When Select element <element>
    Then Move slider to <value>
    Then Slider moved to <value>
    Examples:
      | element | value |
      | /horizontal_slider | 5 |

  Scenario Outline: Verify JS alert
    When Select element <element>
    Then Click for js alert
    Then Click <ok_option> window confirm
    Then  Confirm result <text_for_js_alert>
    Examples:
      | element | text_for_js_alert | ok_option |
      | /javascript_alerts | You successfully clicked an alert | Ok |

  Scenario Outline: Verify JS confirm
    When Select element <element>
    And Click for js confirm
    Then Click <ok_option> window confirm
    Then  Confirm result <text_for_ok_js_confirm>
    Then Click for js confirm
    And Click <cancel_option> window confirm
    Then Confirm result <text_for_cancel_js_confirm>
    Examples:
      | element            | text_for_ok_js_confirm | text_for_cancel_js_confirm | ok_option | cancel_option |
      | /javascript_alerts | You clicked: Ok        | You clicked: Cancel        | Ok        | Cancel        |

  Scenario Outline: Verify JS prompt
    When Select element <element>
    And Click and enter text in prompt js <text>
    Then Confirm result You entered: <text>
    Examples:
      | element | text |
      | /javascript_alerts | soum |

  Scenario Outline: Verify Dropdown
    When Select element <element>
    Then Select <option> from drop down
    Examples:
      | element | option |
      | /dropdown | Option 2 |

