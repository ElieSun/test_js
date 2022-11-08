// // let name = "Oleg"
// // console.log(name)


// function makeMessage (name, price) {
//     // Change code below this line
//      const message = `You picked ${name}, price per item is ${price} credits`;
//     // Change code above this line
//     return message;
//   };
  

// let result = makeMessage("Scaener", 5150);

// console.log(result);

// // Математические операторы 

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     // Change code below this line
//     const totalPrice = orderedQuantity * pricePerItem;
  
//     // Change code above this line
//     return totalPrice;
//   };

//   result = calculateTotalPrice(5, 100);
//   console.log(result);

// //   Заказ продукта
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     // Change code below this line
//     const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//     // Change code above this line
//     return message;
//   };
//   result = makeOrderMessage (2, 100, 50);
//   console.log(result);

//   result = makeOrderMessage (4, 300, 100);
//   console.log(result);

//   result = makeOrderMessage (10, 70, 200);
//   console.log(result);


// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//   if (available >= ordered) {
//     message = `Order is processed, our manager will contact you.`
//   }
//     else {
//       message = `Not enough goods in stock!`
//     }
  
  
//     // Change code above this line
//     return message;
//   }

//   result = checkStorage(100, 150) // "Order is processed, our manager will contact you."
//  console.log(result);

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//     const totalPrice = pricePerDroid * orderedQuantity; 
    
//   if (totalPrice <= customerCredits) {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//   }
//   else {
//     message = `Insufficient funds!`;
//   }
//     // Change code above this line
//     return message;
//   }
//   result = makeTransaction(3000, 5, 23000)
//   console.log(result)

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;
  
//     if (password === null) { // Change this line
//       message =  'Canceled by user!';
//     } else if (password === 'jqueryismyjam') { // Change this line
//       message = 'Welcome!';
//     } else {
//       message = 'Access denied, wrong password!';
//     }
  
//     return message;
//   }
 
//   result = checkPassword('2222');
//   console.log(result);

//   result = checkPassword(null);
//   console.log(result);

//   result = checkPassword('jqueryismyjam');
//   console.log(result);

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//     if (ordered === 0) {
//         message = `There are no products in the order!`;
//     } else if (ordered > available) {
//         message = `Your order is too large, there are not enough items in stock!`;
//     } else {
//         message = `The order is accepted, our manager will contact you.`;
//     }
//     // Change code above this line
//     return message;
// }


  
//   result = checkStorage(100, 50);
//   console.log(result);


//   result = checkStorage(100, 130);
//   console.log(result);


//   result = checkStorage(70, 0);
//   console.log(result);


//   result = checkStorage(200, 20);
//   console.log(result);


//   result = checkStorage(200, 250);
//   console.log(result);


//   result = checkStorage(150, 0);
//   console.log(result);

// function isNumberInRange(start, end, number) {
//     const isInRange = number >= start && number <= end; // Change this line
  
//     return isInRange;
//   }

//   result = isNumberInRange(10, 30, 17);
//   console.log(result);

//   result = isNumberInRange(10, 30, 5);
//   console.log(result);

//   result = isNumberInRange(10, 30, 24);
//   console.log(result);

//   result = isNumberInRange(10, 30, 76);
//   console.log(result);

// function checkIfCanAccessContent(subType) {
//     const canAccessContent = subType >= "pro" || subType >= "vip"; // Change this line
//     return canAccessContent;
// }
//   result = checkIfCanAccessContent("pro");
//   console.log(result);

//   result = checkIfCanAccessContent("starter");
//   console.log(result);

//   result = checkIfCanAccessContent("vip");
//   console.log(result);

//   result = checkIfCanAccessContent("free");
//   console.log(result);

// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange; // Change this line
//     return isNotInRange;
// }

// result = isNumberNotInRange(10, 30, 17) // false
// console.log(result)
// result = isNumberNotInRange(10, 30, 5) // true
// console.log(result)
// result = isNumberNotInRange(20, 50, 24) // false
// console.log(result)
// result = isNumberNotInRange(20, 50, 76) // true
// console.log(result)

// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
//     // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT
//   }
//   else if (totalSpent >=20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT
// }
//     else if (totalSpent >= 5000 && totalSpent < 20000) {
//         discount = BRONZE_DISCOUNT
//     }
//     else if (totalSpent < 5000) {
//         discount = BASE_DISCOUNT
//     }
//     // Change code above this line
//     return discount;
// }
  
// result = getDiscount(137000) // 0.1
// console.log(result);
// result = getDiscount(46900) // 0.05
// console.log(result);
// result = getDiscount(8250) // 0.02
// console.log(result);
// result = getDiscount(1300) // 0
// console.log(result);
// result = getDiscount(5000) // 0.02
// console.log(result);
// result = getDiscount(20000) // 0.05
// console.log(result);
// result = getDiscount(50000) // 0.1
// console.log(result);

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//     message = ordered > available ? `Not enough goods in stock!` : `The order is accepted, our manager will contact you`;
//     // Change code above this line
//     return message;
//  }
  
// result = checkStorage(100, 50) // "The order is accepted, our manager will contact you"
// console.log(result);
// result = checkStorage(100, 130) // "Not enough goods in stock!"
// console.log(result);
// result = checkStorage(200, 20) // "The order is accepted, our manager will contact you"
// console.log(result);
// result = checkStorage(200, 150) // "The order is accepted, our manager will contact you"
// console.log(result);
// result = checkStorage(150, 180) // "Not enough goods in stock!"
// console.log(result);

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
//   message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//     // Change code above this line
//     return message;
//   }
  
// result = checkPassword("jqueryismyjam") // "Access is allowed"
// console.log(result);
// result = checkPassword("angul4r1sl1f3") // "Access denied, wrong password!"
// console.log(result);
// result = checkPassword("r3actsux") // "Access denied, wrong password!"
// console.log(result);

// function getSubscriptionPrice(type) {
//     let price;
//     // Change code below this line
  
//    switch (type) { // Change this line
//       case "starter" : // Change this line
//         price = 0; // Change this line
//         break;
  
//       case "professional" : // Change this line
//         price = 20; // Change this line
//         break;
  
//       case "organization": // Change this line
//         price = 50; // Change this line
//         break;
//     }
  
//     // Change code above this line
//     return price;
//   }


// result = getSubscriptionPrice("professional") // 20
// console.log(result);

// result = getSubscriptionPrice("organization") // 50
// console.log(result);

// result = getSubscriptionPrice("starter") // 0
// console.log(result);

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
//     switch (password) {
//     case null:
//         message = "Canceled by user!";
//         break;
//     case ADMIN_PASSWORD:
//     message = "Welcome!";
//         break;
//         default:
//         message = "Access denied, wrong password!";
//          // Change code above this line
//     }
//     return message;
    
// }
// result = checkPassword("mangohackzor") // "Access denied, wrong password!"
// console.log(result);
// result = checkPassword(null) // "Canceled by user!"
// console.log(result);
// result = checkPassword("polyhax") // "Access denied, wrong password!"
// console.log(result);
// result = checkPassword("jqueryismyjam") // "Welcome!"
// console.log(result);

// function getShippingCost(country) {
//     let message;
//     // Change code below this line
//     switch (country) {
//         case "China":
//             message = "Shipping to China will cost 100 credits";
//             break;
//         case "Chile":
//             message = "Shipping to Chile will cost 250 credits";
//             break;
//         case "Australia":
//             message = "Shipping to Auatralia will cost 170 credits";
//             break;
//         case "Jamaica":
//             message = "Shipping to Jamaica will cost 120 credits";
//             break;
//         default:
//             message = "Sorry, there is no delivery to your country"
//     }
//     // Change code above this line
//     return message;
// }

