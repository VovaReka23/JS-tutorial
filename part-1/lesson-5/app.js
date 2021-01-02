let value;

// Number to string
value = String(10);
value = String(10+40);
value = (40).toString();

// Boolean to string
value = String(false);
// Array to string
value = String([1, 2, 3]); //1,2,3
// Object to string
value = String({ name: 'Denis' }); // [object Object]

value = 30 + '' + undefined; // 30undefined
value = 30 - 'rttr'; // NaN
value = 30 * '5'; // 150
value = true + 10; // 11
value = false + undefined; //NaN

// String to number
value = Number('23'); // 23
value = Number(false); // 0
value = Number(true);  // 1
value = Number(null); // 0
value = Number('false'); // NaN
value = Number([1,2,3]); // NaN

value = parseInt('200px'); // 200
value = parseFloat('200.212px'); // 200.212

// Boolean
value = Boolean('hello');  //true
value = Boolean(''); // false
value = Boolean(-100); // true
value = Boolean(0); // false
value = Boolean(undefined); // false
value = Boolean(null); // false
value = Boolean({}); // true
value = Boolean([]); // true

console.log(value);
console.log(typeof value);