export type Question = {
  id: number;
  title: string;
  question: string;
  type: "Event" | "Core";
  order: number;
  answers: Answer[]
}


export type Answer = {
  id: number;
  text: string;
  price: number;
  gauges: {
    social: number;
    environmental: number;
    economy: number;
  }
}