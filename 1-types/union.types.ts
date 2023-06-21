// UNION TYPES

type Dog = {
  name: string;
  age: number;
  breed: string;
  color: string;
  isAdopted: boolean;
  bark: () => void;
};

type Cat = {
  name: string;
  age: number;
  breed: string;
  color: string;
  isAdopted: boolean;
  meow: () => void;
};

type Animal = Dog | Cat;

const animal: Animal = {
  name: "Blacky",
  age: 3,
  breed: "Persian",
  color: "Black",
  isAdopted: false,
  meow: () => {
    console.log("Meow!");
  },
};

// UNION WITH PRIMITIVE
type numberOrString = number | string;

const sumNumberOrString = (
  num1: numberOrString,
  num2: numberOrString
): void => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    console.log(num1 + num2);
  } else {
    console.log(`${num1} ${num2}`);
  }
};

sumNumberOrString(1, 2); // 3
sumNumberOrString("Budi", 10); // Budi 10
