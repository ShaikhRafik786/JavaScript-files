//PLANDRAOM //===NITIN====MADAM=====MIROR-TYPE Question//
// const isPlandraomCheck=(str) => {
//   const isPlandraom = str.split("").reverse("").join("");

//   if (str === isPlandraom) {
//     console.log("is palandrom");
//   } else {
//     console.log("is not palandrom");
//   }
// };
// isPlandraomCheck("madam");
// isPlandraomCheck("NITIN");
// isPlandraomCheck("sachin");

// var a = 3;
// var b = Number(3);
// var c = 3;
// console.log(a===c);
// var rk = 15;
// var sk = "30";
// console.log(rk + sk);

// const arr = [1, 2, 3, 4, 5, 6, 7, 3, 4, 5, 2];
// const arr2 = arr.filter((item, index)=> arr.indexOf(item)===index);
// console.log(arr2)
// const rk = [...new Set(arr)];
// console.log(rk.sort())

//for loop//
// for(let i=1; i<=10; i++){
//     console.log((i+"*"+ i + "=" + i*2));
// }

//closure function///
// function parent(){
//     var age = 40;
//     function child(){
//         var s = 20;
//         return console.log(age)
//     }
// child();
// }
// parent();

///if else // ternary oprator//
// if(true){
//     console.log("code is run")
// }else {
//     console.log("code is faied")
// }
//we can used tarenory operators//
// const time = 5;
// time > 4 ? console.log("if is exucuted") : console.log("else exicuted");

// const sk = 7;
// sk >  8 ? console.log("if is exucuted") : console.log("else exicuted")

// let rk = "shaikh rafik khan ";
// const sk = rk.split(" ")
// let temp;
// let temp2;
// for(let i=0; i<sk.length; i++){
//     sk[i] = sk[i].charAt(0).toUpperCase()
// }

// rk = sk.join(" ");
// // console.log(rk);

// var ages = [10,12,15,18,19,20];
// console.log(ages + "br");

// var b = ages.filter(checkAdult);
// console.log(b+"br");
// function checkAdult(age){
//     return age>=15;
// }

//////interviw Q - firstlatter capitalize /////

// const arr =  "rafik khan shaikh";
// const rk = arr.split(" ")
// for(let i=0; i< rk.length; i++){
// rk[i]=rk[i].charAt(0).toUpperCase() + rk[i].slice(1);
// console.log(rk)
// }
// var sk = rk.join(" ");
// console.log(sk)

// const rk = "salman sharuk arbaz srk khan";
// const sk = rk.split(" ");
// const arr = sk.map((e) => e.charAt(0).toUpperCase() + e.slice(1));
// const capital = arr.join(" ");
// console.log(capital);

// let obj = { name: "shaikh", age:25, city:"Nanded", edu:"Engineer"}
// obj.name="Khan",
// obj.age=55
// obj.edu="software"
// obj.city= "biloli"
// delete obj.name
// delete obj.city,
// console.log(obj);

// const arr = "shaikh rafik khan is here";
// const ss= arr.split(" ");
// for(let i=0; i< ss.length; i++){
//     ss[i] = ss[i].charAt(0).toUpperCase() + ss[i].slice(1)
// }
// const result = ss.join(" ");
// console.log(result);

// const arr = ["He1llo", "my7", "i6s", "R2afik", "iam3", "from4", "bilo5li"];

// const str = "is3 cri1stino 4the rona2ldo 5best";
// const solution = (inputString) => {
//     const arr = inputString.split(" ");
// const arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr1[i].includes(j) == true) {
//       arr1.splice(j-1, 0, arr[i]);
//     }
//   }
//   let str = arr1.join(" ")
//   let myregex  =  / [^0-9]/g;
//    let result = str.match(myregex)
   
//    console.log(result.join(""));
//    return sk.join()
// }
// }
// solution("is3 cri1stino 4the rona2ldo 5best");


// const arr = ["A","b","c","d","r","k"];
//  const arr2= arr.splice(1,2, "srk","sk","khan");
//   console.log(arr)

// const arr = ["x","y","z","s","R","k","o"];
// const arr2 = arr.slice(2,5);
// console.log(arr);

// const arr = ["DELHI", "MUMBAI", "CANADA", "DUBAi"];
// const arr2 = arr.map((city) => city.toLocaleLowerCase());
// console.log(arr2.sort());

// const animal = ["Tiger", "dog","Lion","Hourse"];
// const countlenth = animal.map((word)=> word.length);
// console.log(countlenth)

// const arr = [25,27,30,32,35,38,40];
// const ages = arr.filter((age)=> (age > 32));
// console.log(ages)

// const numbers = [20,25,30,35,37,40,50];
// const sk = numbers.reduce((num, acc)=> num+ acc, 0);
// console.log(sk); 