// result = getShippingCost("Australia") // "Shipping to Australia will cost 170 credits"
// console.log(result);
// result = getShippingCost("Germany") // "Sorry, there is no delivery to your country"
// console.log(result);
// result = getShippingCost("China") // "Shipping to China will cost 100 credits"
// console.log(result);
// result = getShippingCost("Chile") // "Shipping to Chile will cost 250 credits"
// console.log(result);
// result = getShippingCost("Jamaica") // "Shipping to Jamaica will cost 120 credits"
// console.log(result);
// result = getShippingCost("Sweden") // "Sorry, there is no delivery to your country"
// console.log(result);

// function getNameLength(name) {
//     const message = `Name ${name} is ${name.length} characters long`; // Change this line

//     return message;
// }

// result = getNameLength("Poly") // "Name Poly is 4 characters long"
// console.log(result);
// result = getNameLength("Harambe") // "Name Harambe is 6 characters long"
// console.log(result);
// result = getNameLength("Billy") // "Name Billy is 5 characters long"
// console.log(result);
// result = getNameLength("Joe") // "Name Joe is 3 characters long"
// console.log(result);

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic;
// console.log(courseTopicLength.length);
// const firstElement = courseTopic;
// console.log(firstElement[0]);
// const lastElement = courseTopic;
// console.log(lastElement[20]);

// // Change code above this line

// function getSubstring(string, length) {
//     const substring = string.slice(0, length); // Change this line
  
//     return substring;
//   }
// result = getSubstring("Hello world", 3) // "Hel"
// console.log(result);
// result = getSubstring("Hello world", 6) // "Hello"
// console.log(result);
// result = getSubstring("Hello world", 8) // "Hello wo"
// console.log(result);
// result = getSubstring("Hello world", 11) // "Hello world"
// console.log(result);
// result = getSubstring("Hello world", 0) // ""
// console.log(result);

// function formatMessage(message, maxLength) {
//     let result;
//     // Change code below this line
//     result = message.slice(0, maxLength);
//     if (message.length > maxLength) {
//         result = `${result}...`
//     }
//     // Change code above this line
//     return result;
//   }
  
// result = formatMessage("Curabitur ligula sapien", 16) // "Curabitur ligula..."
// console.log(result);
// result = formatMessage("Curabitur ligula sapien", 23) // "Curabitur ligula sapien"
// console.log(result);
// result = formatMessage("Vestibulum facilisis purus nec", 20) // "Vestibulum facilisis..."
// console.log(result);
// result = formatMessage("Vestibulum facilisis purus nec", 30) // "Vestibulum facilisis purus nec"
// console.log(result);
// result = formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) // "Nunc sed turpis..."
// console.log(result);
// result = formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) // "Nunc sed turpis a felis in nunc fringilla"
// console.log(result);

// function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase(); // Change this line
  
//     return normalizedInput;
//   }

// result = normalizeInput("Hello world") // "hello world"
// console.log(result)
// result = normalizeInput("This ISN'T SpaM") // "this isn't spam"
// console.log(result)
// result = normalizeInput("Big SALE") // "big sale"
// console.log(result)


// function checkForName(fullName, name) {
//     const result = fullName.includes(name); // Change this line
//      return result;
//    }

// result = checkForName("Egor Kolbasov", "Egor") // true
// console.log(result)
// result = checkForName("Egor Kolbasov", "egor") // false
// console.log(result)
// result = checkForName("Egor Kolbasov", "egOr") // false
// console.log(result)
// result = checkForName("Egor Kolbasov", "Zhenya") // false
// console.log(result)
// result = checkForName("Vadim Nekrasov", "Vadim") // true
// console.log(result)
// result = checkForName("Vadim Nekrasov", "vadim") // false
// console.log(result)
// result = checkForName("Vadim Nekrasov", "Dima") // false
// console.log(result)


// function checkForSpam(message) {
//     let result;
//     // Change code below this line
//     message = message.toLowerCase();

//     if (message.includes("spam")) {
//         result = true;
//     } else if (message.includes("sale")) {
//         result = true
//     } else {
//         result = false;
//     }
  
//     // Change code above this line
//     return result;
//   }

  
// result = checkForSpam("JavaScript weekly newsletter") // false
// console.log(result)
// result = checkForSpam("Get best sale offers now!") // true
// console.log(result)
// result = checkForSpam("Amazing SalE, only tonight!") // true
// console.log(result)
// result = checkForSpam("Trust me, this is not a spam message") // true
// console.log(result)
// result = checkForSpam("Get rid of sPaM emails. Our book in on sale!") // true
// console.log(result)
// result = checkForSpam("[SPAM] How to earn fast money?") // true
// console.log(result)

// let some_info = [];

// // let some_info_length = some_info.length
// i = 0;
// let some_info_length;
// do {
//     result = some_info.shift();
//     console.log(result, 1)
//     some_info_length = some_info.length
// } while (some_info_length);

// function checkAge(age) {
//     if (age>=18) { // Change this line
//       return "You are an adult";
//     }
  
//     return "You are a minor";
//   }

// result = checkAge(20) // "You are an adult"
// console.log(result);
// result = checkAge(8) // "You are a minor"
// console.log(result);
// result = checkAge(14) // "You are a minor"
// console.log(result);
// result = checkAge(38) // "You are an adult"
// console.log(result);

// // В теле функции есть только одна инструкция if
// // В теле функции нет инструкции else или else if

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line
//     if (password === ADMIN_PASSWORD) {
//       return "Welcome!";
//     } 
//       return "Access denied, wrong password!";
//     }
//     // Change code above this line
  
// result = checkPassword("mangohackzor") // "Access denied, wrong password!"
// console.log(result)
// result = checkPassword("polyhax") // "Access denied, wrong password!"
// console.log(result)
// result = checkPassword("jqueryismyjam") // "Welcome!"
// console.log(result)

// function checkStorage(available, ordered) {
//     // Change code below this line
  
//     if (ordered === 0) {
//       return "Your order is empty!";
//     }
//     if (ordered > available) {
//         return"Your order is too large, not enough goods in stock!"; 
//     }
//     return "The order is accepted, our manager will contact you";
// }
//     // Change code above this line


// result = checkStorage(100, 50) // "The order is accepted, our manager will contact you"
// console.log(result)
// result = checkStorage(100, 130) // "Your order is too large, not enough goods in stock!"
// console.log(result)
// result = checkStorage(70, 0) // "Your order is empty!"
// console.log(result)
// result = checkStorage(200, 20) // "The order is accepted, our manager will contact you"
// console.log(result)
// result = checkStorage(200, 250) // "Your order is too large, not enough goods in stock!"
// console.log(result)
// result = checkStorage(150, 0) // "Your order is empty!"
// console.log(result)

// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// console.log(fruits.shift());
// console.log(fruits.shift());
// let length = fruits.length - 1;
// const lastElement = fruits[length];
// console.log(lastElement) // "orange"
// secondElement[1];
// lastElement[3];

// console.log(firstElement) // "apple"
// console.log(secondElement) // "plum"
// console.log(lastElement) // "orange"
// Change code below this line

// // Значение переменной firstElement это строка "apple"
// // Объявлена переменная secondElement
// // Значение переменной secondElement это строка "plum"
// // Объявлена переменная lastElement
// // Значение переменной lastElement это строка "orange"

// const fruits = ["apple", "plum", "pear", "orange"];
// // let tmp = fruits[1]; // plum
// let tmp_1 = fruits[1]; // plum
// let tmp_2 = fruits[3]; // orange
// fruits[1] = tmp_2;
// fruits[3] = tmp_1;

