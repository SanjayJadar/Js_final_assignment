function main() {
    function onSuccess(productData) {
      console.log('hi');
          console.log('Entered Successfully')
          var image = document.getElementById('image');
          image.src = productData.preview;
          image.style.width = '470px';
          image.style.height = '630px';
        
          var divLeft = document.getElementById('left');
          divLeft.style.marginTop = '90px';
          divLeft.style.marginLeft = '170px';
        
          var divRight = document.getElementById('right');
          divRight.style.marginTop = '90px';
          divRight.style.marginLeft = '40px';
        
          var h1 = document.createElement('h1');
          h1.innerText = productData.name;
          h1.style.fontSize = '44px';
          h1.style.fontWeight = '300';
          h1.style.letterSpacing = '-2px';
          h1.style.fontFamily = '"Montserrat", sans-serif';
          divRight.appendChild(h1);
        
          var heading1 = document.createElement('h3');
          heading1.innerText =  productData.brand;
          heading1.style.fontSize = '20px';
          heading1.style.fontWeight = '200';
          heading1.style.letterSpacing = '1px';
          heading1.style.fontFamily = '"Montserrat", sans-serif';
          heading1.style.color = 'rgb(27, 25, 25)';
          divRight.appendChild(heading1);
        
          var heading2 = document.createElement('h3');
          heading2.innerText = 'Price: Rs ';
          heading2.style.fontSize = '20px';
          heading2.style.fontWeight = '200';
          heading2.style.letterSpacing = '1px';
          heading2.style.fontFamily = '"Montserrat", sans-serif';
          heading2.style.color = 'rgb(27, 25, 25)';
          divRight.appendChild(heading2);
        
          var span = document.createElement('span');
          span.innerText = productData.price;
          span.style.color = '#009688';
          span.style.fontWeight = 'bold';
          span.style.fontFamily = '"Montserrat", sans-serif';
          heading2.appendChild(span);
        
          var heading3 = document.createElement('h3');
          heading3.innerText = 'Description';
          heading3.style.fontSize = '20px';
          heading3.style.fontWeight = '200';
          heading3.style.letterSpacing = '1px';
          heading3.style.fontFamily = '"Montserrat", sans-serif';
          heading3.style.color = 'rgb(27, 25, 25)';
          divRight.appendChild(heading3);
        
          var p = document.createElement('p');
          p.innerText = productData.description;
          p.style.fontSize = '16px';
          p.style.fontWeight = '300';
          p.style.color = '#86939e';
          p.style.fontFamily = '"Montserrat", sans-serif';
          divRight.appendChild(p);
        
          var heading4 = document.createElement('h3');
          heading4.innerText = 'Product Preview';
          heading4.style.fontSize = '20px';
          heading4.style.fontWeight = '200';
          heading4.style.letterSpacing = '1px';
          heading4.style.fontFamily = '"Montserrat", sans-serif';
          heading4.style.color = 'rgb(27, 25, 25)';
          divRight.appendChild(heading4);
        
          var thumbnail = document.createElement("div");
          thumbnail.id = "thumbnail";
          thumbnail.style.marginBottom = '30px';
          var imgID = "";
          for (var i = 0; i < productData.photos.length; i++) {
            var img = document.createElement("img");
            imgID = "img" + i;
            img.id = imgID;
            if (i === 0) {
              img.className = "border";
            }
            img.src = productData.photos[i];
            img.alt = "preview" + i;
            thumbnail.appendChild(img);
          }
          divRight.appendChild(thumbnail);
          
          function removeBorder() {
            img0.classList.remove("border");
            img1.classList.remove("border");
            img2.classList.remove("border"); 
          }
        
          var img0 = document.getElementById("img0");
          img0.addEventListener("click", function () {
            removeBorder();
            img0.className = "border";
            image.src = img0.src;
          });
        
          var img1 = document.getElementById("img1");
          img1.addEventListener("click", function () {
            removeBorder();
            img1.className = "border";
            image.src = img1.src;
          });
        
          var img2 = document.getElementById("img2");
          img2.addEventListener("click", function () {
            removeBorder();
            img2.className = "border";
            image.src = img2.src;
          }); 
        
          var submit = document.getElementById('submit');
          submit.id = 'submit';
          submit.innerText = 'Add to Cart';
          submit.style.backgroundColor = '#009688';
          submit.style.color = 'white';
          submit.style.fontSize = '22px';
          submit.style.fontWeight = '500';
          submit.style.padding = '6px 12px';
          submit.style.borderRadius = '5px';
          submit.style.border = 'none';
          submit.style.cursor = 'pointer';
          submit.style.margin = '20px';
          divRight.appendChild(submit); 
        
          var x = window.matchMedia("(max-width: 500px)");
          if(x.matches){
            var total = document.getElementById('Total');
            total.style.display = 'inline';
            divLeft.style.marginLeft = '0px';
            divRight.style.marginLeft = '10px';
            divLeft.style.marginTop = '20px';
          }
    }
    function onError() {
        console.log('Check your network connection')
    }
    $.ajax({
        method: 'GET',
        url: 'https://5d76bf96515d1a0014085cf9.mockapi.io/product/7',
        success: onSuccess,
        error: onError
    })
}

$(document).ready(main);
  