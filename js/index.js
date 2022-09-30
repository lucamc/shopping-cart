// Desktop Menu
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

//Mobile Menu
const mobileBtnHam = document.querySelector('.menuHamMobile')
const mobileMenu = document.querySelector('.mobile-menu')

//Shopping Car
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const myOrder = document.querySelector('.product-detail')

//Product List
const cardsContainer = document.querySelector('.cards-container')


// Desktop Menu
menuEmail.addEventListener('click' , (e) => {
    
    desktopMenu.classList.toggle('inactive')
    myOrder.classList.add('inactive')
});


//Mobile Menu
mobileBtnHam.addEventListener('click' , (e) => {
    
    mobileMenu.classList.toggle('inactive')
    myOrder.classList.add('inactive')
});

//Shopping Car
shoppingCart.addEventListener('click', (e) => {
    
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    myOrder.classList.toggle('inactive')
});

//Products
const productList = [];
productList.push({
    name: "Laptop",
    price: 200,
    image : "https://servicios.zonatecno.com.uy/productos/Notebook_Apple_Macbook_Air_2020_MGN63LL_M1_256GB_8GB_S.Gray_tab_1.png"
});

productList.push({
    name: "Phone",
    price: 80,
    image : "https://servicios.zonatecno.com.uy/productos/Notebook_Apple_Macbook_Air_2020_MGN63LL_M1_256GB_8GB_S.Gray_tab_1.png"
});

productList.push({
    name: "Camera",
    price: 100,
    image : "https://servicios.zonatecno.com.uy/productos/Notebook_Apple_Macbook_Air_2020_MGN63LL_M1_256GB_8GB_S.Gray_tab_1.png"
});

productList.push({
    name: "Laptop",
    price: 200,
    image : "https://servicios.zonatecno.com.uy/productos/Notebook_Apple_Macbook_Air_2020_MGN63LL_M1_256GB_8GB_S.Gray_tab_1.png"
});

productList.push({
    name: "Phone",
    price: 80,
    image : "https://servicios.zonatecno.com.uy/productos/Notebook_Apple_Macbook_Air_2020_MGN63LL_M1_256GB_8GB_S.Gray_tab_1.png"
});

productList.push({
    name: "Camera",
    price: 100,
    image : "https://servicios.zonatecno.com.uy/productos/Notebook_Apple_Macbook_Air_2020_MGN63LL_M1_256GB_8GB_S.Gray_tab_1.png"
});


const renderProducts = arr => {


    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const prodcutImg = document.createElement('img');
        prodcutImg.setAttribute('src' , product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const childProductInfo = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p');
        productName.innerText = product.name
    
        
        const productFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src' , './assets/icons/bt_add_to_cart.svg')
    
        cardsContainer.appendChild(productCard);
        productCard.appendChild(prodcutImg);
        productCard.appendChild(productInfo);
        productInfo.appendChild(childProductInfo);
        productInfo.appendChild(productFigure);
        childProductInfo.appendChild(productPrice);
        childProductInfo.appendChild(productName);
        productFigure.appendChild(productImgCart);    
    }
}

renderProducts(productList);