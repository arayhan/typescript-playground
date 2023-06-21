type GreetingFunction = (message: string) => string;

type PersonB = {
  name: string;
  age: number;
  country: string;
  // greet: Function // ❌ Ga bisa kalo kaya gini, karena kalo ada parameternya, typesnya harus dideclare
  //   greet: (message: string) => string; // ✅
  greet: GreetingFunction; // ✅
};

const personB: PersonB = {
  name: "Rayhan",
  age: 23,
  country: "Indonesia",
  greet: (message) => {
    return `${message}, ${personB.name}`;
  },
};

console.log(personB.greet("Selamat Malam"));
