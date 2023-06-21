enum AgeUnit {
  Year,
  Month,
  Day,
}

type PersonA = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
};

const personA: PersonA = {
  name: "Rayhan",
  age: 23,
  ageUnit: AgeUnit.Year,
};

const convertPersonAgeToMonth = (person: PersonA): PersonA => {
  person.age = person.age * 12;
  person.ageUnit = AgeUnit.Month;
  return person;
};

convertPersonAgeToMonth(personA);