// // fruits[1] = fruits[3];
// // fruits[3] = tmp;
// console.log(fruits);
// Write your code under this line

// "apple", "peach", "pear", "banana"

// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// console.log(fruits.length);

// // Change code below this line

// const fruits = ["apple", "peach", "pear", "banana"];
// // const lastElementIndex = fruits.lenght - 1;
// // fruits[lastElementIndex];
// // const lastElement = fruits[3];

// // console.log(fruits.length);die
// const lastElementIndex = fruits.length - 1;
// // console.log(fruits[lastElementIndex]);die
// const lastElement = fruits[lastElementIndex];

// console.log(lastElement);


// Change code below this line

// Объявлена переменная lastElementIndex
// Значение переменной lastElementIndex это число 3
// Объявлена переменная lastElement
// Значение переменной lastElement это строка "banana"


// function getExtremeElements(array) {
//     // Change code below this line
//     let test = [];
//     const lastIndex = array.length - 1;
//     test[0] = array[0];
//     test[1] = array[lastIndex];
//     return test;
//     // Change code above this line
// }
// result = getExtremeElements([1, 2, 3, 4, 5]) // [1, 5]
// console.log(result)
// result = getExtremeElements(["Earth", "Mars", "Venus"]) // ["Earth", "Venus"]
// console.log(result)
// result = getExtremeElements(["apple", "peach", "pear", "banana"]) // ["apple", "banana"]
// console.log(result)

// function splitMessage(message, delimeter) {
//     let words;
//     // Change code below this line
//     words = message.split(delimeter);
//     // Change code above this line
//     return words;
// }

// result = splitMessage("Mango hurries to the train", " ") // ["Mango", "hurries", "to", "the", "train"]
// console.log(result)
// result = splitMessage("Mango", "") // ["M", "a", "n", "g", "o"]
// console.log(result)
// result = splitMessage("best_for_week", "_") // ["best", "for", "week"]
// console.log(result)

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//     let calculate;
//     calculate = message.split(" ");
//     result = calculate.length;
//     const sum = calculate.length * pricePerWord;
//     return sum;
//     // Change code above this line
// }

// result = calculateEngravingPrice("JavaScript is in my blood", 10) // 50
// console.log(result)
// result = calculateEngravingPrice("JavaScript is in my blood", 20) // 100
// console.log(result)
// result = calculateEngravingPrice("Web-development is creative work", 40) // 160
// console.log(result)
// result = calculateEngravingPrice("Web-development is creative work", 20) // 80
// console.log(result)


// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//     let words = message.split(" ");
//     const wordsLength = words.length;
//     const price = wordsLength * pricePerWord;
//     return price;
//     // Change code above this line
// }

// result = calculateEngravingPrice("JavaScript is in my blood", 10) // 50
// console.log(result)
// result = calculateEngravingPrice("JavaScript is in my blood", 20) // 100
// console.log(result)
// result = calculateEngravingPrice("Web-development is creative work", 40) // 160
// console.log(result)
// result = calculateEngravingPrice("Web-development is creative work", 20) // 80
// console.log(result)

// function makeStringFromArray(array, delimiter) {
//     let string;
//     // Change code below this line
// string = array.join(delimiter);
//     // Change code above this line
//     return string;
// }

// result = makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") // "Mango hurries to the train"
// console.log(result)
// result = makeStringFromArray(["M", "a", "n", "g", "o"], "") // "Mango"
// console.log(result)
// result = makeStringFromArray(["top", "picks", "for", "you"], "_") // "top_picks_for_you"
// console.log(result)

// function slugify(title) {
//     // Change code below this line
//     result = slugify.slug(title);
//     return result;
//     // Change code above this line
// }

// result = slugify("Arrays for begginers") // "arrays-for-begginers"
// console.log(result)
// result = slugify("English for developer") // "english-for-developer"
// console.log(result)
// result = slugify("Ten secrets of JavaScript") // "ten-secrets-of-javascript"
// console.log(result)
// result = slugify("How to become a JUNIOR developer in TWO WEEKS") // "how-to-become-a-junior-developer-in-two-weeks"
// console.log(result)

// function slugify(title) {
//     // Change code below this line
//     let slug = title.toLowerCase();
//     slug = slug.split(" ");
//     slug = slug.join("-");
//     return slug;
//     // Change code above this line
// }

// result = slugify("Arrays for begginers") // "arrays-for-begginers"
// console.log(result)
// result = slugify("English for developer") // "english-for-developer"
// console.log(result)
// result = slugify("Ten secrets of JavaScript") // "ten-secrets-of-javascript"
// console.log(result)
// result = slugify("How to become a JUNIOR developer in TWO WEEKS") // "how-to-become-a-junior-developer-in-two-weeks"
// console.log(result)

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2);

// result =  fruits //  ["apple", "plum", "pear", "orange", "banana"]
// console.log(result)

// result =  firstTwoEls //  ["apple", "plum"]
// console.log(result)

// result =  nonExtremeEls //  ["plum", "pear", "orange"]
// console.log(result)

// result =  lastThreeEls //  ["pear", "orange", "banana"]
// console.log(result)

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(allClients);

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     let newArray;
//     newArray = firstArray.concat(secondArray);
//     newArray = newArray.slice(0, maxLength);
//     return newArray;

//     // Change code above this line
// }

// result = makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) // ["Mango", "Poly", "Ajax"]
// console.log(result)
// result = makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(result)
// result = makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) // ["Mango", "Ajax", "Chelsea"]
// console.log(result)
// result = makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) // ["Earth", "Jupiter"]
// console.log(result)
// result = makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(result)
// result = makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) // []
// console.log(result)

// /Напиши функцию findSmallerNumber(numbers)
// //которая ищет самое маленькое число  // 

// //Добавь проверку что функция получает массив

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// const findSmallerNumber = (number) => {
//     return  Array.isArray(number) ? Math.min(...number) : 'not Array';
// }
//     // for (let i = 0; i < number.length; i += 1) {
//     //     if (number[i] < smallerNumber) { 
//     //                 smallerNumber = number[i];
//     // }
//     // }
//     // return smallerNumber;


// const result = findSmallerNumber(numbers)
// console.log(result)



  


//   i += 10

//   i = i + 10

//   i = i * 20

//   i *= 20


//   i = 0
// //   i += 1 
// //   i = i + 1
// //   i++
// //   ++i
// for 
// while 

