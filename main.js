import './style.css'


// hidden menu 

const hiddenMenuBtn = document.querySelector("#hidden-menu-btn");
const hiddenMenu = document.querySelector("#hidden-menu");
const fixedMenuBtn = document.querySelector("#fixed-menu-btn");
const smallHome = document.querySelector("#smallHome");
const bigHome = document.querySelector("#bigHome");
const bottomLogo = document.querySelector(".bottom-logo");


hiddenMenuBtn.addEventListener("click",()=>{
  hiddenMenu.classList.remove("opacity-0");
  hiddenMenu.classList.remove("pointer-events-none")
})

const closeFixedMenu = () => {
  hiddenMenu.classList.add("opacity-0");
  hiddenMenu.classList.add("pointer-events-none")
}

bigHome.addEventListener("click",() => {
  scrollToProducts(0);
})
bottomLogo.addEventListener("click",() => {
  scrollToProducts(0);
})
smallHome.addEventListener("click",() => {
  scrollToProducts(0);
  closeFixedMenu()
});

fixedMenuBtn.addEventListener("click",()=>{
  closeFixedMenu();
})

hiddenMenu.classList.add("select-none");



// window load  

const home1 = document.querySelector("#home1");
const nav = document.querySelector(".nav");

window.addEventListener("load",()=>{
 setTimeout(() => {
  home1.style.opacity = "1";
  home1.style.transform = "translateY(0px)";
  home1.classList.add("duration-500")
 }, 500);
})


window.addEventListener("scroll",() => {
  if(window.scrollY > 300){
    nav.classList.add("fixed");
    nav.classList.replace("-top-20","top-0")
  }else{
    nav.classList.remove("fixed");
    nav.classList.replace("top-0","-top-20")
  }
})


// HOME 1
const move = () => {
  setTimeout(() => {
    discountParent.classList.replace("translate-x-0","-translate-x-[25%]");
  }, 2000);
  setTimeout(() => {
    discountParent.classList.replace("-translate-x-[25%]","-translate-x-[50%]");
  }, 4000);
  setTimeout(() => {
    discountParent.classList.replace("-translate-x-[50%]","-translate-x-[75%]");
  }, 6000);
  setTimeout(() => {
    discountParent.classList.replace("-translate-x-[75%]","-translate-x-[50%]");
  }, 8000);
  setTimeout(() => {
    discountParent.classList.replace("-translate-x-[50%]","-translate-x-[25%]");
  }, 10000);
  setTimeout(() => {
    discountParent.classList.replace("-translate-x-[25%]","translate-x-0");
  }, 12000);

}
 
move();
setInterval(() => {
  move();
}, 12000);


// main data
const products = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3,
      "count": 400
    }
  },
  {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 1.9,
      "count": 100
    }
  },
  {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "rating": {
      "rate": 3.3,
      "count": 203
    }
  },
  {
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 470
    }
  },
  {
    "id": 11,
    "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "price": 109,
    "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 319
    }
  },
  {
    "id": 12,
    "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "price": 114,
    "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 400
    }
  },
  {
    "id": 13,
    "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    "price": 599,
    "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 250
    }
  },
  {
    "id": 14,
    "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA)",
    "price": 999.99,
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.2,
      "count": 140
    }
  },
  {
    "id": 15,
    "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "price": 56.99,
    "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "rating": {
      "rate": 2.6,
      "count": 235
    }
  },
  {
    "id": 16,
    "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "price": 29.95,
    "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 340
    }
  },
  {
    "id": 17,
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "price": 39.99,
    "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "rating": {
      "rate": 3.8,
      "count": 679
    }
  },
  {
    "id": 18,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 130
    }
  },
  {
    "id": 19,
    "title": "Opna Women's Short Sleeve Moisture",
    "price": 7.95,
    "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 20,
    "title": "DANVOUY Womens T Shirt Casual Cotton Short",
    "price": 12.99,
    "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "rating": {
      "rate": 3.6,
      "count": 145
    }
  }
]

