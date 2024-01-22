
let cart = [];

const shoppingCart = {
  addItem:(item) =>{
    cart = [...cart,item];
  },

  updateItem:(item) =>{
    cart = cart.filter((element)=> element.id === item.id ? item : element)
  },
  
  removeItem:(itemId) =>{
    cart  = cart.filter((elements)=> elements.id!==itemId);
  },

  showCart:() =>{
    console.log(cart);
  }
}

export default shoppingCart;