//   console.log(i++);

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i +=1 ) { // Change this line
//   console.log(i);
// }

// function calculateTotal(number) {
//     // Change code below this line
//     let total = 0;
//     for (let i = 1; i <= number; i++) {
//         total += i;
//     }
//     return total;
//      // Change code above this line
// }

// result = calculateTotal(1) // 1
// console.log(result)
// result = calculateTotal(3) // 6
// console.log(result)
// result = calculateTotal(7) // 28
// console.log(result)
// result = calculateTotal(18) // 171
// console.log(result)
// result = calculateTotal(24) // 300
// console.log(result)
// result = calculateTotal()  // со случайным число // возвращает правильное значение
// console.log(result)

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i +=1 ) { // Change this line
//   const fruit = fruits[i]; // Change this line
//     console.log(fruit);
// }

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//     for(let i=0; i < order.length; i+=1){
//         total += order[i];
//     }
//     // Change code above this line
//     return total;
// }

// result = calculateTotalPrice([12, 85, 37, 4]) // 138
// console.log(result)
// result = calculateTotalPrice([164, 48, 291]) // 503
// console.log(result)
// result = calculateTotalPrice([412, 371, 94, 63, 176]) // 1116
// console.log(result)


//задача - узнать самое длинное слово

// function findLongestWord(string) {
//     //  Change code below this line
//     let result = '';
//     const words = string.split(' ');
//     for (let i = 0; i < words.length; i++){
//         if (result.length < words[i].length) {
//             result = words[i];
//         }
//     }
//     return result;
//     // Change code above this line
// }


// result = findLongestWord("The quick brown fox jumped over the lazy dog") // jumped
// console.log(result)
// result = findLongestWord("Google do a roll") // Google
// console.log(result)
// result = findLongestWord("May the force be with you") // force
// console.log(result)

//Метод push()

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line
//     for (let i = min; i <= max; i++)
//         numbers.push(i);
//     // Change code above this line
//     return numbers;
// }

// result = createArrayOfNumbers(1, 3) // [1, 2, 3]
// console.log(result)
// result = createArrayOfNumbers(14, 17) // [14, 15, 16, 17]
// console.log(result)
// result = createArrayOfNumbers(29, 34) // [29, 30, 31, 32, 33, 34]
// console.log(result)


// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) 
// и возвращает//, в котором будут только те элементы массива numbers, которые больше 
// console.log(result);
// чем значение параметра value (число).


// function filterArray(numbers, value) {
//     // Change code below this line
//     let result = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > value)
//             result.push(numbers[i]);
    
//     }
//     return result;
    
//    // Change code above this line
// }

// result = filterArray([1, 2, 3, 4, 5], 3) // [4, 5]
// console.log(result)
// result = filterArray([1, 2, 3, 4, 5], 4) // [5]
// console.log(result)
// result = filterArray([1, 2, 3, 4, 5], 5) // []
// console.log(result)
// result = filterArray([12, 24, 8, 41, 76], 38) // [41, 76]
// console.log(result)
// result = filterArray([12, 24, 8, 41, 76], 20) // [24, 41, 76]
// console.log(result)

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
//     return fruits.includes(fruit); // Change this line
// }
//   result = checkFruit("plum") // true
//   console.log(result)
//   result = checkFruit("mandarin") // false
//   console.log(result)
//   result = checkFruit("pear") // true
//   console.log(result)
//   result = checkFruit("Pear") // false
//   console.log(result)
//   result = checkFruit("apple") // true
//   console.log(result)


// function getCommonElements(array1, array2) {
//     // Change code below this line
//     const result = [];
//     for (let i = 0; i < array1.length; i++) {
//         if (array2.includes(array1[i])) {
//             result.push(array1[i])
//         }
            
//     }
//     return result;
//    // Change code above this line

// }

// ЦИКЛ for ... of

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line

//     for (const varible of order) {
//         total = total + varible;
//     }

//     // Change code above this line
//     return total;
// }

// result= calculateTotalPrice([12, 85, 37, 4]) // 138
// console.log(result)
// result= calculateTotalPrice([164, 48, 291]) // 503
// console.log(result)
// result= calculateTotalPrice([412, 371, 94, 63, 176]) // 1116
// console.log(result)
// result= calculateTotalPrice([]) // 0
// console.log(result)

// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];
  
//     for (let varible of numbers) {
//       const number = varible;
  
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }
  
//     return filteredNumbers;
//     // Change code above this line
//   }
  
// result = filterArray([1, 2, 3, 4, 5], 3) // [4, 5]
// console.log(result)
// result = filterArray([1, 2, 3, 4, 5], 4) // [5]
// console.log(result)
// result = filterArray([1, 2, 3, 4, 5], 5) // []
// console.log(result)
// result = filterArray([12, 24, 8, 41, 76], 38) // [41, 76]
// console.log(result)
// result = filterArray([12, 24, 8, 41, 76], 20) // [24, 41, 76]
// console.log(result)

// ЧЕТНОЕ И НЕ ЧЕТНОЕ

// function getEvenNumbers(start, end) {
//     // Change code below this line
// const result = [];
//     for (let i = start; i <= end; i++) {
//         if (i % 2 === 0) {
//             result.push(i)
//         }
//     }
//     return result;
//      // Change code above this line
// }

// result = getEvenNumbers(2, 5) // [2, 4]
// console.log(result)
// result = getEvenNumbers(3, 11) // [4, 6, 8, 10]
// console.log(result)
// result = getEvenNumbers(6, 12) // [6, 8, 10, 12]
// console.log(result)
// result = getEvenNumbers(8, 8) // [8]
// console.log(result)
// result = getEvenNumbers(7, 7) // []
// console.log(result)

// function includes(array, value) {
//     // Change code below this line
//     for ( let varible of array) {
//         if (varible === value)
//         return true;
//     }
//     return false;
//     // Change code above this line
//   }
  
//   result = includes([1, 2, 3, 4, 5], 3) // true
//   console.log(result)
//   result = includes([1, 2, 3, 4, 5], 17) // false
//   console.log(result)
//   result = includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") // true
//   console.log(result)
//   result = includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") // false
//   console.log(result)
//   result = includes(["apple", "plum", "pear", "orange"], "plum") // true
//   console.log(result)
//   result = includes(["apple", "plum", "pear", "orange"], "kiwi") // false
//   console.log(result)

// МОДУЛЬ 3 - ОБЪЕКТЫ
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     }
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   // Change code below this line
//   const aptRating = apartment.rating;
//   console.log(aptRating);
//   const aptDescr = apartment.descr;
//   console.log(aptDescr);
//   const aptPrice = apartment.price;
//   console.log(aptPrice);
//   const aptTags = apartment.tags;
//   console.log(aptTags);
//   // Change code above this line
  
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

//   // Change code below this line
// const ownerName = apartment.owner.name;
//     console.log(ownerName);
// const ownerPhone = apartment.owner.phone;
//     console.log(ownerPhone);
// const ownerEmail = apartment.owner.email;
//     console.log(ownerEmail);
// const numberOfTags = apartment.tags.length;
//     console.log(numberOfTags);
// const firstTag = apartment.tags[0];
//     console.log(firstTag);
// const lastTag = apartment.tags[2];
//     console.log(lastTag);
//   // Change code above this line

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };
  
//   // Change code below this line
  
//   const aptRating = apartment.rating;
//   console.log(aptRating);
//   const propKey = "descr";
//   const aptDescr = apartment[propKey];
//   console.log(aptDescr);
//   const aptPrice = apartment.price;
//   console.log(aptPrice);
//   const aptTags = apartment["tags"];
//   console.log(aptTags);
//   // Change code above this line
  
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
//   apartment.price = 5000;
//   console.log(apartment.price);
//   apartment.rating = 4.7;
//   console.log(apartment.rating);
//   apartment.name = "Henry Sibola";
//   console.log(apartment.name);
//   apartment.tags = ["premium", "promoted", "top", "trusted"];
//   console.log(apartment.tags);
    // Change code below this line
  
//  apartment это объект
//  свойства price это число 5000
//  свойства rating это число 4.7
//  свойства name это строка "Henry Sibola"
//  свойства tags это массив ["premium", "promoted", "top", "trusted"]

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   // Change code below this line
//   apartment.area = 60;
//   apartment.rooms = 3;
//   apartment.location = {};
//   apartment.location.country = "Jamaica";
//   apartment.location.city = "Kingston";

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//     // Change code below this line
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam",
//     // Change code above this line
// };
// console.log(credentials.email);
// console.log(credentials.password);

// for...in

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   // Change code below this line
//   for (key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
//   };
//   console.log(keys);
//     console.log(values);

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }

//   // Change code above this line
// }


// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//     for (key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount++;
//         }
//     }
//     // Change code above this line
//     return propCount;
// }

//  countProps({}) возвращает 0
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// Функция подсчитывает только собственные свойства объекта

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     };
//     const values = [];
//   // Change code below this line
//     const keys = Object.keys(apartment);
//     for (const key in keys) {
//         values.push(apartment[key]);
//     }


//   Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ["descr", "rating", "price"].
// Значение переменной keys получено с помощью метода Object.keys().
// Объявлена переменная values.
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].
// Значение переменной values получено с помощью цикла for...of.

// function countProps(object) {
    

//     // Change code below this line
//     let propCount = 0;
  
//     const keys = Object.keys(object)
//     propCount += keys.length;
  
//     return propCount;
//     // Change code above this line
//   }
  
// // result = countProps(object)
// // console.log(result);

// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);

// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;


// result = countProps({}) // 0
// console.log(result);
// result = countProps({ name: "Mango", age: 2 }) // 2
// console.log(result);
// result = countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) // 3
// console.log(result);

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   // Change code below this line

//   const keys = Object.keys(apartment);

//   const values = Object.values(apartment);

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
//     result = Object.values(salaries);
//     for (let salary of result) {
//         totalSalary += salary;
//     }
    
//     // Change code above this line
//     return totalSalary;
// }


// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//   }

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
//     // Change code below this line

//         for (const product of products) {
//             if ( productName === product.name ) {
//                 return product.price;   
//             }
//         }
//     return null;
//     // Change code above this line
// }


// function getAllPropValues(propName) {
//     // Change code below this line
//       const products = [
//         { name: "Radar", price: 1300, quantity: 4 },
//         { name: "Scanner", price: 2700, quantity: 3 },
//         { name: "Droid", price: 400, quantity: 7 },
//         { name: "Grip", price: 1200, quantity: 9 },
//     ];
    
//     let result = [];
//       for (const product of products) {
//           if (product.hasOwnProperty(propName)) {
//               result.push(product[propName]);
//           }
//       }
//       return result;
  
  
//     // Change code above this line
//   }


// result =  getAllPropValues("name") // ["Radar", "Scanner", "Droid", "Grip"]
// console.log(result);
// result =  getAllPropValues("quantity") // [4, 3, 7, 9]
// console.log(result);
// result =  getAllPropValues("price") // [1300, 2700, 400, 1200]
// console.log(result);
// result =  getAllPropValues("category") // []
// console.log(result);

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//     let result = 0;
//     for (const product of products){
//         if (productName === product.name){
//             result = product.price * product.quantity;
//         }
//     }
//     return result;
//     // Пиши код выше этой строки
// }

// result = calculateTotalPrice("Blaster") // 0
// console.log(result);
// result = calculateTotalPrice("Radar") // 5200
// console.log(result);
// result = calculateTotalPrice("Droid") // 2800
// console.log(result);
// result = calculateTotalPrice("Grip") // 10800
// console.log(result);
// result = calculateTotalPrice("Scanner") // 8100
// console.log(result);


// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, thirdGroupScores];
// console.log(allScores);
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(`Score: ${bestScore}`); console.log(`Best Score: ${worstScore}`);


// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
    // Change code below this line
    // let task = {
    //     text: null,
    //     completed: false,
    //     category: "",
    //     priority: "",


    // }; 

// !!!!
// HARD

//     let task = {completed: completed, category: category, priority: priority};
//     // const task = {
//     //     text: '',
//     //     category: category,
//     //     priority: priority,
//     //     completed: completed,
//     // };
//     // // console.log(task);die;
//     // const task = {};

//     for (const key in data) {
//         if (data.hasOwnProperty(key)) {
//             task[key] = data[key];
//         }
//     }
//     return task;
//     // console.log(task);

//     // Change code above this line
// };


// result =  makeTask({}) // { category: "General", priority: "Normal", completed: false }
// console.log(result);
// result =  makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) // { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// console.log(result);
// result =  makeTask({ category: "Finance", text: "Take interest" }) // { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// console.log(result);
// result =  makeTask({ priority: "Low", text: "Choose shampoo" }) // { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// console.log(result);
// result =  makeTask({ text: "Buy bread" }) // { category: "General", priority: "Normal", text: "Buy bread", completed: false }
// console.log(result);



// Change code below this line
// function add(...args) {
//     let result = 0;
//     for (let arg of args) {
//         result += arg;
//     }
//         return result;
//     // Change code above this line
// }


// result =  add(15, 27) // 42
// console.log(result);
// result =  add(12, 4, 11, 48) // 75
// console.log(result);
// result =  add(32, 6, 13, 19, 8) // 78
// console.log(result);
// result =  add(74, 11, 62, 46, 12, 36) // 241
// console.log(result);


// Change code below this line
// function findMatches(arr, ...args) {
//     const matches = []; // Don't change this line
//     for (let arg of args) {
//       if (arr.includes(arg))
//         matches.push(arg)
//     }
//     // Change code above this line
//     return matches;
//   }

  
//   result = findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) // [1, 2]
//   console.log(result);
//   result = findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) // [17, 89, 2]
//   console.log(result);
//   result = findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) // [24, 9, 41]
//   console.log(result);
//   result = findMatches([63, 11, 8, 29], 4, 7, 16) // []
//   console.log(result);


// const bookShelf = {
//     // Change code below this line
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//       return "Returning all books";
//     },
//     addBook(bookName) {
//       return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
//         i = 0;
//         for (const book of this.books) {
//             // console.log(this.books.includes(bookName));
//             if (this.books.includes(bookName)) {
//                 this.books.slice(i, 0);
//             }
//             i++;
//         }
//         return `Deleting book ${bookName}`;
//     },
//     updateBook(oldName, newName) {
//         i = 0;
//         for (const book of this.books) {
//             // console.log(this.books.includes(bookName));
//             if (this.books.includes(oldName)) {
//                 this.books[i] = newName;
//             }
//             i++;
//         }
//         return `Updating book ${oldName} to ${newName} `;
//     }
    
//     // Change code above this line
//   };

  
// result = bookShelf.getBooks() //возвращает строку "Returning all books"
// console.log(result);
  
// result = bookShelf.addBook("Haze") //возвращает строку "Adding book Haze"
// console.log(result);
  
// result = bookShelf.removeBook("Red sunset") //возвращает строку "Deleting book Red sunset"
// console.log(result);
  
// result = bookShelf.updateBook("Sands of dune", "Dune") //возвращает строку "Updating book Sands of dune to Dune"
// console.log(result);

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//       // Change code below this line
//         index = this.books.indexOf(oldName);
//         this.books.splice(index, 1, newName)
//         // console.log(this.books);die

//      return this.books
//       // Change code above this line
//     },
//   };

  
// result = bookShelf.updateBook("Haze", "Dungeon chronicles") // ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// console.log(result);

// result = bookShelf.updateBook("The last kingdom", "Dune") // ["Dune", "Haze", "The guardian of dreams"]
// console.log(result);

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//       // Change code below this line
//         const index = this.books.indexOf(oldName);
//         this.books.splice(index, 1, newName);
//         return this.books;
//       // Change code above this line
//     },
//   };
  

// result = bookShelf.updateBook("Haze", "Dungeon chronicles") // ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// console.log(result);

// result = bookShelf.updateBook("The last kingdom", "Dune") // ["Dune", "Haze", "The guardian of dreams"]
// console.log(result);

