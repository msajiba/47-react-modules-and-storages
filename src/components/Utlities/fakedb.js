//use local storage to manage cart 

const addDb = (id) => {
    let shoppingCart = {} ;

    //get the shopping Cart
    const storeCart = localStorage.getItem('shopping-cart');
    if(storeCart){
        shoppingCart = JSON.parse(storeCart);
    }

    //add quantity
    const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}


const removeDb =(id) => {
        const storeCart = localStorage.getItem('shopping-cart');
        if(storeCart){
            const shoppingCart = JSON.parse(storeCart);
            if(id in shoppingCart){
                delete shoppingCart[id];
                localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
            }
        }
}




//reduce 
// const numbers = [10,20,30,40,50,60,70,80];
// const sum =  numbers.reduce((sum, number) => sum + number  ,0)
// console.log(sum);



export {addDb, removeDb};