var products = document.getElementById('products');
function addToCart(e){
  e.preventDefault();
  products.innerText = Number(products.innerText) + 1;
  // localStorage. setItem('status', true);
  // localStorage.setItem('Items',JSON.stringify(products.innerText));
  // var stock = localStorage.getItem('Items');
  // console.log(stock);
  // // products.innerText = Number(stock);
}
var submit = document.getElementById('submit');
submit.addEventListener('click',addToCart);   