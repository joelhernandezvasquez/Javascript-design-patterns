const btn = document.querySelector('.btn-pizzaFactory');

const options = {
    root: null, // use the viewport as the root
    rootMargin: "0px",
    threshold: .5,
}

const handleIntersection = (entries,oberserver) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
        import('../static/pizzaFactory.js')
        .then((entry)=>{
            entry.pizzaFactory.addIngredients('Tomato');
            entry.pizzaFactory.addIngredients('Peperony');
            entry.pizzaFactory.addIngredients('Tomato');
            entry.pizzaFactory.addIngredients('Cheese');
            entry.pizzaFactory.displayPizza();
            entry.pizzaFactory.removeIngredients('Ham');
            entry.pizzaFactory.removeIngredients('Tomato');
            entry.pizzaFactory.displayPizza();
        })
    }
    });
}

const oberserver = new IntersectionObserver(handleIntersection,options);
oberserver.observe(btn);

