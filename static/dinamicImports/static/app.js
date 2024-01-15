
import { pizzaFactory } from "./pizzaFactory.js";

pizzaFactory.addIngredients('Tomato');
pizzaFactory.addIngredients('Peperony');
pizzaFactory.addIngredients('Tomato');
pizzaFactory.addIngredients('Cheese');
pizzaFactory.displayPizza();
pizzaFactory.removeIngredients('Ham');
pizzaFactory.removeIngredients('Tomato');
pizzaFactory.displayPizza();