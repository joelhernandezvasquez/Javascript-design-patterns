
let ingredients = [];

export const pizzaFactory = {
  
    addIngredients:(ingredient)=>{
     if(!ingredients.includes(ingredient)){
        ingredients = [...ingredients,ingredient];
        console.log(`${ingredient} added to the pizza.`);
     }
     else{
        console.log(`${ingredient} already added to the pizza.`);
     }
  },
  removeIngredients:(ingredient) =>{
    if(!ingredients.includes(ingredient)){
        console.log(`${ingredient}is not in the pizza.`);
    }
    else{
      ingredients = ingredients.filter((element)=> element!==ingredient);
      console.log(`${ingredient} removed from the pizza.`)
    }
  },

  displayPizza:()=>{
    console.log(ingredients);
  }

}

