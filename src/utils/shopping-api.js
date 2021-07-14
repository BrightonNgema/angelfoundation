import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
 
const shopping_api = new WooCommerceRestApi({
  url: "https://spendally.com/",
  consumerKey: "ck_d91e52d4c5f727b16756f0469e365a784f9c9770",
  consumerSecret: "cs_de84ea668c15ee84dd28abcca71673ce00ce636e",
  version: "wc/v3"
});


export {shopping_api}