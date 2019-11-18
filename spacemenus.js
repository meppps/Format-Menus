var pageTitle = document.querySelector('h1.page-title');
var price = document.querySelectorAll('span.price');
var breadcrumb = document.querySelector('.woocommerce-breadcrumb');

// Check if menu page
if(pageTitle != null){
    menu = true;
    alignMenu();
    console.log('Menu: True')
    console.log('Menu Aligned')
}else{
    console.log('Menu: False')
    console.log('No alignment needed')
};

// Check if product page
if(breadcrumb != null){
    console.log('Product: True')
};



function alignMenu(){
    var productTitle = document.querySelectorAll('h2.woocommerce-loop-product__title');
    var productTitleHeight = document.querySelectorAll('h2.woocommerce-loop-product__title').clientHeight;
    let titleList = []
    productTitle.forEach((productTitle) =>{
        titleList.push(productTitle.clientHeight)
        console.log(productTitle.clientHeight)
});
    var maxHeight = Math.max.apply(Math, titleList);
    console.log(titleList);
        productTitle.forEach((productTitle) =>{
            productTitle.style.height = maxHeight + 'px'
        })    
    };
alignMenu()

