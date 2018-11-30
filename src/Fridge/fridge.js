const Product=({name, type, price})=>{
    return {
        getName: () => name,
        getType: () => type,
        getPrice: () => price,
    }
}

function ProductManager() {
    const products = [];
    return {
        add: (product) => products.push(product),
        remove: function (name) {
            let i = 0;
            while (true) {
                i = products.findIndex(x => x.getName == name);
                if (i === -1)
                    return products;
                products.splice(i, 1);
            }
        },
        getAll: () => products.slice(),
        removeAll: () => products.length = 0
    }
}

let candy1 = Product({name:"степ", type:"candies", price:20});
let bread = Product({name:"хлеб", type:"bread", price:10});
let candy2 = Product({name:"степ", type:"candies", price:50});
const fridge = new ProductManager();
fridge.add(candy1);
fridge.add(bread);
fridge.add(candy2);
console.log(fridge.getAll());