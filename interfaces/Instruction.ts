import SearchResult from "./PantryItem";

interface Instruction {
  number: number;
  step: string;
  ingredients?: SearchResult[];
}

export default Instruction