const clothesArr = [2,3,4,15,16,17,18,19,20];
const electronicArr = [9,10,11,12,13,14];
const furnitureArr = [1,13,14];
const jewelryArr = [5,6,7,8];

//data
const discountProducts = products.filter(el => {
  return el.id === 14 || el.id === 10 || el.id === 11 || el.id === 13;
});

const clothesData = products.filter(el =>{
  return clothesArr.includes(el.id);
});
const electronicData = products.filter(el => {
  return electronicArr.includes(el.id);
});
const furnitureData = products.filter(el => {
  return furnitureArr.includes(el.id);
});
const jewelryData = products.filter(el => {
  return jewelryArr.includes(el.id);
});


let cartValue = 0;
let cartBoxQuantity = 1;

//selector
const discountParent = document.querySelector("#discountParent");
const displayProducts = document.querySelector(".display-products");
const searchInput = document.querySelector("#searchInput");
const seeMoreProducts = document.querySelector("#seeMoreProducts");
const clothesBtn = document.querySelectorAll(".clothesBtn");
const electronicBtn = document.querySelectorAll(".electronicBtn");
const furnitureBtn = document.querySelectorAll(".furnitureBtn");
const jewelryBtn = document.querySelectorAll(".jewelryBtn");
const allProducts = document.querySelector("#allProducts");
const cart = document.querySelector("#cart");
const cartBoxBtn = document.querySelector("#cartBoxBtn");
const cartBoxCloseBtn = document.querySelector("#cartBoxCloseBtn");
const cartBox = document.querySelector("#cartBox");
const cartBoxList = document.querySelector(".cart-box-list");
const cartBoxTotalCost = document.querySelector(".cart-box-total-cost");
const cartBoxClearAll = document.querySelector(".cart-box-clear-all");
const discountDetailsBox = document.querySelector(".discount-details-box");
const discountDetailsParent = document.querySelector(".discount-details-parent");
const discountDetailsBtn = document.querySelector(".discount-details-btn");
const discountDetailsCloseBtn = document.querySelector(".discount-details-close-btn");
const viewAllProducts = document.querySelector("#viewAllProducts");


//function

const createCartBoxItems = (id,img,title,price) => {
  const cartBoxItem = document.createElement("div");
  cartBoxItem.classList.add("cart-box-item");
  cartBoxItem.setAttribute("cartBoxItemId",id);
  cartBoxItem.innerHTML = `
  <div class="flex justify-between items-center mb-6 relative group">
    <div class="flex items-center gap-2 w-[60%]">
      <img class="h-12 w-12" src="${img}" alt="">
      <p class="text-[13px] max-sm:text-[11px] pl-0 w-[80%]">${title}</p>
    </div>
    <p class="px-6 w-[20%] max-sm:text-sm cart-box-quantity">1</p>
    <p class="w-[20%] max-sm:text-sm cart-box-price">${price} $</p>
    <button class="cart-box-del absolute px-3 bg-white py-1 rounded-lg text-primary border -right-2 opacity-0 translate-x-3 
    pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto duration-300">X</button>
  </div>
  `
  return cartBoxItem;
}

const heightChangeToAuto = () => {
  if(document.body.offsetWidth > 1280){
    displayProducts.classList.replace("h-[800px]","h-auto");
  }else if(document.body.offsetWidth > 1023 && document.body.offsetWidth < 1281){
    displayProducts.classList.replace("max-xl:h-[775px]","max-xl:h-auto");
  }else if(document.body.offsetWidth > 639 && document.body.offsetWidth < 1024){
    displayProducts.classList.replace("max-lg:h-[720px]","max-lg:h-auto");
  }else if(document.body.offsetWidth < 640){
    displayProducts.classList.replace("max-sm:h-[1080px]","max-sm:h-auto")
  }
}

