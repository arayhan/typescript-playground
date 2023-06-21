let a: number[] = [1, 2, 3];
let b: (string | number)[] = ["a", 1, "b", 2];
let c: Array<string> = ["a", "b", "c"];
let d: Array<string | number> = ["a", 1, "b", 2];
let e: any[] = ["a", {}, 1];
let f: Array<unknown> = ["a", {}, 1];

// =====================================

type Person = {
  name: string;
  age: number;
  isMarried: boolean;
};

// type Persons = Person[];
type Persons = Array<Person>;

const persons: Persons = [
  {
    name: "John Doe",
    age: 20,
    isMarried: false,
  },
  {
    name: "Jane Doe",
    age: 20,
    isMarried: false,
  },
];

// READONLY ARRAY
const readonlyArray: ReadonlyArray<number> = [1, 2, 3];
const readonlyArray2: readonly number[] = [1, 2, 3];
const readonlyString: Readonly<string[]> = ["Hello World"];
const readonlyString2: readonly string[] = ["Hello World"];
const readonlyString3: readonly [string, string, number] = ["a", "b", 3];

// readonlyArray.push(4); // error
// readonlyArray2.push(4); // error
