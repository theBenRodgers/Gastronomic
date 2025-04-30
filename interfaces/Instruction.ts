import PantryItem from "./PantryItem";

interface Instruction {
  number: number;
  step: string;
  ingredients?: PantryItem[];
}

export default Instruction