const heighChangeToPx = () => {
  if(document.body.offsetWidth > 1280){
    displayProducts.classList.replace("h-auto","h-[800px]");
  }else if(document.body.offsetWidth > 1023 && document.body.offsetWidth < 1281){
    displayProducts.classList.replace("max-xl:h-auto","max-xl:h-[775px]");
  }else if(document.body.offsetWidth > 639 && document.body.offsetWidth < 1024){
    displayProducts.classList.replace("max-lg:h-auto","max-lg:h-[720px]");
  }else if(document.body.offsetWidth < 640){
    displayProducts.classList.replace("max-sm:h-auto","max-sm:h-[1080px]")
  }
}


const showAllProducts = () => {
  heighChangeToPx();
  allProducts.classList.add("opacity-0","pointer-events-none")
  seeMoreProducts.classList.remove("hidden");
  displayProducts.innerHTML = null;
  products.forEach( el => {
   displayProducts.append(createDisplayBox(el.id,el.image,el.title,el.price));
 })
 searchInput.value = null;
 
}

const createDisplayBox = (id,img,name,price) => {
  const box = document.createElement("div");
  box.classList.add("basis-1/4","p-3","max-lg:basis-2/4","max-xl:basis-1/3","max-sm:basis-1/2","display-box");
  box.setAttribute("displayBox-id",id)
  box.innerHTML = `
  <div class="w-full h-full p-3 max-sm:p-1 flex flex-col justify-between items-center rounded-xl shadow-xl bg-white hover:-translate-y-2 duration-500">
      <img class="w-auto h-40 max-sm:h-[66px] py-3" src="${img}" alt="">
      <h1 class=" text-center my-3 font-heading text-stone-700 font-semibold text-[16px] max-sm:text-[8px]">${name}</h1>
      <p class="font-heading font-semibold mb-4 max-sm:text-[10px]">Price - ${price} $</p>
      <button class="px-4 py-1 max-sm:px-2 max-sm:py-0.5 mb-4 border rounded-lg border-primary text-primary add-to-cart max-sm:text-[10px]">Add to cart</button>
  </div>
  `
  return box;
}

const createDiscountProduct = (img,name,price) => {
  const discountBox = document.createElement("div");
  discountBox.innerHTML = `
  <div class="p-3 flex justify-center items-center flex-col">
    
    <img class="w-[50%] my-5" src="${img}" alt="">
    <h1 class="text-xl max-lg:text-sm text-center my-4 font-heading text-stone-700 font-semibold">${name}</h1>
    <p class="font-heading font-semibold mb-2"><span class="line-through font-normal">${price}</span> $<span class="text-lg ml-4 font-semibold">${(price - (price*0.3)).toFixed(2)}</span> $</p>
    
  </div>
  `
  return discountBox;
}

//render

discountProducts.forEach(el => {
  discountParent.append(createDiscountProduct(el.image,el.title,el.price));
})

products.forEach( el => {
  displayProducts.append(createDisplayBox(el.id,el.image,el.title,el.price));
})



// SEARCH PRODUCT JS




//handler

const btnHandler = (index) => {
  displayProducts.innerHTML = null;
  heightChangeToAuto();
  allProducts.classList.remove("opacity-0","pointer-events-none");
  seeMoreProducts.classList.add("hidden");
  index.forEach(el => {
    displayProducts.append(createDisplayBox(el.id,el.image,el.title,el.price));
  })
}


