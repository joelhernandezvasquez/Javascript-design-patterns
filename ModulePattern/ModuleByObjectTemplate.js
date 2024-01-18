
let cart = [];

const shoppingCart = {
  addItem:(item) =>{
    cart = [...cart,item];
  },
  
  removeItem:(itemId) =>{
    cart  = cart.filter((elements)=> elements.id!==itemId);
  },
  showCart:() =>{
    console.log(cart);
  }
}

export default shoppingCart;