// const atTheOldToad = {
//     // Change code below this line
//     let potions = [],
//         create(title) {
//             this.potions.push(title);
//         },
//         read() {
//             return this.potions;
//         },
//         update(oldTitle, newTitle) {
//             const index = this.potions.indexOf(title);
//             this.potions.splice(index, 1, newName);
//         },
//         delete(title){
//             const index = this.potions.indexOf(title);
//             this.potions.splice(index, 1);
//         },
//     // Change code above this line
// };

// САМАЯ СЛОЖНАЯ ЗАДАЧА ЗА 3 МОДУЛЬ

// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         let arr_name = [];
//         let {name: new_name} = newPotion

//         for(let potion of this.potions) {
//             if (potion.name === new_name) {
//         let {name: new_name} = newPotion
//                 return `Error! Potion ${new_name} is already in your inventory!`;
//             }
//         }

//         this.potions.push(newPotion);

//         console.log(this.potions);
//     },
//     removePotion(potionName) {
//         for(let potion of this.potions) {
//             if (potion.name === potionName) {
//                 potionIndex = this.potions.indexOf(potion)
//                 break ;
//             }
//         }

//         if (potionIndex === -1) {
//             return `Potion ${potionName} is not in inventory!`;
//         }
//         this.potions.splice(potionIndex, 1);
//         console.log(this.potions);
//     },
//     updatePotionName(oldName, newName) {
//         for(let potion of this.potions) {
//             if (potion.name === oldName) {
//                 const potionIndex = this.potions.indexOf(potion)
//                 const new_object = {
//                     name: newName,
//                     price: potion.price,
//                 }
//                 this.potions.splice(potionIndex , 1, new_object);
//             }
//         }
//         console.log(this.potions);
//     },
//     // Change code above this line
// };






// result = atTheOldToad.getPotions() // [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
// console.log(result);
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 }) //в массиве potions последним элементом будет этот объект
// atTheOldToad.addPotion({ name: "Power potion", price: 270 }) // в массиве potions последним элементом будет этот объект
// result = atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }) // массив potions не изменяется
// console.log(result)
// result = atTheOldToad.addPotion({ name: "Stone skin", price: 240 }) // массив potions не изменяется
// console.log(result)
// result = atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }) // возвращает строку "Error! Potion Dragon breath is already in your inventory!"
// console.log(result)
// result = atTheOldToad.addPotion({ name: "Stone skin", price: 240 }) // возвращает строку "Error! Potion Stone skin is already in your inventory!"
// console.log(result)
// atTheOldToad.removePotion("Dragon breath") // в свойстве potions будет массив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// atTheOldToad.removePotion("Speed potion") // в свойстве potions будет массив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth") // в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion") // в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

//  Module 4. CALLBACK =>
// 1.
// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
//   // Change code below this line
  
//   const result = makePizza();
//   const pointer = makePizza;

//   console.log(result);
//   console.log(pointer);
// 2.
// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//     }

// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//     }

//   // Chande code below this line
// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }
// result = makeMessage("Royal Grand", makePizza)// "Pizza Royal Grand is being prepared, please wait..."
// console.log(result);
// result = makeMessage("Ultracheese", deliverPizza)//"Delivering Ultracheese pizza."
// console.log(result);

// 4.Необходимо написать логику обработки заказа пиццы. 
// Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами
//  два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, 
// метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку
//  "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, 
// метод order должен возвращать результат вызова колбэка onSuccess, 
// передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.


// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName) {},
//   };
  
//   // Change code above this line
  
//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }
  
//   // Callback for onError
//   function onOrderError(error) {
//     return `Error! ${error}`;
//   }

// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, makePizza, onOrderError) {
//       if (this.pizzas.includes(pizzaName))
//         return makePizza(pizzaName)
//     else {
//         let error = `There is no pizza with a name ${pizzaName} in the assortment.`
//         return onOrderError(error)
//     }
//   };
//   // Change code above this line
  
//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }
  
//   // Callback for onError
//   function onOrderError(error) {
//     return `Error! ${error}`;
//   }
  
//   // Method calls with callbacks
//   pizzaPalace.order('Smoked', makePizza, onOrderError);
//   pizzaPalace.order('Four meats', makePizza, onOrderError);
//   pizzaPalace.order('Big Mike', makePizza, onOrderError);
//   pizzaPalace.order('Vienna', makePizza, onOrderError);

// result = pizzaPalace.order("Smoked", makePizza, onOrderError) // "Your order is accepted. Cooking pizza Smoked."
// console.log(result);
// result = pizzaPalace.order("Four meats", makePizza, onOrderError) // "Your order is accepted. Cooking pizza Four meats."
// console.log(result);
// result = pizzaPalace.order("Big Mike", makePizza, onOrderError) // "Error! There is no pizza with a name Big Mike in the assortment."
// console.log(result);
// result = pizzaPalace.order("Vienna", makePizza, onOrderError) // "Error! There is no pizza with a name Vienna in the assortment."
// console.log(result);

// 5. forEach 

// Функция calculateTotalPrice(orderedItems) принимает один параметр 
// orderedItems - массив чисел, и рассчитывает общую сумму его элементов, 
// которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.


// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line
//     orderedItems.forEach(function callback(number, index) {
//         totalPrice += number;  
//     });
//     return totalPrice;
// }

// result = calculateTotalPrice([12, 85, 37, 4]) // 138
// console.log(result);
// result = calculateTotalPrice([164, 48, 291]) // 503
// console.log(result);
// result = calculateTotalPrice([412, 371, 94, 63, 176]) // 1116
// console.log(result);

// 6.  Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает//, 
// console.log(result);
// в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line

//     numbers.forEach(function callback(number) {
//         if (number > value)
//             filteredNumbers.push(number);
//     });
    // for (let i = 0; i < numbers.length; i += 1) {
    //   if (numbers[i] > value) {
    //     filteredNumbers.push(numbers[i]);
    //   }
    // }

    // Change code above this line
//     return filteredNumbers;
// }

// result = filterArray([1, 2, 3, 4, 5], 3) // [4, 5]
// console.log(result);
// result = filterArray([1, 2, 3, 4, 5], 4) // [5]
// console.log(result);
// result = filterArray([1, 2, 3, 4, 5], 5) // []
// console.log(result);
// result = filterArray([12, 24, 8, 41, 76], 38) // [41, 76]
// console.log(result);
// result = filterArray([12, 24, 8, 41, 76], 20) // [24, 41, 76]
// console.log(result);

// 7. Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины 
// в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех 
// которые есть в обоих массивах.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line

//     firstArray.forEach(function callback(number){
//         if (secondArray.includes(number)){
//             commonElements.push(number);
//         }
            
//     });
    // for (let i = 0; i < firstArray.length; i += 1) {
    //   if (secondArray.includes(firstArray[i])) {
    //     commonElements.push(firstArray[i]);
    //   }
    // }
//     return commonElements;
//     // Change code above this line
//     }
    

//   result = getCommonElements([1, 2, 3], [2, 4]) // [2]
//   console.log(result);
//   result = getCommonElements([1, 2, 3], [2, 1, 17, 19]) // [1, 2]
//   console.log(result);
//   result = getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) // [12, 27, 3]
//   console.log(result);
//   result = getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) // [10, 30, 40]
//   console.log(result);
//   result = getCommonElements([1, 2, 3], [10, 20, 30]) // []  
//   console.log(result);

//   10. Выполни рефакторинг функции calculateTotalPrice(orderedItems) 
//   заменив её объявление на стрелочную функцию. 
//   Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.

// Change code below this line


// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
  
//     orderedItems.forEach((item) => {
//       totalPrice += item;
//     });
  
//     return totalPrice;
//   }
// Change code below this line
  // Change code above this line
  
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
  
//     orderedItems.forEach(function (item) {
//       totalPrice += item;
//     });
  
