/*<![CDATA[*/
(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "knightsofsaintfrancis.myshopify.com",
      storefrontAccessToken: "f496e29091a9bc1cd95e9ec6ac0e71b1",
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: "7378956812456",
        node: document.getElementById("product-component-1647889427853"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                },
              },
              button: {
                "font-family": "Roboto, sans-serif",
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                color: "#030000",
                ":hover": {
                  color: "#030000",
                  "background-color": "#e6e6e6",
                },
                "background-color": "#ffffff",
                ":focus": {
                  "background-color": "#e6e6e6",
                },
                "padding-left": "100px",
                "padding-right": "100px",
              },
              quantityInput: {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
              },
            },
            buttonDestination: "checkout",
            contents: {
              img: false,
              title: false,
              price: false,
            },
            text: {
              button: "Buy now",
            },
            googleFonts: ["Roboto"],
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                "font-family": "Roboto, sans-serif",
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                color: "#030000",
                ":hover": {
                  color: "#030000",
                  "background-color": "#e6e6e6",
                },
                "background-color": "#ffffff",
                ":focus": {
                  "background-color": "#e6e6e6",
                },
                "padding-left": "100px",
                "padding-right": "100px",
              },
              quantityInput: {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
              },
            },
            googleFonts: ["Roboto"],
            text: {
              button: "Add to cart",
            },
          },
          option: {},
          cart: {
            styles: {
              button: {
                "font-family": "Roboto, sans-serif",
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                color: "#030000",
                ":hover": {
                  color: "#030000",
                  "background-color": "#e6e6e6",
                },
                "background-color": "#ffffff",
                ":focus": {
                  "background-color": "#e6e6e6",
                },
              },
            },
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
            googleFonts: ["Roboto"],
          },
          toggle: {
            styles: {
              toggle: {
                "font-family": "Roboto, sans-serif",
                "background-color": "#ffffff",
                ":hover": {
                  "background-color": "#e6e6e6",
                },
                ":focus": {
                  "background-color": "#e6e6e6",
                },
              },
              count: {
                "font-size": "18px",
                color: "#030000",
                ":hover": {
                  color: "#030000",
                },
              },
              iconPath: {
                fill: "#030000",
              },
            },
            googleFonts: ["Roboto"],
          },
        },
      });
    });
  }
})();
/*]]>*/
