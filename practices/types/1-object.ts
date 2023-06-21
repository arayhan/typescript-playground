// Buatlah type aliases untuk object berikut
const airplane = {
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
