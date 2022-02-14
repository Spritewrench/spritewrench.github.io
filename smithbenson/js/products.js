

/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Array.prototype.[method name] allows you to define/overwrite an objects method
 * needle is the item you are searching for
 * this is a special variable that refers to "this" instance of an Array.
 * returns true if needle is in the array, and false otherwise
 */
Array.prototype.contains = function ( needle ) {
   for (i in this) {
       if (this[i] == needle) return true;
   }
   return false;
}
window.onload = function() {

  var categories = [];
  for(var i = 0; i < products.length; i++){
    //console.log(categories.contains(products[i].productCategory));
    if(!categories.contains(products[i].productCategory)){
      categories[i] = products[i].productCategory;
      var ul = document.getElementById("dropdown-content");
      var li = document.createElement("li");
      li.innerHTML = products[i].productCategory;
      li.onclick =  function() { 
        if (!window.location.hash) {
            window.location = "product.html#"+this.innerHTML;
        } else {
          window.location = "product.html#"+this.innerHTML;
            window.location.reload();
        }        
         
        
     };

      ul.appendChild(li);    
      

    }
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////
function loadProducts(category){
 console.log(category)
  for(var i = 0; i < products.length; i++){
    
    if(products[i].productCategory == category){
        var stock= document.getElementById("stock");
      
        var div = document.createElement("div");
        div.className = "col-xs-4 productBreakdown";
        
        div.innerHTML= ""+
           "<a class='popup-with-form' href='#consul-form'  ><img class='product' src='images/products/"+products[i].productImg+"'/></a> "+
            "<div id='consul-form' class='row center-xs-4 white-popup-block mfp-hide'>"+
              "<div class='col-xs-6 '>"+
                "<img class='product' src='images/products/"+products[i].productImg+"'/>"+
              "</div>"+
              "<div class='col-xs-6 consul-info'>"+
                "<span class='consul-name'>"+products[i].productName+"</span>"+                       
                "<br/>"+
                "<br/>"+
                ""+products[i].productDesc+""+
                "<br/>"+
                "<br/>"+
              "</div>"+
            "</div>"+
            "<br/>  ";
      
      stock.appendChild(div)
    }
  }  
}