//     return totalPrice;
//   }
  // Change code above this line
  

// result = calculateTotalPrice([12, 85, 37, 4]) // 138
// console.log(result);
// result = calculateTotalPrice([164, 48, 291]) // 503
// console.log(result);
// result = calculateTotalPrice([412, 371, 94, 63, 176]) // 1116
// console.log(result);

// 11. Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// Change code below this line
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

//     // Change code above this line
//     return filteredNumbers;
//   }

// result = filterArray([1, 2, 3, 4, 5], 3) // [4, 5]
// console.log(result);
// result = filterArray([1, 2, 3, 4, 5], 4) // [5]
// console.log(result);
// result = filterArray([1, 2, 3, 4, 5], 5) // []
// console.log(result);
// result = filterArray([12, 24, 8, 41, 76], 38) // [41, 76]
// console.log(result);
// result = filterArray([12, 24, 8, 41, 76], 20) // [24, 41, 76]
// console.log(result);

// 13. Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент,
//  значение которого это чётное число, добавляя к нему значение параметра value.
// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers,
//  а создавала, наполняла и возвращала новый массив с обновлёнными значениями.    

// const changeEven = (numbers, value) => {
// //     // Change code below this line
//     const newArray = [];
//     numbers.forEach(number  => {
//       if (number % 2 === 0) {
//         number += value;
//       }
//       newArray.push(number);
//     });
//     return newArray;
// //     // Change code above this line
//   }
  
// result = changeEven([1, 2, 3, 4, 5], 10) // [1, 12, 3, 14, 5]
// console.log(result);
// result = changeEven([2, 8, 3, 7, 4, 6], 10) // [12, 18, 3, 7, 14, 16]
// console.log(result);
// result = changeEven([17, 24, 68, 31, 42], 100) // [17, 124, 168, 31, 142]
// console.log(result);
// result = changeEven([44, 13, 81, 92, 36, 54], 100) // [144, 13, 81, 192, 136, 154]
// console.log(result);

// 14. Метод Map. 

// Дополни код так, чтобы в переменной planetsLengths 
// получился массив длин названий планет. Обязательно используй метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets;

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// 15. Используя метод map() сделай так, чтобы в переменной titles получился массив
//  названий книг (свойство title) из всех объектов массива books.

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
//   // Change code below this line
  
//   const titles = books.map(book => book.title);

// 16. Метод flatMap()
// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг 
// (свойство genres) из массива книг books.
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism"],
//     },
//   ];
//   // Change code below this line
  
//   const genres = books.flatMap(book => book.genres);
  

// 17. Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей
//  (свойство name) из массива объектов в параметре users.

// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
//   ];
// const getUserNames = users => {
//     const names = users.map(autor => autor.name);
//     return names;
// };

// result = getUserNames(users);
// console.log(result);
// Объявлена переменная getUserNames

// Переменной getUserNames присвоена стрелочная функция с параметром (users).

// Для перебора параметра users используется метод map()

// Вызов функции с указанным массивом пользователей возвращает массив 
// ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// TODO:===========Task2============
//У нас есть объект, в котором храняться зарплаты
//нашей команды
//Напишите код для сумирования всех зарплат и
//сохраните его результат в переменной sum.
//Если объект salaries пуст, то результат должен быть 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// function getTotalsalarie(object) {
//     const total = Object.values(object);
//     let sum = 0;
//     for (let i = 0; i < total.length; i += 1) {
//         sum += total[i];
// }
// return sum;
// }
// console.log(getTotalsalarie(salaries));

// 19. Filter - ЧЕТНОЕ И НЕ ЧЕТНОЕ

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(value => value % 2 === 0); проверка на четные
// const oddNumbers = numbers.filter(value => value % 2 !== 0); проверка на не четные

// 20. Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books,
//  а в переменной uniqueGenres массив уникальных жанров - без повторений.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genres, index, books) => books.indexOf(genres) === index);

// 21. Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно
//  значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) 
// которое совпадает со значением в переменной AUTHOR.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// 22. Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, 
// возраст которых (свойство age) попадает в промежуток от minAge до maxAge.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Blackb44444urn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 300
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// const getUsersWithAge = (users, minAge, maxAge) => {
//   const allowedUser = users.filter(user => user.age > minAge && user.age < maxAge);
//   return allowedUser
// };


// const result = getUsersWithAge(users, 200, 500)
// console.log(result);
// //  Если значение параметров minAge и maxAge равны 20 и 30 соотвественно,
// //   функция возвращает массив объектов пользователей с именами Ross Vazquez, Elma Head и Carey Barr
// // Если значение параметров minAge и maxAge равны 30 и 40 соотвественно, 
// // функция возвращает массив объектов пользователей с именами Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony
// // Если значение параметров minAge и maxAge равны 80 и 100 соотвественно,
// //  функция возвращает пустой массив

// const uniqueGenres = allGenres.filter((genres, index, books) => books.indexOf(genres) === index);


// const uniqueFriends = nameFriends.filter((friend, index, friends) => {
//   friends.indexOf(friend) === index;
// }


// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];

// const getFriends = (users) => {
//   const nameFriends = users.flatMap(user => user.friends);
//   const uniqueFriends = nameFriends.filter((friend, index, friends) => {
//    return friends.indexOf(friend) === index;
//  });
//  return uniqueFriends;
// };

// res = getFriends(users);
// console.log(res);

// const getActiveUsers = (users) => users.filter(user => user.isActive === false)

// console.log(getActiveUsers(users));

// !!!!!!!!!!!!!!!!!!!!!!!REDUCE!!!!!!!!!!!!!!!!!!!!!

// # Вначале метод reduce() создаёт внутреннюю переменную-аккумулятор и
// # присваивает ей значение параметра initialValue или первого элемента
// # перебираемого массива, если initialValue не задан.
// previousValue = 0

// # Далее коллбек-функция вызывается для каждого элемента массива. Текущее значение
// # параметра previousValue это то, что вернула коллбек-функция на прошлой итерации.
// Итерация 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Итерация 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Итерация 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Итерация 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Итерация 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # После того как весь массив перебран, метод reduce() возвращает значение аккумулятора.
// Результат - 32

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// Change code below this line
// const startTime = 0;
// let totalTime = players.reduce((prevTime, player) => {
//   prevTime += player.playtime / player.gamesPlayed;
//   return prevTime;
// }, startTime);
// const totalAveragePlaytimePerGame = totalTime;

// const totalAveragePlaytimePerGame = players.reduce((prevTime, player) => {
//   prevTime += player.playtime / player.gamesPlayed;
//   return prevTime;
// });

// console.log(totalAveragePlaytimePerGame);

// 36.Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала 
// сумму всех средств (свойство balance) которые хранят пользователи из массива users.
// Вызов функции с указанным массивом пользователей возвращает число 20916.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
    // friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const calculateTotalBalance = users => 
//   users.reduce((totalSum, user) => {
//   totalSum += user.balance;
//               return totalSum;
// }, 0);

// console.log(calculateTotalBalance);

// const getTotalFriendCount = users => users.reduce((allFriends, user) => allFriends += user.friends.length, 0);

// console.log(getTotalFriendCount(users));

// 38. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная
//  по возрастанию копия массива releaseDates,
//  а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// ! sort()-Сортировка по возрастанию(a - b, где a > b) и по убыванию(b - a, a > b)

// Eсли вызов (a, b) вернёт 0, сортировка оставит a и b неизменными по отношению друг к другу, 
// но отсортирует их по отношению ко всем другим элементам. Но вообще не важно, что возвращать, если их 
// взаимный порядок не имеет значения.

