function Product(name,type,price) {
    this.name=name;
    this.type=type;
    this.price=price;

}
function ProductManager() {
    let products=[];
    return{
        add:function (product) {
            products.push(product);
        },
        remove:function (name) {
            let i=0;
            while (true){
                i=products.findIndex(x => x.name == name);
                if(i===-1)
                    return products;
                products.splice(i,1);
            }
        },
        getAll:function () {
            return products;
        },
        removeAll:function () {
            products.length=0;
        }
    }
}
let candy1=new Product("степ","candies",20);
let bread=new Product("хлеб","bread",10);
let candy2=new Product("степ","candies",50);
let fridge=new ProductManager();
fridge.add(candy1);
fridge.add(bread);
fridge.add(candy2);
console.log(fridge.getAll());