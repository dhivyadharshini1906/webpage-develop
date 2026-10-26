var product=document.getElementById("products")
var search=document.getElementById("search")
var list=product.querySelectorAll("div")

search.addEventListener("keyup",function(event){
    var enteredvalue=event.target.value.toUpperCase()
    for(var i=0;i<list.length;i++){
        var productname=list[i].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            list[i].style.display="none"
        }
        else{
            list[i].style.display="block"
        }
    }
})