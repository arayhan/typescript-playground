const car: {
  brand: string;
  year: number;
  color?: string;
} = {
  brand: "BMW",
  year: 2020,
};

// TYPE ALIASES
type Car = {
  brand: string;
  year: number;
  color?: string;
};

const car2: Car = {
  brand: "BMW",
  year: 2020,
};

// ==================================
// PRACTICE
// ==================================
type Passenger = {
  name: string;
  passportNumber: string;
};

type Airplane = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  passengers: Passenger[];
  getPassenger: (passengerIndex: number) => Passenger | undefined;
};

// Buatlah type aliases untuk object berikut
const airplane: Airplane = {
  model: "Boeing 777",
  flightNumber: "CC137",
  timeOfDeparture: new Date(),
  timeOfArrival: new Date(),
  passengers: [
    {
      name: "John Doe",
      passportNumber: "123456789",
    },
  ],
  getPassenger(passengerIndex) {
    return this.passengers[passengerIndex];
  },
};
