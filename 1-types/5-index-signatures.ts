// =====================================
// INDEX SIGNATURES
// =====================================
// Index signatures allow us to define a type for all the keys of an object that are not known in advance.

type PetShop = {
  pets: {
    [key: string]: number;
  };
};

// =====================================
// PRACTICE
// =====================================

type ClassA = {
  name: string;
  year: number;
  studentsAge: {
    [names: string]: number;
  };
};

const classA: ClassA = {
  name: "Math",
  year: 2020,
  studentsAge: {
    john: 20,
    doe: 18,
  },
};

type ClassB = {
  name: string;
  year: number;
  studentsAge: {
    1: number;
    budi: number;
    [name: string]: string | number;
  };
};

const classB: ClassB = {
  name: "Math",
  year: 2020,
  studentsAge: {
    1: 20,
    john: "20",
    doe: 18,
    budi: 20,
  },
};
