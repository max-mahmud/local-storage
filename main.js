/** 
const productForm =document.getElementById('add-product');
const allProduct =document.getElementById('all-product');
const productName =document.getElementById('product-name');
const productImage =document.getElementById('product-image');
const productText =document.getElementById('product-text');
const productPrice =document.getElementById('product-price');

const createElement =(nameValue, imageValue, textValue, priceValue) =>{
    const productCol =document.createElement("div")
    productCol.className="col-lg-3";

    const singleDiv =document.createElement("div")
    singleDiv.className="single-product"

    const rowImage =document.createElement('img');
    rowImage.setAttribute('src', imageValue)

    const rowPrice =document.createElement('h5');
    rowPrice.innerHTML= priceValue;

    const rowText =document.createElement('p');
    rowText.innerHTML= textValue;
    
    const rowName =document.createElement('h3');
    rowName.innerHTML= nameValue;
    
    productCol.appendChild(singleDiv);
    singleDiv.append( rowImage, rowPrice, rowName, rowText);
    allProduct.append(productCol);

}

const products = JSON.parse(localStorage.getItem("lsProducts")) || [];
const addProduct =(nameValue, imageValue, textValue, priceValue) =>{
    products.push({
        image : imageValue,
        price : priceValue,
        Name : nameValue,
        text :textValue,
    });
    localStorage.setItem("lsProducts", JSON.stringify(products))
}

productForm.addEventListener('submit', function(e){
    e.preventDefault();
    const nameValue=productName.value;
    const imageValue=productImage.value;
    const textValue=productText.value;
    const priceValue=productPrice.value;

    createElement(nameValue, imageValue, textValue, priceValue);
    addProduct(nameValue, imageValue, textValue, priceValue);

})
products.forEach(product => {
    createElement(
        product["name"],
        product["image"],
        product["text"],
        product["price"]
    );
});
*/

const allproduct =document.getElementById('all-product');
fetch("products.json")
.then(res => res.json())
.then(data =>{
    for (let i = 0; i < data.length; i++) {
        allproduct.innerHTML += `<div class="col-lg-4">
                                <div class="single-product">
                                    <img src="${data[i].image}" alt="">
                                    <h5>${data[i].price}</h5>
                                    <h3>${data[i].name}</h3>
                                    <p>${data[i].text}</p>
                                </div>
                            </div>`
        
    }
})



