 function main() {
    console.log("Hello")
    function onsuccess(productList) {
        console.log('hi');
        console.log(productList);
        var clothing = document.getElementById('clothing');
        var accessory = document.getElementById('accessories');
        for(var counter = 0; counter <= productList.length ; counter++){
          var current = productList[counter];
          if(current.isAccessory){
            access = accessory;
          }
          else{
            access = clothing;
          }
          var card = document.createElement('div');
          access.style.display = 'flex';
          access.style.marginLeft = '180px';
          card.style.margin = '10px';
          card.classList.add('card');//Add css class to the element
          card.style.cursor = 'pointer';
          card.style.borderRadius = '8px'; 
          var a = document.createElement('a');
          a.href = 'Product_Details'+current.id+'.html';
          a.style.textDecoration = 'none';
          var img= document.createElement('img');
          img.src = current.preview;
          img.style.width = '210px';
          var h4 = document.createElement('h4');
          h4.innerText = current.name;
          h4.style.paddingLeft = '12px';
          h4.style.fontSize = '18px';
          h4.style.fontWeight = '10';
          h4.style.letterSpacing = '0.5px';
          h4.style.color = 'rgb(27, 25, 15)';
          h4.style.fontFamily = 'Montserrat", sans-serif';
          var p = document.createElement('p');
          p.innerText = current.brand;
          p.style.marginTop = '10px';
          p.style.color = 'rgb(110, 110, 110)';
          p.style.fontSize = '15px';
          p.style.fontWeight = '500';
          p.style.paddingLeft = '12px';
          p.style.fontFamily = 'Montserrat", sans-serif';
          var span = document.createElement('span');
          span.innerText = current.price;
          span.style.marginTop = '10px';
          span.style.fontSize = '18px';
          span.style.letterSpacing = '1px';
          span.style.color = '#009688';
          span.style.paddingLeft = '12px';
          span.style.fontWeight = 'bold';
          span.style.fontFamily = 'Montserrat", sans-serif';
          card.appendChild(a);
          a.appendChild(img);
          a.appendChild(h4);
          a.appendChild(p);
          a.appendChild(span);
          access.appendChild(card);
          var access;
          var x = window.matchMedia("(max-width: 400px)");
          if(x.matches){
            access.style.display = 'grid'; 
            access.style.gridTemplateColumns = 'auto auto';
            access.style.marginLeft = '-10px';
          }
        }  
    }
    function onerror() {
        console.log('Error');
    }
    $.ajax({
        method: 'GET',
        url: 'https://5d76bf96515d1a0014085cf9.mockapi.io/product',
        success: onsuccess,
        error: onerror
    })
}
$(document).ready(main);


 
  