const seeMoreProductsHandler = () => {
  
  if(document.body.offsetWidth > 1280){
    displayProducts.classList.toggle("h-[800px]");
    displayProducts.classList.contains("h-[800px]") ?  seeMoreProducts.innerText = "See More.." : seeMoreProducts.innerText = "See Less.."

  }else if(document.body.offsetWidth > 1023 && document.body.offsetWidth < 1281){
    
    displayProducts.classList.toggle("max-xl:h-[775px]");
    displayProducts.classList.toggle("max-xl:h-auto");
    displayProducts.classList.contains("max-xl:h-[775px]") ?  seeMoreProducts.innerText = "See More.." : seeMoreProducts.innerText = "See Less.."

  }else if(document.body.offsetWidth > 639 && document.body.offsetWidth < 1024){
    displayProducts.classList.toggle("max-lg:h-[720px]");
    displayProducts.classList.toggle("max-lg:h-auto");
    displayProducts.classList.contains("max-lg:h-[720px]") ?  seeMoreProducts.innerText = "See More.." : seeMoreProducts.innerText = "See Less.."

  }else if(document.body.offsetWidth < 640){
    displayProducts.classList.toggle("max-sm:h-[1080px]");
    displayProducts.classList.toggle("max-sm:h-auto");
    displayProducts.classList.contains("max-sm:h-[1080px]") ?  seeMoreProducts.innerText = "See More.." : seeMoreProducts.innerText = "See Less.."

  }
  
};


const searchInputHandler = (event) => {
  seeMoreProducts.classList.add("hidden");
  allProducts.classList.remove("opacity-0","pointer-events-none");
  if(event.target.value.length === 0){
    showAllProducts();
    return;
  }
  
    const inputValue = event.target.value;
    const currentProducts = products.filter(el =>{
      return el.title.toLowerCase().includes(inputValue.toLowerCase())
    })

    displayProducts.innerHTML = null;
    heightChangeToAuto();
    currentProducts.forEach( el => {
      displayProducts.append(createDisplayBox(el.id,el.image,el.title,el.price));
    });

    if(currentProducts.length === 0){
      displayProducts.innerHTML = `
      <div class="basis-full flex justify-center items-center h-52 bg-stone-200 text-3xl text-stone-600">
      <h1 class="max-sm:text-sm">Nothing found,try searching again.</h1>
      </div>`
    }
    
}



// listener
searchInput.addEventListener("keyup",searchInputHandler);

seeMoreProducts.addEventListener("click",seeMoreProductsHandler); 

const scrollToProducts = (amount) => {
  window.scrollTo({
    top: amount,
    behavior: "smooth",
  });
}

viewAllProducts.addEventListener("click",() => {
  if(document.body.offsetWidth < 641){
    scrollToProducts(750)
  }else if(document.body.offsetWidth >640 && document.body.offsetWidth < 1025){
  scrollToProducts(600);
  }else{
    scrollToProducts(500)
  }
})

clothesBtn[0].addEventListener("click", () => {
  scrollToProducts(500);
  btnHandler(clothesData);
} );

electronicBtn[0].addEventListener("click", () => {
  scrollToProducts(500);
  btnHandler(electronicData)
} );

furnitureBtn[0].addEventListener("click", () => {
  scrollToProducts(500);
  btnHandler(furnitureData)
} );

jewelryBtn[0].addEventListener("click", () => {
  scrollToProducts(500);
  btnHandler(jewelryData)
} );


clothesBtn[1].addEventListener("click", () => {
  scrollToProducts(750);
  btnHandler(clothesData);
  closeFixedMenu();
} );

electronicBtn[1].addEventListener("click", () => {
  scrollToProducts(750);
  btnHandler(electronicData);
  closeFixedMenu();
} );

furnitureBtn[1].addEventListener("click", () => {
  scrollToProducts(750);
  btnHandler(furnitureData);
  closeFixedMenu();
} );

jewelryBtn[1].addEventListener("click", () => {
  scrollToProducts(750);
  btnHandler(jewelryData);
  closeFixedMenu();
} );


allProducts.addEventListener("click",showAllProducts);


displayProducts.addEventListener("click",(event) => {
  const currentDisplayBox = event.target.closest(".display-box");
  const displayBoxId = currentDisplayBox.getAttribute("displayBox-id");
  if(event.target.classList.contains("add-to-cart")){
    addToCartHandler(displayBoxId);
  }
  
})








