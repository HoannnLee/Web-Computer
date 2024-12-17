var btnDec =document.querySelector('.btn-add');
var btnInc = document.querySelector(".btn-subtraction");
var value = parseInt(document.querySelector('.quantity-number').value,10);

// tăng số lượng
btnDec.addEventListener("click", function(){
    if(isNaN(value)){
        document.querySelector('.quantity-number').value = 0;
    }
    else{
        document.querySelector('.quantity-number').value = value;
    }
    value++;
    document.querySelector('.quantity-number').value = value;

})

// giảm số lượng
btnInc.addEventListener("click", function(){
    if(isNaN(value)){
        document.querySelector('.quantity-number').value = 0;
    }
    else{
        document.querySelector('.quantity-number').value = value;
    }
    value--;
    if(value < 0){ value = 0}
     document.querySelector('.quantity-number').value = value;
})
