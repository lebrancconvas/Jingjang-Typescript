let elemental: string[] = ["Earth", "Water", "Wind", "Fire", "Light", "Dark", "Electric"]
interface Pokemon {
	id: number;
	name: string; 
	element: string;
	atk: number; 
	def: number; 
}
let add = (a: number, b: number): number => {	
	return a + b 	
}


type color = "blue" | "green" | "yellow"
let a:color = "green"

let expo = (a: number, b: number) => { 
	return a.toString() + b.toString() 
}

console.log(expo(9, 9))   
