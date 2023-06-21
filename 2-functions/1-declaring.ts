const substract = (a: number, b: number): number => a - b;
const intro = (name: string, age: number, country?: string): string => {
  const baseIntro = `Hello, I'm ${name} and age is ${age}`;

  if (country) return `${baseIntro} I live in ${country}`;
  return baseIntro;
};

substract(5, 3);
intro("Rayhan", 23);
