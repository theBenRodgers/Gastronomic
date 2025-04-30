interface Nutrient {
	name: string;
	amount: number;
	unit: string;
	percentOfDailyNeeds?: number;
  }
  
  export default interface Nutrition {
	nutrients: Nutrient[];
  }
  