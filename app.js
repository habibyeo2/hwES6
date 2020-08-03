let catName;
let quote;
function catTalk() {
  "use strict";
  catName = "Oliver";
  quote = catName + " says Meow!";
}
catTalk();


function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
      let i = "block scope";
      console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
  }


  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;


  Object.freeze(MATH_CONSTANTS);


  const magic = () => {
    "use strict";
    return new Date();
  };


  const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
  };


  const increment = (number, value = 1) => number + value;


  const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }


  arr2 = [...arr1];


  const {today, tomorrow} = HIGH_TEMPERATURES;


  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;


  const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;


  [a, b] = [b, a];


  const [a, b, ...arr] = list;


  const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);


  const bicycle = {
    gear: 2,
    setGear(newGear) {
      "use strict";
      this.gear = newGear;
    }
  };


  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }


  export const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  export const lowercaseString = (string) => {
    return string.toLowerCase()
  }


  import { uppercaseString, lowercaseString } from './string_functions.js';


  import * as stringFunctions from "./string_functions.js";


  export default function subtract(x, y) {
    return x - y;
  }


  import subtract from "./math_functions.js";


  const makeServerRequest = new Promise((resolve, reject) => {
});


if(responseFromServer) {
    resolve("We got the data");
   } else {	
     reject("Data not received");
   }


   makeServerRequest.then(result => {
    console.log(result);
  });
