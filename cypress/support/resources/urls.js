// cypress/support/resources/urls.js

const BASE_URL = 'https://tutorialsninja.com/demo';

module.exports = {
  BASE_URL,
  CONTACT_URL: `${BASE_URL}/index.php?route=information/contact`,
  REGISTER_URL: `${BASE_URL}/index.php?route=account/register`,
  LOGIN_URL: `${BASE_URL}/index.php?route=account/login`,
  WISHLIST_URL: `${BASE_URL}/index.php?route=account/wishlist`,
  SHOPPING_CART_URL: `${BASE_URL}/index.php?route=checkout/cart`,
  CHECKOUT_URL: `${BASE_URL}/index.php?route=checkout/cart`, // Same as cart in this case
};
