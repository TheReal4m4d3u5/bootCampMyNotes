const products = [
{name: "laptop",     price: 499,color: "white"},
{name: "Smartphone", price: 899,color: "black"},
{name: "Headphones", price: 50,color: "white"},
{name: "Tablet",     price: 199,color: "grey"},
{name: "Keyboard",   price: 210,color: "blue"}

]


const discount = products.map((product) => {


    //I have questions about ...product,  price: product.price * 0.5. How does this work?
    return {
        ...product,
        price: product.price * 0.5
    }
}
)

console.log(discount)



const productNames = products.map((product) => {
    return product.name
}
)

console.log(productNames)


const categorizedProducts = products.map(product => {
   let category;

   if(product.price < 100) category = "Budget";
   else if(product.price < 500) category = "Mid-range";
   else category = "Premium";
   return { ...product, category }; 
});

console.log(categorizedProducts);