
import shoppingCart from "./ModuleByObjectTemplate.js";

shoppingCart.addItem({
    id:'001',
    name:'Milk',
    price:4.5
})

shoppingCart.addItem({
    id:'002',
    name:'Bread',
    price:6.0
})
shoppingCart.addItem({
    id:'003',
    name:'Sugar',
    price:10.0
})

shoppingCart.showCart();
shoppingCart.removeItem('001');
shoppingCart.showCart();
shoppingCart.updateItem({
    id:'002',
    name:'Bread Grun',
    price:6.9
})
shoppingCart.showCart();
