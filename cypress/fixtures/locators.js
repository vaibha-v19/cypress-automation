const locators = {
  loginEmailField: "//input[@id='input-email']",
  loginPasswordField: "//input[@id='input-password']",
  loginButton: "//input[@value='Login']",
  myAccountDropdown: "//a[@title='My Account']",
  loginOption: "//a[text()='Login']",
  loginVerificationText: "//a[text()='Edit your account information']",
  logoutOption: "//ul[@class='dropdown-menu dropdown-menu-right']//a[text()='Logout']",
  
  myAccountDropdown: "//a[@title='My Account']",
  registerOption: "//a[text()='Register']",
  firstNameField: "//input[@name='firstname']",
  lastNameField: "//input[@name='lastname']",
  emailField: "//input[@name='email']",
  telephoneField: "//input[@name='telephone']",
  passwordField: "//input[@name='password']",
  confirmPasswordField: "//input[@name='confirm']",
  agreeBox: "//input[@name='agree']",
  continueButton: "//input[@value='Continue']",
  accountCreatedHeading: "//h1[text()='Your Account Has Been Created!']",

  currencyButton: "//button[@class='btn btn-link dropdown-toggle' and @data-toggle='dropdown']",
  currencyDropdownOptions: "//ul[@class='dropdown-menu']/li/button[@class='currency-select btn btn-link btn-block']",
  contactLink: "//a[@href='https://tutorialsninja.com/demo/index.php?route=information/contact']",
  myAccountDropdown: "//a[@title='My Account']",
  registerLink: "//a[@href='https://tutorialsninja.com/demo/index.php?route=account/register']",
  loginLink: "//a[@href='https://tutorialsninja.com/demo/index.php?route=account/login']",
  wishListLink: "//a[@href='https://tutorialsninja.com/demo/index.php?route=account/wishlist']",
  shoppingCartLink: "//a[@href='https://tutorialsninja.com/demo/index.php?route=checkout/cart']",
  checkoutLink: "//a[@href='https://tutorialsninja.com/demo/index.php?route=checkout/checkout']",
  homeButton: "//a[text()='Qafox.com']",


  PRODUCT_INFO: "//h2[text()='What would you like to do next?']",
  EMPTY_CART_BUTTON: "//button[@type='button' and @class='btn btn-danger' and @data-original-title='Remove']",
  EMPTY_CART_MSG: "//p[text()='Your shopping cart is empty!']",
  HOME_BUTTON : "//a[text()='Qafox.com']",
  CONTINUE_BUTTON: "//a[text()='Continue']",
  UPDATE_QUANTITY_FIELD: "//input[@class='form-control']",
  UPDATE_QUANTITY_BUTTON: "//button[@type='submit' and @class='btn btn-primary' and @data-original-title='Update']",
  UPDATE_CART_MSG: "//div[@class='alert alert-success alert-dismissible']//button[@class='close' and @data-dismiss='alert']",

  ADD_TO_CART_BUTTON: "//button[contains(@onclick, 'cart.add')][1]",
  SUCCESS_CART_MESSAGE: "//div[contains(@class, 'alert-success') and contains(@class, 'alert-dismissible')]",
  SHOPPING_CART_POPUP: "//a[text()='shopping cart']",

 

};

module.exports = locators;