const addToCartHandler = (idd) => {

  //add 1 to cart bos btn
  const currentCartBoxItem = cartBoxList.querySelector(`[cartBoxItemId="${idd}"`)
  cartValue += 1;
  cart.innerText = cartValue;
  

  //add data to cart box
  const currentProductArr = products.filter(el => {
    return el.id == idd;
  });
  const {id,image,title,price} = currentProductArr[0];


  const existed =  [...cartBoxList.querySelectorAll(".cart-box-item")].find(el => {
    return el.getAttribute("cartBoxItemId") == idd;
  });

  if(existed){
    // cartBoxQuantity += 1;
    const quantity = currentCartBoxItem.querySelector(".cart-box-quantity").innerText;
    currentCartBoxItem.querySelector(".cart-box-quantity").innerText = parseInt(quantity) + 1;
    currentCartBoxItem.querySelector(".cart-box-price").innerText = `${(parseInt(quantity) + 1) * price} $`;
  }else{
  cartBoxList.append(createCartBoxItems(id,image,title,price));
  // cartBoxQuantity = 1;
  }

  //change total cost
  cartBoxTotalCost.innerText = [...cartBoxList.querySelectorAll(".cart-box-price")].reduce((pv,cv) => pv + parseFloat(cv.innerText),0).toFixed(2);
 
  
}





cartBoxBtn.addEventListener("click",() => {
  cartBox.classList.add("duration-500","z-50");
  cartBox.classList.replace("translate-x-full","translate-x-0");
})

cartBoxCloseBtn.addEventListener("click",() => {
  cartBox.classList.add("duration-500");
  cartBox.classList.replace("translate-x-0","translate-x-full");
})

cartBoxClearAll.addEventListener("click",() => {
  [...cartBoxList.querySelectorAll(".cart-box-item")].forEach(el => {
    el.remove();
  })
  cartBoxTotalCost.innerText = 0;
  cartValue = 0;
  cart.innerText = 0;
})

cartBoxList.addEventListener("click",(event) => {
  const currentCartBoxItem = event.target.closest(".cart-box-item");
  if(event.target.classList.contains("cart-box-del")){
    currentCartBoxItem.remove();
    //reduce cart value
    const reduceCartAmount = currentCartBoxItem.querySelector(".cart-box-quantity").innerText;
    cartValue -= parseInt(reduceCartAmount);
    cart.innerText = cartValue;
    //reduce total cost
    const price = currentCartBoxItem.querySelector(".cart-box-price").innerText;
    const currentTotalCost = cartBoxTotalCost.innerText;
    cartBoxTotalCost.innerText = (parseFloat(currentTotalCost) - parseFloat(price)).toFixed(2)
  }
})


// 30% off box making
discountProducts.forEach(el => {
  const discPrice = el.price - (el.price * 0.3);
  discountDetailsBox.append(createDisplayBox(el.id,el.image,el.title,discPrice.toFixed(2)))
})

discountDetailsBox.addEventListener("click",(event) => {
  const currentDiscountDetailsBox = event.target.closest(".display-box");
  const discountDetailsBoxId = currentDiscountDetailsBox.getAttribute("displayBox-id");
  console.log(discountDetailsBoxId);
  if(event.target.classList.contains("add-to-cart")){
    addToCartHandler(discountDetailsBoxId);
  }
  
})

discountDetailsBtn.addEventListener("click",() => {
  discountDetailsParent.classList.replace("opacity-0","opacity-100");
  discountDetailsParent.classList.replace("pointer-events-none","pointer-events-auto");
  scrollToProducts(100)
})

discountDetailsCloseBtn.addEventListener("click",() => {
  discountDetailsParent.classList.replace("opacity-100","opacity-0");
  discountDetailsParent.classList.replace("pointer-events-auto","pointer-events-none");
 
})

