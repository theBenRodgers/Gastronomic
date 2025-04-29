import SearchResult from "./SearchResult";

interface Instruction {
  number: number;
  step: string;
  ingredients?: SearchResult[];
}

export default Instruction