// const peoples = [
//     {name:"raj", age:30, city:"nanded"},
//     {name:"amol", age:35, city:"mumbai"},
//     {name:"marof", age:25, city:"banglore"},
//     {name:"meraj", age:29, city:"delhi"}
// ]
// const details = peoples.filter( person => person.age >30);
// console.log(details)

// const people = [
//     {name:"raj", age:30},
//     {name:"amol", age:35},
//     {name:"marof", age:25},
//     {name:"meraj", age:29}
// ]
// let details = people.reduce((name,person) => name +":"+person.name, "");
// console.log(details) 


const product =[
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.6, count: 400 },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 470 },
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 319 },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 400 },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 250 },
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: { rate: 2.2, count: 140 },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: { rate: 2.6, count: 235 },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: { rate: 2.9, count: 340 },
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: { rate: 3.8, count: 679 },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: { rate: 4.7, count: 130 },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: { rate: 4.5, count: 146 },
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: { rate: 3.6, count: 145 },
  },
];

// const checkSome = product.some(function (item){
//     return item.category === "men s clothing";
// });
// console.log(checkSome);

// const checkSome = product.every(function (item) {
//   return item.price > 50;
// });
// console.log(checkSome);

// const filtered = product.filter(function (elem) {
//   return elem.category === "women's clothing";
// });
// console.log(filtered);

// const filtered = product.filter(function (elem) {
//   return elem.price > 50
// });
// console.log(filtered);

// const filtered = product.filter(function(elem){
//   return elem.category === "men's clothing";
// });
// console.log(filtered);

// const filtered = product.filter(function (elem) {
//   return elem.rating.rate > 4;
// });
// console.log(filtered);

// const filtered = product.filter(function (elem) {
//   return elem.rating.rate > 4 && elem.category ==="women's clothing";
// });
// console.log(filtered);


// const filtered = product.filter(function (elem) {
//   return ( elem.category === "men's clothing" || elem.category === "women's clothing"
//   );
// });
// console.log(filtered);

// const mapped = product.map(function(elem){
// elem.price = elem.price.toFixed(0);
// return elem;
// });
// console.log(mapped)

// const mapped = product.map(function (elem) {
//   if(elem.category ==="jewelery") {elem.price = Number(elem.price.toFixed(0));
//   }
//   return elem;
// });
// console.log(mapped);

// const mapped = product.map(function (elem) {
//   elem.rating.rate = elem.rating.rate *2 ;
//   return elem;
// })
// console.log(mapped);

// const person = {fname: "rafik"};
// person.fname= "Sakib";
// console.log(person)

// const mapped = product.map(function (elem) {
//   elem.rating.newERate = elem.rating.rate * 2;
//   return elem;
// });
// console.log(mapped);

// const mapped = product.map(function(elem, index) {
//   elem.rating.newERate = index;
//   return elem;
// });
// console.log(mapped);

// const foreached = product.forEach(function(item){
//   item.price = item.price.toPrecision(3);
//   return  console.log(item)
// });
// console.log(foreached);

// const foreached = product.forEach(function (item) {
//   const precisionaBy= item.price.toString().split(".");
//   item.price = item.price.toPrecision(precisionaBy[0].length);
//   return console.log(item);
// });
// // console.log(foreached);

// const foreached = product.forEach(function (item) {
//   const spilted= item.price.toString().split(".");// ["999", "99"]
//   const prelength = spilted[0].length;//3
//  const newLength = String(Number(spilted[0])+1); //10
//  const secondchar = spilted[1];//85

//  if(prelength !== newLength.length && secondchar[0] >=5){  //(3 !==4 && 9 > 5)
//   item.price = item.price.toPrecision(prelength +1);
//  }else {
//   item.price = item.price.toPrecision(prelength);
// }
// return console.log(item)
// });
// console.log(foreached)

// const foreached = product.forEach(function (item) {
//   item.price = Number(item.price.toFixed(0));
//   item.price = Math.round(item.price);
//   return console.log(item);

  // item.price = item.price.toPrecision(toPrecisionBy[0].length);
  // return console.log(secondchar[0]))
// });
// console.log(foreached);


// const rk = ["A","B", "C", "a","b", "c", "d", 1,5,3,4,2]
// const sorted = rk.sort();
// console.log(sorted)
// const arr = [40, 30, 50, 10, 20];
// const newarr = ["Apple", "Orange", "mango", "Banana", "APple", "grepss", "banana"];
// const sorted = newarr.sort((one, two)  => 
// one.price > two.price ? -1: 1
// )
// console.log(sorted)
 
// const sorted = product.sort((one, two)  => 
// one.title.toLowerCase() > two.title.toLowerCase() ? -1:1
// );
// console.log(sorted)

// const sk = [10,20,30,40,50];
// const reduced = sk.reduce(function(acc, curr){
//   let arr = curr *2
//   return acc + arr;
// }, 0);
// console.log(reduced);