// 39. Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию 
// или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная
//  по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line
// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// 40. Для сортировки строк в алфавитном порядке, по возрастанию или убыванию,
//  используется метод строк localeCompare().
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// console.log(authorsInAlphabetOrder(authors));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// 41. Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

// Значение переменной sortedByAuthorName это массив книг отсортированный по имени автора в алфавитном порядке.
// Значение переменной sortedByReversedAuthorName это массив книг отсортированный по имени 
// автора в обратном алфавитном порядке.
// Значение переменной sortedByAscendingRating это массив книг отсортированный по возрастанию рейтинга.
// Значение переменной sortedByDescentingRating это массив книг отсортированный по убыванию рейтинга.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// Change code below this line

// const sortedByAuthorName = [...books].sort((firstName, secondName) => firstName.author.localeCompare(secondName.author));
// const sortedByReversedAuthorName = [...books].sort((firstName, secondName) => secondName.author.localeCompare(firstName.author));
// const sortedByAscendingRating = [...books].sort((firstName, secondName) => firstName.rating - secondName.rating);
// const sortedByDescentingRating = [...books].sort((firstName, secondName) => secondName.rating - firstName.rating);


// console.log(sortedByAuthorName(books));
// console.log(sortedByReversedAuthorName(books));
// console.log(sortedByAscendingRating(books));
// console.log(sortedByDescentingRating(books));

// 43. Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей
//  отсортированный по убыванию количества их друзей (свойство friends).
// Вызов функции с указанным массивом пользователей возвращает новый массив пользователей 
// отсортированный по убыванию количества их друзей.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
  // {
  //   name: "Ross Vazquez",
  //   email: "rossvazquez@xinware.com",
  //   eyeColor: "green",
  //   friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
  //   isActive: false,
  //   balance: 3793,
  //   gender: "male"
  // },
  // {
  //   name: "Elma Head",
  //   email: "elmahead@omatom.com",
  //   eyeColor: "green",
  //   friends: ["Goldie Gentry", "Aisha Tran"],
  //   isActive: true,
  //   balance: 2278,
  //   gender: "female"
  // },
  // {
  //   name: "Carey Barr",
  //   email: "careybarr@nurali.com",
  //   eyeColor: "blue",
  //   friends: ["Jordan Sampson", "Eddie Strong"],
  //   isActive: true,
  //   balance: 3951,
  //   gender: "male"
  // },
  // {
  //   name: "Blackburn Dotson",
  //   email: "blackburndotson@furnigeer.com",
  //   eyeColor: "brown",
  //   friends: ["Jacklyn Lucas", "Linda Chapman"],
  //   isActive: false,
  //   balance: 1498,
  //   gender: "male"
  // },
  // {
  //   name: "Sheree Anthony",
  //   email: "shereeanthony@kog.com",
  //   eyeColor: "brown",
  //   friends: ["Goldie Gentry", "Briana Decker"],
  //   isActive: true,
  //   balance: 2764,
  //   gender: "female"
//   }
// ]

// const sortByDescendingFriendCount = users => [...users].sort((startFriends, finishFriends) =>
//   finishFriends.friends.length - startFriends.friends.length);
//   console.log(sortByDescendingFriendCount(users));

// 45. ЦЕПОЧКИ МЕТОДОВ (ЧЕЙНИНГ, CHAINING)

// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, 
// рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books.filter((author) => author.rating > MIN_BOOK_RATING).map(book => book.author).sort((a, b) =>  a.localeCompare(b));

// console.log(names);

// Объявлена переменная books
// Значение переменной books это исходный массив объектов
// Объявлена переменная MIN_BOOK_RATING
// Значение переменной MIN_BOOK_RATING это число 8
// Объявлена переменная names
// Значение переменной names это массив ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
// Нет объявленых переменных кроме books, MIN_BOOK_RATING и names
// Используется цепочка методов filter, map, sort

// 46. Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён
//  пользователей отсортированный по возрастанию количества их друзей (свойство friends).
// В теле функции используется цепочка методов
// Значение параметра users не изменяется
// Вызов функции с указанным массивом пользователей возвращает массив 
// ["Moore Hensley", "Sharlene Bush", "Elma Head", "Sheree Anthony", "Ross Vazquez", "Carey Barr", "Blackburn Dotson"]

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getNamesSortedByFriendCount = users => [...users].sort((a, b) =>  a.friends.length - b.friends.length).map(user => user.name);

// 47. Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён 
// друзей (свойство friends) отсортированный по алфавиту .

// Вызов функции с указанным массивом пользователей возвращает массив 
// ["Adrian Cross", "Aisha Tran", "Briana Decker", "Eddie Strong", "Goldie Gentry", 
// "Jacklyn Lucas", "Jordan Sampson", "Linda Chapman", "Marilyn Mcintosh", "Naomi Buckner", 
// "Padilla Garrison", "Sharron Pace", "Solomon Fokes"]

// const getSortedFriends = users => [...users].flatMap(user => user.friends).filter((friend, index, friends) => friends.indexOf(friend) === index).sort((a, b) => a.localeCompare(b));

// console.log(getSortedFriends(users));

//  48. Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий 
// баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.
// Если значение параметра gender это строка "male", функция возвращает число 12053
// Если значение параметра gender это строка "female", функция возвращает число 8863
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// const getTotalBalanceByGender = (users, gender) => [...users].filter((user, index, users) => user.gender === gender).flatMap(user => user.balance).reduce((total, balance) => total + balance);
// // .reduce((totalBalance, user) => {totalBalance + user.balance}, 0);
// gender = 'female'
// console.log(getTotalBalanceByGender(users , gender));

// Результат - 32

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// Change code below this line
// const startTime = 0;
// let totalTime = players.reduce((prevTime, player) => {
//   prevTime += player.playtime / player.gamesPlayed;
//   return prevTime;
// }, startTime);
// const totalAveragePlaytimePerGame = totalTime;

// const totalAveragePlaytimePerGame = players.reduce((prevTime, player) => {
//   prevTime += player.playtime / player.gamesPlayed;
//   return prevTime;
// });

// console.log(totalAveragePlaytimePerGame);

// ----------------[[P R O T O T Y P E]] Модуль 5.----------------------

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// // const child = {};
// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// result = parent.hasOwnProperty("surname") // true
// console.log(result)
// result = parent.hasOwnProperty("heritage") // true
// console.log(result)
// result = child.hasOwnProperty("name") // true
// console.log(result)

// console.log(child.name) // "Jason"

// result = child.hasOwnProperty("age") // true
// console.log(result)

// console.log(child.age) // 27

// result = child.hasOwnProperty("surname") // false
// console.log(result)

// console.log(child.surname) // "Moore"

// result = child.hasOwnProperty("heritage") // false
// console.log(result)

// console.log(child.heritage) // "Irish"

// result = parent.isPrototypeOf(child) // true
// console.log(result)

// console.log(child) // "


// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog.__proto__); // { name: 'Mango', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true

// class Car {
  
// }

// const car = new Car();

// // const car = {}
// console.log(car); //

// ------------------------- Приватні властивості # ----------------------------

// class Storage {
//   // Change code below this line
//   #items;
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     // console.log(storage.#items, 1); // ["
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// Расставь отсутствующие this в методах объекта account.

// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// const users =[
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '249b6175-5c30-44c6-b154-f120923736f5',
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = users => [...users].sort((a, b) => a.friends.length - b.friends.length);
  // твой код

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//СТАТИЧЕСКИЕ СВОЙСТВО

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice < Car.MAX_PRICE) {
//       this.#price = newPrice;
//       return this.#price;
//     } 
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

