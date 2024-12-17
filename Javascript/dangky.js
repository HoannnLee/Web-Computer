var pwd1 = document.querySelector('.input-data-pwd');
var pwd2 = document.querySelector('.input-data-pwd1');
var btn = document.querySelector('#submit-btn');
var phone = document.querySelector('.input-data-number');


pwd1.addEventListener('blur', function(){
    var Kiemtra = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    if(!Kiemtra.test(pwd1.value)){
        alert('mật khẩu nhập vào không hợp lệ');
    }
})


pwd2.addEventListener('blur', function(){
    if(pwd1.value !== pwd2.value){
        alert('mật khẩu không trùng khớp');
    }
})
 
phone.addEventListener('blur',function(){
    var kiemtra = /^\d{1,10}$/;
    if(phone.value != ' ')
        if(!kiemtra.test(phone.value) ){
            alert('số điện thoại không hợp lệ')
        }
})


var email = document.querySelector('.input-data-email');
var regularExp= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

btn.addEventListener('click', function(){
    if (!regularExp.test(email.value)) { 
            alert('Email không hợp lệ');
            email.focus; 
            return false; 
        }
})