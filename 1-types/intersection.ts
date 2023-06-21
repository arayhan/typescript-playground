// =====================================
// EMPLOYEE
// =====================================
type Employee = {
  id: number;
  name: string;
  role: string;
};

type Manager = {
  department: string;
};

type ManagerEmployee = Employee & Manager;

const managerEmployee: ManagerEmployee = {
  id: 123,
  name: "John Doe",
  role: "Manager",
  department: "Sales",
};

// =====================================
// ANIMAL
// =====================================
type LandAnimal = {
  legs: number;
  canWalk: boolean;
};

type WaterAnimal = {
  fins: number;
  canSwim: boolean;
};

type AmphibiousAnimal = LandAnimal & WaterAnimal;

const frog: AmphibiousAnimal = {
  legs: 4,
  canWalk: true,
  fins: 0,
  canSwim: true,
};
