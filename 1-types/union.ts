// =====================================
// UNION TYPES
// =====================================
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

// =====================================
// UNION WITH PRIMITIVE
// =====================================
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

// =====================================
// OTHER EXMAPLE
// =====================================
type Apple = {
  name: string;
  color: string;
};

type Banana = {
  name: string;
  length: number;
};

type AppleOrBanana = Apple | Banana;

function eatFruit(fruit: AppleOrBanana) {
  if ("color" in fruit) {
    console.log(`Eating a ${fruit.name} apple. It is ${fruit.color}.`);
  } else {
    console.log(
      `Eating a ${fruit.name} banana. It is ${fruit.length} cm long.`
    );
  }
}

const apple: Apple = {
  name: "Red Delicious",
  color: "red",
};

const banana: Banana = {
  name: "Cavendish",
  length: 17,
};

eatFruit(apple); // Output: Eating a Red Delicious apple. It is red.
eatFruit(banana); // Output: Eating a Cavendish banana. It is 17 cm long.
