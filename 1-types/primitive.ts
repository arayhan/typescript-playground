/* ================= ANY ================= */
let firstName: any = "John"; // any type
firstName = 123; // no error
firstName = [1, 2, 3]; // no error

const multipleByTwo = (number: any) => number * 2;

/* ================= UNKNOWN ================= */
let secondName: unknown = "John"; // unknown type

const multipleByThree = (number: unknown) => number * 3;
const multipleByFour = (number: unknown) => {
  if (typeof number === "number") {
    return number * 4;
  }
  return "Please provide a valid number";
};

/* ================= BOOLEAN ================= */
let isBoolean: boolean = true;
isBoolean = typeof "Rayhan" === "string";
isBoolean = 1 > 0;

// isBoolean = {} // Error
// isBoolean = "Indonesia" // Error
// isBoolean = null;  // Error
// isBoolean = undefined;  // Error

/* ================= NUMBER ================= */
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let number: number = 100;
number = 100.5;
number = 1_000_000;
number = -300;
number = Infinity * 0.01;
number = parseInt("12");
number = Number("15");

/* ================= BIG INT ================= */
// const bigNumber: bigint = 100n;
// const bigNumber2: bigint = BigInt(100);

let nickname = "Rayhan";
nickname = 24;
