/* Smiling Slice — menu data (extracted from the live site). */

window.MENU_DATA = {
  bestsellers: [
    { name: "Black Forest",      cat: "Chocolate", price: 750,  img: "assets/menu/black-forest.jpg",      note: "Whipped cream & dark cherry" },
    { name: "Red Velvet",        cat: "Signature", price: 1350, img: "assets/menu/red-velvet.jpg",        note: "Cream cheese frosting" },
    { name: "Raffaello",         cat: "Special",   price: 1650, img: "assets/menu/raffaello.jpg",         note: "Coconut, almond, white chocolate" },
    { name: "Ferrero Rocher",    cat: "Special",   price: 1650, img: "assets/menu/ferrero-rocher.jpg",    note: "Hazelnut & milk chocolate" },
    { name: "Honey Almond",      cat: "Signature", price: 1350, img: "assets/menu/honey-almond.jpg",      note: "Toasted almond, raw honey" },
    { name: "Rainbow",           cat: "Special",   price: 1800, img: "assets/menu/rainbow.jpeg",          note: "Seven layers, a slow afternoon" }
  ],

  categories: [
    {
      id: "signature",
      title: "Regular Cakes",
      blurb: "The cakes she's been baking longest. Quiet classics.",
      items: [
        { name: "Vanilla",                 price: 750,  img: "assets/menu/vanilla.png" },
        { name: "Butterscotch",            price: 1100, img: "assets/menu/butterscotch.jpg" },
        { name: "Red Velvet — Cream Cheese", price: 1350, img: "assets/menu/red-velvet.jpg" },
        { name: "Red Velvet — Whipped",    price: 1150, img: "assets/menu/red-velvet-whipped.jpg" },
        { name: "Honey Almond",            price: 1350, img: "assets/menu/honey-almond.jpg" },
        { name: "Pistachio",          price: 1100, img: "assets/menu/pistachio.jpg" }
      ]
    },
    {
      id: "chocolate",
      title: "Chocolate Cakes",
      blurb: "Twelve shades of cocoa, sourced and folded by hand.",
      items: [
        { name: "Black Forest",            price: 850,  img: "assets/menu/black-forest.jpg" },
        { name: "White Forest",            price: 800,  img: "assets/menu/white-forest.jpg" },
        { name: "Chocolate",               price: 1000,  img: "assets/menu/chocolate.jpg" },
        { name: "Dark Chocolate Truffle",  price: 1200, img: "assets/menu/dark-truffle.jpg" },
        { name: "Rich Chocolate Truffle",  price: 1400, img: "assets/menu/rich-dark-truffle.jpg" },
        { name: "Milk Chocolate Truffle",  price: 1200, img: "assets/menu/milk-truffle.jpg" },
        { name: "White Chocolate Truffle", price: 1250, img: "assets/menu/white-truffle.jpg" },
        { name: "Vancho",                  price: 1200, img: "assets/menu/vancho.jpg" },
        { name: "Nutty Bubble",            price: 1300, img: "assets/menu/nutty-bubble.jpg" },
        { name: "Choco Nuts",              price: 1300, img: "assets/menu/choco-nuts.png" },
        { name: "Cappuccino",              price: 1200, img: "assets/menu/cappuccino.jpg" },
        { name: "Nutella",                 price: 1450, img: "assets/menu/nutella.jpg" }
      ]
    },
    {
      id: "fruit",
      title: "Fruit Cakes",
      blurb: "Bright, seasonal fruit layered with light cream.",
      items: [
        { name: "Strawberry Truffle",      price: 1100, img: "assets/menu/strawberry.png" },
        { name: "Blueberry",               price: 1100, img: "assets/menu/blueberry.jpg" },
        { name: "Fresh Pineapple",         price: 1150, img: "assets/menu/pineapple.jpg" },
        { name: "Mango Truffle",           price: 1100, img: "assets/menu/mango-truffle.png" }
      ]
    },
    {
      id: "special",
      title: "Special Cakes",
      blurb: "The showpieces. Ordered ahead, made to order.",
      items: [
        { name: "Chocolate Brownie",       price: 850, unit: "500g", img: "assets/menu/brownie.png" },
        { name: "Checkerboard",            price: 1500, note: "Butter icing", img: "assets/menu/checkerboard.jpg" },
        { name: "Blondie Brownie",         price: 2000, unit: "1.5kg", note: "Butter icing", img: "assets/menu/blondie-brownie.jpg" },
        { name: "Dream Cake",              price: 1500, img: "assets/menu/dream.png" },
        { name: "Kitkat Gems",             price: 1550, img: "assets/menu/kitkat.jpg" },
        { name: "Snickers",                price: 1600, img: "assets/menu/snickers.jpg" },
        { name: "Spanish Delight",         price: 1400, img: "assets/menu/spanish.jpg" },
        { name: "Raffaello",               price: 1650, img: "assets/menu/raffaello.jpg" },
        { name: "Chocolate Overloaded",    price: 1600, img: "assets/menu/chocolate-overloaded.jpg" },
        { name: "Rainbow",                 price: 1800, img: "assets/menu/rainbow.jpeg" },
        { name: "Toffee",                  price: 1300, img: "assets/menu/toffee.jpg" },
        { name: "Tres Leches",             price: 1450, img: "assets/menu/tres-leches.jpg" },
        { name: "Ferrero Rocher",          price: 1650, img: "assets/menu/ferrero-rocher.jpg" }
      ]
    },
    {
      id: "butter",
      title: "Butter Cakes",
      blurb: "Tea-time slices. Sold by the half-kilo.",
      items: [
        { name: "Pound",                   price: 600, unit: "500g", img: "assets/menu/pound.jpg" },
        { name: "Tender Coconut",          price: 700, unit: "550g", img: "assets/menu/tender-coconut.jpg" },
        { name: "Fruit",                   price: 800, unit: "500g", img: "assets/menu/butter-fruit.jpg" },
        { name: "Pineapple",               price: 700, unit: "550g", img: "assets/menu/butter-pineapple.jpg" },
        { name: "Marble",                  price: 750, unit: "500g", img: "assets/menu/marble.jpeg" }
      ]
    },
    {
      id: "plum",
      title: "Plum Cakes",
      blurb: "Christmas-soaked fruit, all year round.",
      items: [
        { name: "Premium Plum",            price: 1200, img: "assets/menu/plum.jpg" }
      ]
    }
  ]
};
