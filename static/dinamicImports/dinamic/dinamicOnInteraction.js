
const btn = document.querySelector('.btn-pizzaFactory');

console.log(btn);

btn.addEventListener('click',()=>{
    import('../static/pizzaFactory.js')
    .then((module)=>{
        module.pizzaFactory.addIngredients('Tomato');
        module.pizzaFactory.addIngredients('Peperony');
        module.pizzaFactory.addIngredients('Tomato');
        module.pizzaFactory.addIngredients('Cheese');
        module.pizzaFactory.displayPizza();
        module.pizzaFactory.removeIngredients('Ham');
        module.pizzaFactory.removeIngredients('Tomato');
        module.pizzaFactory.displayPizza();
    })
})